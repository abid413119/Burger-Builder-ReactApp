import React, { Component } from 'react';
import Wrapper from '../../hoc/wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import './BurgerBuilder.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 0.6
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchaseModal: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://burger-builder-eca19.firebaseio.com/ingredients.json')
            .then(response => this.setState({ ingredients: response.data }))
            .catch(error => {this.setState({error:true})})
    }

    updatePurchasState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)

        this.setState({
            purchasable: sum > 0
        })

    }

    addIngredientHandler = (type) => {
        // ingredient update
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;

        // price update
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })
        this.updatePurchasState(updatedIngredient)
    }

    removeIngredientHandler = (type) => {
        // ingredient update
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;

        // price update
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })
        this.updatePurchasState(updatedIngredient)
    }

    purchaseModalHandler = () => {
        this.setState({
            purchaseModal: true
        })
    }

    purchaseCancelHandle = () => {
        this.setState({
            purchaseModal: false
        })
    }

    purchaseContinueHandle = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Abid Al Amin",
                address: {
                    street: 'TestStreet 1',
                    zipCode: '445125',
                    country: 'Bangladesh'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchaseModal: false })
            })
            .catch(error => {
                this.setState({ loading: false, purchaseModal: false })
            })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null
        
        let burger = this.state.error?<p>Can't load ingredients. Server Error!</p>:<Spinner color="red" />
        if (this.state.ingredients) {
            burger = (
                <Wrapper>
                    <Burger className="Burger" ingredients={this.state.ingredients} />
                    <BuildControls
                        className="Controls"
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        openModal={this.purchaseModalHandler}
                        purchasable={this.state.purchasable}
                    />
                </Wrapper>
            )
            orderSummary = (<OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancelHandle={this.purchaseCancelHandle}
                purchaseContinueHandle={this.purchaseContinueHandle}
                totalPrice={this.state.totalPrice.toFixed(2)}
            />)
        }
        if (this.state.loading) {
            orderSummary = <Spinner color="white" />
        }

        return (
            <Wrapper>
                <Modal show={this.state.purchaseModal} modalClosed={this.purchaseCancelHandle}>
                    {orderSummary}
                </Modal>
                
                {burger}

            </Wrapper>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);