import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pro from './components/Pro.jsx'
import MoreDetails from './components/more-details.jsx'
import SignIn from './components/sinIn.jsx'
import SignUp from './components/sinup.jsx'

export default class Index extends Component {
    constructor(props) {
        super(props)
         this.state={
             view:"pro",
             product:null,
         }
         this.ChangeView=this.ChangeView.bind(this)
         this.renderView=this.renderView.bind(this)
    }
    ChangeView(view, product) {
        this.setState({
            view: view,
            product: product

        })
    }
    renderView() {
    const  view = this.state.view;
    if (view === "pro") {
        return <Pro ChangeView={this.ChangeView}/>
    }
    if (view === "details") {
        return <MoreDetails product={this.state.product} ChangeView={this.ChangeView}/>
    }
    if (view === "signin") {
        return <SignIn ChangeView={this.ChangeView} />
    }
    if (view === "signup") {
        return <SignUp ChangeView={this.ChangeView} />
    }
    }
    render() {
        return (
            <div>
              {this.renderView()}
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));