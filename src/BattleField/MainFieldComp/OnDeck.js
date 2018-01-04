import React, { Component } from 'react'

export default class OnDeck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            count: props.count
        }
    }

    componentWillReceiveProps(next) {
        this.setState({ list: next.list })
    }

    render() {

        if (this.state.list) {

            var deckList = this.state.list.map((d, i) => {

                if (d.acting === '0' && d.dead === '0') {

                    let color = { background: d.colorcode }

                    return <div className="List"
                        key={d.namefighter + i + 'onDeck'}>
                        <div className="color" style={color}></div>

                        <p className="ListItem Name">{d.namefighter}</p>

                        <button className="ListItem"
                            onClick={_=>this.props.advance(d.id)}
                            >{d.speed}</button>

                        <p className="ListItem">{d.actioncount}</p>

                        <button className="ListItem"
                            onClick={_=>this.props.kill(d.id)}
                            >x</button>

                    </div>
                }
            })
        }

        return (
            <div className="Main">
                <p>On Deck</p>
                <div className="Header">
                    <p className="ListItem Name NameHeader">Name</p>
                    <p className="ListItem">Speed</p>
                    <p className="ListItem">Action</p>
                    <p className="ListItem">Kill</p>
                </div>
                {deckList}
            </div>
        )
    }
}