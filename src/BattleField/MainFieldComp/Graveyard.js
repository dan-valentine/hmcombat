import React, { Component } from 'react'

export default class Graveyard extends Component {
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
            var graveList = this.state.list.map((d, i) => {

                if (d.dead === '1') {

                    return <div className="ListGrave"
                        key={d.namefighter + i + 'acting'}>

                        <p className="ListItemGrave GraveName gravelist">{d.namefighter}</p>

                        <button className="ListItemGrave gravelist"
                            onClick={_ => this.props.kill(d.id)}
                        >\(•◡•)/</button>

                        <button className="ListItemGrave gravelist"
                            onClick={_ => this.props.remove(d.id)}
                        >X</button>

                    </div>
                }
            })
        }

        return (
            <div className="BattleSidebar Main">
                <h2>the Dead</h2>
                <div className="HeaderGrave">
                    <h1 className="ListItemGrave GraveName">Name</h1>
                    <h1 className="ListItemGrave">Resurrect</h1>
                    <h1 className="ListItemGrave">Remove</h1>
                </div>
                <div className="border graveborder"></div>
                {graveList}
                <div className="border graveborder"></div>
            </div>
        )
    }
}