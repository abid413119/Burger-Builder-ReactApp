import React, { Component } from 'react';
import wrapper from '../../hoc/wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import './BurgerBuilder.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 0.6
}


export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchaseModal: false
    }

    updatePurchasState(ingredients){
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
        alert('continued...')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <wrapper className="wrapper">
                <Modal show={this.state.purchaseModal} modalClosed={this.purchaseCancelHandle}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelHandle={this.purchaseCancelHandle} 
                        purchaseContinueHandle={this.purchaseContinueHandle}
                        totalPrice={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                
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
                
            </wrapper>
        )
    }
}
