import React, { Component } from 'react'

export default class Acting extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            acting: props.acting
        }
    }

    render() {

        var { acting } = this.state

        if ( acting ) {
            var actingList = acting.map((d,i) => {

                return <div key={i + 'acting'}>

                        <p>{d.namefighter}</p>

                        <p>{d.speed}</p>

                        <p>{d.actioncount}</p>

                        </div>
            })
        }

        return (
            <div>
                <h1>this is acting</h1>
                {actingList}
            </div>
        )
    }
}