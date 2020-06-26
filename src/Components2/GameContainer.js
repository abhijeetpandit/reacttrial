import React, { Component } from 'react'

export default class GameContainer extends Component {


    constructor(props) {
        super(props)

        this.state = {
            buttonVal: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            currentPlayer: 1,
            gameOver: 0
        }
        this.clickFunction = this.clickFunction.bind(this);
        this.resetFunction = this.resetFunction.bind(this);
    }

    resetFunction(event) {
        this.setState({
            buttonVal: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            currentPlayer: 1,
            gameOver: 0
        })
    }

    clickFunction(event) {
        if (this.state.gameOver > 0) {
            return;
        }
        let btVal = this.state.buttonVal;
        const currPl = this.state.currentPlayer;

        let index = parseInt(event.target.id.substring(4));
        if (btVal[index] === 0) {
            btVal[index] = currPl;

            this.setState({
                buttonVal: btVal,
                currentPlayer: currPl === 1 ? 2 : 1
            })
            updateGame(this);
        }

        function updateGame(ref) {

            let f = btVal[0] + btVal[1] + btVal[2];
            if ((btVal[0] > 0 && btVal[1] > 0 && btVal[2] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 1
                })
                return;
            }
            f = btVal[3] + btVal[4] + btVal[5];
            if ((btVal[3] > 0 && btVal[4] > 0 && btVal[5] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 2
                })
                return;
            }
            f = btVal[6] + btVal[7] + btVal[8];
            if ((btVal[6] > 0 && btVal[7] > 0 && btVal[8] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 3
                })
                return;
            }

            f = btVal[0] + btVal[3] + btVal[6];
            if ((btVal[0] > 0 && btVal[3] > 0 && btVal[6] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 4
                })
                return;
            }
            f = btVal[1] + btVal[4] + btVal[7];
            if ((btVal[1] > 0 && btVal[4] > 0 && btVal[7] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 5
                })
                return;
            }
            f = btVal[2] + btVal[5] + btVal[8];
            if ((btVal[2] > 0 && btVal[5] > 0 && btVal[8] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 6
                })
                return;
            }

            f = btVal[0] + btVal[4] + btVal[8];
            if ((btVal[0] > 0 && btVal[4] > 0 && btVal[8] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 7
                })
                return;
            }

            f = btVal[2] + btVal[4] + btVal[6];
            if ((btVal[2] > 0 && btVal[4] > 0 && btVal[6] > 0) && (f === 3 || f === 6)) {
                ref.setState({
                    gameOver: 8
                })
                return;
            }


        }
    }


    static checkGameOver(a, b, c, d) {
        let sum = a + b + c;
        if ((a > 0 && b > 0 && c > 0) && (sum === 3 || sum === 6)) {
            return d;
        } else {
            return 0;
        }
    }

    render() {

        let my = ['cell', 'cell cross', 'cell circle'];
        let gameOverStyles = [
            'gameEnd',
            'gameEnd gameEnd1',
            'gameEnd gameEnd2',
            'gameEnd gameEnd3',
            'gameEnd gameEnd4',
            'gameEnd gameEnd5',
            'gameEnd gameEnd6',
            'gameEnd gameEnd7',
            'gameEnd gameEnd8',
        ];
        return (
            <div className="pageContainer">
                <div className="banner"><span className="title">TIK - TAK - TOE</span></div>

                <div className="bodyContent">
                    <div className="App22">
                        <div className={gameOverStyles[this.state.gameOver]}>

                        </div>
                        <div className="row">
                            <span className={my[this.state.buttonVal[0]]} id="item00" onClick={this.clickFunction}></span>
                            <span className={my[this.state.buttonVal[1]]} id="item01" onClick={this.clickFunction}></span>
                            <span className={my[this.state.buttonVal[2]]} id="item02" onClick={this.clickFunction}></span>
                        </div>
                        <div className="row">
                            <span className={my[this.state.buttonVal[3]]} id="item03" onClick={this.clickFunction}></span>
                            <span className={my[this.state.buttonVal[4]]} id="item04" onClick={this.clickFunction}></span>
                            <span className={my[this.state.buttonVal[5]]} id="item05" onClick={this.clickFunction}></span>
                        </div>
                        <div className="row">
                            <span className={my[this.state.buttonVal[6]]} id="item06" onClick={this.clickFunction}></span>
                            <span className={my[this.state.buttonVal[7]]} id="item07" onClick={this.clickFunction}></span>
                            <span className={my[this.state.buttonVal[8]]} id="item08" onClick={this.clickFunction}></span>
                        </div>
                    </div>
                    <div className="buttonsPanel">
                        <div className={this.state.currentPlayer === 1 ? "buttonItem buttonItemBorder" : "buttonItem"}>
                            <span>Player 1</span>
                            <span className={my[1]}></span>
                        </div>
                        <div className={this.state.currentPlayer === 2 ? "buttonItem buttonItemBorder" : "buttonItem"}>
                            <span>Player 2</span>
                            <span className={my[2]}></span>
                        </div>
                        <div className={"buttonItem"}>
                            <span>Reset</span>
                            <span className={"cell resr"} onClick={this.resetFunction}></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
