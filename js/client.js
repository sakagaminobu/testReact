import React, { useContext } from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.today = new Date();
        console.log(this.today.getMonth())
        this.showDate = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
        this.state = {
            text: ['Lemon', 'Orange', 'Melon'],
            isClick: false,
            count: 0,
            isNextClick: false,
            isPreviousClick: false,
            squares: [["1","2","3"],["4","5","6"],["7","8",'']],
            week: ['日', '月', '火', '水', '木', '金', '土']
        }
    }

    clickStartTimer() {
        /*if (this.state.isClick) {
            this.setState({
                text: 'Lemon',
                isClick: false
            });
        } else {
            this.setState({
                text: 'Orange',
                isClick: true
            });
        }*/
            this.setState({
                first: setInterval(() => {
                    this.setState({text: 'Orange'});
                }),
                last: setInterval(() => {
                    this.setState({text: 'Lemon'});
                })
            });
    }

    clickStopTimer() {
        this.setState({
            first: '',
            last: ''
        });
    }
    
    moveText(text) {
                const firstWord = this.state.text[0];
                const secondWord = this.state.text[1];
                const thirdWord = this.state.text[2];
        switch (text) {
            case 'Lemon':
                  this.setState({
                    text: [secondWord, firstWord, thirdWord]
                  })
            break;
            case 'Orange':
                  this.setState({
                    text: [firstWord, thirdWord, secondWord]
                });  
            break;
            case 'Melon':
                    this.setState({
                      text: [thirdWord, secondWord, firstWord]
                  });
            break;
        }
    }

    returnText(text) {
            const firstWord = this.state.text[0];
            const secondWord = this.state.text[1];
            const thirdWord = this.state.text[2];
            switch (text) {
                case 'Lemon':
                        this.setState({
                            text: [thirdWord, secondWord, firstWord]
                        });
                break;
                case 'Orange':
                        this.setState({
                            text: [secondWord, firstWord, thirdWord]
                        }); 
                    
                break;
                case 'Melon':
                          this.setState({
                              text: [firstWord, thirdWord, secondWord]
                          });
                break;
            }
    }

    useText(number) {
        return this.state.text[number];
    }

    checkMove(number) {
                const square = this.state.squares[0][0];
                const twoSquare = this.state.squares[0][1];
                const threeSquare = this.state.squares[0][2];
                const fourSquare = this.state.squares[1][0];
                const fiveSquare = this.state.squares[1][1];
                const sixSquare = this.state.squares[1][2];
                const sevenSquare = this.state.squares[2][0];
                const eightSquare = this.state.squares[2][1];
                const nineSquare = this.state.squares[2][2];
                const sq = document.getElementsByClassName('square')[0];
                const sqTwo = document.getElementsByClassName('square-two')[0];
                const sqThree = document.getElementsByClassName('square-three')[0];
                const sqFour = document.getElementsByClassName('square-four')[0];
                const sqFive = document.getElementsByClassName('square-five')[0];
                const sqSix = document.getElementsByClassName('square-six')[0];
                const sqSeven = document.getElementsByClassName('square-seven')[0];
                const sqEight = document.getElementsByClassName('square-eight')[0];
                const sqNine = document.getElementsByClassName('square-nine')[0];
                const btn = document.getElementsByClassName('btn')[0];
                const btnTwo = document.getElementsByClassName('btn-two')[0];
                const btnThree = document.getElementsByClassName('btn-three')[0];
                const btnFour = document.getElementsByClassName('btn-four')[0];
                const btnFive = document.getElementsByClassName('btn-five')[0];
                const btnSix = document.getElementsByClassName('btn-six')[0];
                const btnSeven = document.getElementsByClassName('btn-seven')[0];
                const btnEight = document.getElementsByClassName('btn-eight')[0];
                const btnNine = document.getElementsByClassName('btn-nine')[0];
        switch (number) {
            case "1":
                if (twoSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = square;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('2');
                     });
                     newSquare.classList.add('btn-two');
                     sqTwo.appendChild(newSquare);
                     sq.removeChild(btn);
                     this.setState({
                         squares: [['',square, threeSquare],[fourSquare, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (fourSquare === ''){
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = square;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('4');
                     });
                     newSquare.classList.add('btn-four');
                     sqFour.appendChild(newSquare);
                     sq.removeChild(btn);
                     this.setState({
                         squares: [['',twoSquare, threeSquare],[square, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (threeSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = square;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('2');
                     });
                     newSquare.classList.add('btn-two');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = twoSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('3');
                     });
                     newSquareTwo.classList.add('btn-three');
                     //sq.appendChild(newSquare);
                     sq.removeChild(btn);
                     sqTwo.removeChild(btnTwo);
                     sqTwo.appendChild(newSquare);
                     sqThree.appendChild(newSquareTwo);
                     this.setState({
                         squares: [['',square, twoSquare],[fourSquare, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (sevenSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = square;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('4');
                     });
                     newSquare.classList.add('btn-four');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = fourSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('7');
                     });
                     newSquareTwo.classList.add('btn-seven');
                     sqFour.removeChild(btnFour);
                     sq.removeChild(btn);
                     sqFour.appendChild(newSquare);
                     sqSeven.appendChild(newSquareTwo);
                     this.setState({
                         squares: [['', twoSquare, threeSquare],[square, fiveSquare, sixSquare],[fourSquare, eightSquare, nineSquare]]
                     });
                }
            break;
            case '2':
                if (square === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = twoSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('1');
                     });
                     newSquare.classList.add('btn');
                     sq.appendChild(newSquare);
                     sqTwo.removeChild(btnTwo);
                     this.setState({
                         squares: [[twoSquare, '', threeSquare],[fourSquare, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (threeSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = twoSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('3');
                     });
                     newSquare.classList.add('btn-three');
                     sqThree.appendChild(newSquare);
                     sqTwo.removeChild(btnTwo);
                     this.setState({
                         squares: [[square, '', twoSquare],[fourSquare, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (fiveSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = twoSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     sqFive.appendChild(newSquare);
                     sqTwo.removeChild(btnTwo);
                     this.setState({
                         squares: [[square, '', threeSquare],[fourSquare, twoSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (eightSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = twoSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = fiveSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('8');
                     });
                     newSquareTwo.classList.add('btn-eight');
                     sqTwo.removeChild(btnTwo);
                     sqFive.removeChild(btnFive);
                     sqFive.appendChild(newSquare);
                     sqEight.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[square, '', threeSquare],[fourSquare, twoSquare, sixSquare],[sevenSquare, fiveSquare, nineSquare]]
                     });
                }
            break;
            case '3':
                if (twoSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = threeSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('2');
                     });
                     newSquare.classList.add('btn-two');
                     sqTwo.appendChild(newSquare);
                     sqThree.removeChild(btnThree);
                     this.setState({
                         squares: [[square, threeSquare, ''],[fourSquare, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (sixSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = threeSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('6');
                     });
                     newSquare.classList.add('btn-six');
                     sqSix.appendChild(newSquare);
                     sqThree.removeChild(btnThree);
                     this.setState({
                         squares: [[square, twoSquare, ''],[fourSquare, fiveSquare, threeSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (square === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = threeSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('2');
                     });
                     newSquare.classList.add('btn-two');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = twoSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('1');
                     });
                     newSquareTwo.classList.add('btn');
                     sqThree.removeChild(btnThree);
                     sqTwo.removeChild(btnTwo);
                     sqTwo.appendChild(newSquare);
                     sq.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[twoSquare, threeSquare, ''],[fourSquare, fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (nineSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = threeSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('6');
                     });
                     newSquare.classList.add('btn-six');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = sixSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('9');
                     });
                     newSquareTwo.classList.add('btn-nine');
                     sqThree.removeChild(btnThree);
                     sqSix.removeChild(btnSix);
                     sqSix.appendChild(newSquare);
                     sqNine.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[square, twoSquare, ''],[fourSquare, fiveSquare, threeSquare],[sevenSquare, eightSquare, sixSquare]]
                     });
                }
            break;
            case '4':
                if (square === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fourSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('1');
                     });
                     newSquare.classList.add('btn');
                     sq.appendChild(newSquare);
                     sqFour.removeChild(btnFour);
                     this.setState({
                         squares: [[fourSquare, twoSquare, threeSquare],['', fiveSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (fiveSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fourSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     sqFive.appendChild(newSquare);
                     sqFour.removeChild(btnFour);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],['', fourSquare, sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (sevenSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fourSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('7');
                     });
                     newSquare.classList.add('btn-seven');
                     sqSeven.appendChild(newSquare);
                     sqFour.removeChild(btnFour);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],['', fiveSquare, sixSquare],[fourSquare, eightSquare, nineSquare]]
                     });
                } else if (sixSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fourSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = fiveSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('6');
                     });
                     newSquareTwo.classList.add('btn-six');
                     sqFour.removeChild(btnFour);
                     sqFive.removeChild(btnFive);
                     sqFive.appendChild(newSquare);
                     sqSix.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],['', fourSquare, fiveSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                }
            break;
            case '5':
                if (twoSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fiveSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('2');
                     });
                     newSquare.classList.add('btn-two');
                     sqTwo.appendChild(newSquare);
                     sqFive.removeChild(btnFive);
                     this.setState({
                         squares: [[square, fiveSquare, threeSquare],[fourSquare, '', sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (fourSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fiveSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('4');
                     });
                     newSquare.classList.add('btn-four');
                     sqFour.appendChild(newSquare);
                     sqFive.removeChild(btnFive);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fiveSquare, '', sixSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (sixSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fiveSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('6');
                     });
                     newSquare.classList.add('btn-six');
                     sqSix.appendChild(newSquare);
                     sqFive.removeChild(btnFive);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, '', fiveSquare],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (eightSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = fiveSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('8');
                     });
                     newSquare.classList.add('btn-eight');
                     sqEight.appendChild(newSquare);
                     sqFive.removeChild(btnFive);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, '', sixSquare],[sevenSquare, fiveSquare, nineSquare]]
                     });
                }
            break;
            case '6':
                if (threeSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sixSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('3');
                     });
                     newSquare.classList.add('btn-three');
                     sqThree.appendChild(newSquare);
                     sqSix.removeChild(btnSix);
                     this.setState({
                         squares: [[square, twoSquare, sixSquare],[fourSquare, fiveSquare, ''],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (fiveSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sixSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     sqFive.appendChild(newSquare);
                     sqSix.removeChild(btnSix);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, sixSquare, ''],[sevenSquare, eightSquare, nineSquare]]
                     });
                } else if (nineSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sixSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('9');
                     });
                     newSquare.classList.add('btn-nine');
                     sqNine.appendChild(newSquare);
                     sqSix.removeChild(btnSix);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, ''],[sevenSquare, eightSquare, sixSquare]]
                     });
                } else if (fourSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sixSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = fiveSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('4');
                     });
                     newSquareTwo.classList.add('btn-four');
                     sqSix.removeChild(btnSix);
                     sqFive.removeChild(btnFive);
                     sqFive.appendChild(newSquare);
                     sqFour.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fiveSquare, sixSquare, ''],[sevenSquare, eightSquare, nineSquare]]
                     });
                }
            break;
            case '7':
                if (fourSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sevenSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('4');
                     });
                     newSquare.classList.add('btn-four');
                     sqFour.appendChild(newSquare);
                     sqSeven.removeChild(btnSeven);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[sevenSquare, fiveSquare, sixSquare],['', eightSquare, nineSquare]]
                     });
                } else if (eightSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sevenSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('8');
                     });
                     newSquare.classList.add('btn-eight');
                     sqEight.appendChild(newSquare);
                     sqSeven.removeChild(btnSeven);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, sixSquare],['', sevenSquare, nineSquare]]
                     });
                } else if (square === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sevenSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('4');
                     });
                     newSquare.classList.add('btn-four');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = fourSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('1');
                     });
                     newSquareTwo.classList.add('btn');
                     sqSeven.removeChild(btnSeven);
                     sqFour.removeChild(btnFour);
                     sqFour.appendChild(newSquare);
                     sq.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[fourSquare, twoSquare, threeSquare],[sevenSquare, fiveSquare, sixSquare],['', eightSquare, nineSquare]]
                     });
                } else if (nineSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = sevenSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('8');
                     });
                     newSquare.classList.add('btn-eight');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = eightSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('9');
                     });
                     newSquareTwo.classList.add('btn-nine');
                     sqSeven.removeChild(btnSeven);
                     sqEight.removeChild(btnEight);
                     sqEight.appendChild(newSquare);
                     sqNine.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, sixSquare],['', sevenSquare, eightSquare]]
                     });
                }
            break;
            case '8':
                if (sevenSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = eightSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('7');
                     });
                     newSquare.classList.add('btn-seven');
                     sqSeven.appendChild(newSquare);
                     sqEight.removeChild(btnEight);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, sixSquare],[eightSquare, '', nineSquare]]
                     });
                } else if (fiveSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = eightSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     sqFive.appendChild(newSquare);
                     sqEight.removeChild(btnEight);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, eightSquare, sixSquare],[sevenSquare, '', nineSquare]]
                     });
                } else if (nineSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = eightSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('9');
                     });
                     newSquare.classList.add('btn-nine');
                     sqNine.appendChild(newSquare);
                     sqEight.removeChild(btnEight);
                     this.setState({
                         squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, sixSquare],[sevenSquare, '', eightSquare]]
                     });
                } else if (twoSquare === '') {
                    const newSquare = document.createElement('button');
                     newSquare.type = 'button';
                     newSquare.innerText = eightSquare;
                     newSquare.addEventListener('click', () => {
                        this.checkMove('5');
                     });
                     newSquare.classList.add('btn-five');
                     const newSquareTwo = document.createElement('button');
                     newSquareTwo.type = 'button';
                     newSquareTwo.innerText = fiveSquare;
                     newSquareTwo.addEventListener('click', () => {
                        this.checkMove('2');
                     });
                     newSquareTwo.classList.add('btn-two');
                     sqEight.removeChild(btnEight);
                     sqFive.removeChild(btnFive);
                     sqFive.appendChild(newSquare);
                     sqTwo.appendChild(newSquareTwo);
                     this.setState({
                         squares: [[square, fiveSquare, threeSquare],[fourSquare, eightSquare, sixSquare],[sevenSquare, '', nineSquare]]
                     });
                }
            break;
            case '9':
            if (sixSquare === '') {
                const newSquare = document.createElement('button');
                 newSquare.type = 'button';
                 newSquare.innerText = nineSquare;
                 newSquare.addEventListener('click', () => {
                    this.checkMove('6');
                 });
                 newSquare.classList.add('btn-six');
                 sqSix.appendChild(newSquare);
                 sqNine.removeChild(btnNine);
                 this.setState({
                     squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, nineSquare],[sevenSquare, eightSquare, '']]
                 });
            } else if (eightSquare === '') {
                const newSquare = document.createElement('button');
                 newSquare.type = 'button';
                 newSquare.innerText = nineSquare;
                 newSquare.addEventListener('click', () => {
                    this.checkMove('8');
                 });
                 newSquare.classList.add('btn-eight');
                 sqEight.appendChild(newSquare);
                 sqNine.removeChild(btnNine);
                 this.setState({
                     squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, sixSquare],[sevenSquare, nineSquare, '']]
                 });
            } else if (threeSquare === '') {
                const newSquare = document.createElement('button');
                 newSquare.type = 'button';
                 newSquare.innerText = nineSquare;
                 newSquare.addEventListener('click', () => {
                    this.checkMove('6');
                 });
                 newSquare.classList.add('btn-six');
                 const newSquareTwo = document.createElement('button');
                 newSquareTwo.type = 'button';
                 newSquareTwo.innerText = sixSquare;
                 newSquareTwo.addEventListener('click', () => {
                    this.checkMove('3');
                 });
                 newSquareTwo.classList.add('btn-three');
                 sqNine.removeChild(btnNine);
                 sqSix.removeChild(btnSix);
                 sqSix.appendChild(newSquare);
                 sqThree.appendChild(newSquareTwo);
                 this.setState({
                     squares: [[square, twoSquare, sixSquare],[fourSquare, fiveSquare, nineSquare],[sevenSquare, eightSquare, '']]
                 });
            } else if (sevenSquare === '') {
                const newSquare = document.createElement('button');
                 newSquare.type = 'button';
                 newSquare.innerText = nineSquare;
                 newSquare.addEventListener('click', () => {
                    this.checkMove('8');
                 });
                 newSquare.classList.add('btn-eight');
                 const newSquareTwo = document.createElement('button');
                 newSquareTwo.type = 'button';
                 newSquareTwo.innerText = eightSquare;
                 newSquareTwo.addEventListener('click', () => {
                    this.checkMove('7');
                 });
                 newSquareTwo.classList.add('btn-seven');
                 sqNine.removeChild(btnNine);
                 sqEight.removeChild(btnEight);
                 sqEight.appendChild(newSquare);
                 sqSeven.appendChild(newSquareTwo);
                 this.setState({
                     squares: [[square, twoSquare, threeSquare],[fourSquare, fiveSquare, sixSquare],[eightSquare, nineSquare, '']]
                 });
            }
        break;
        }
    }

    clearCalendar() {
        const calendar = document.getElementsByClassName('calendarList')[0];
        while (document.getElementsByClassName('calendarList')[0].firstChild) {
            calendar.removeChild(document.getElementsByClassName('calendarList')[0].firstChild);
        }
    }

    previous() {
        this.showDate.setMonth(this.showDate.getMonth() - 1);
        this.clearCalendar();
        this.showProcess(this.showDate);
    }

    next() {
        this.showDate.setMonth(this.showDate.getMonth() + 1);
        this.clearCalendar();
        this.showProcess(this.showDate);
    }

    showProcess(date) {
        const btn = document.getElementsByClassName('displayCalendarBtn')[0]
        btn.disabled = true;
        btn.innerText = 'x';
        document.getElementsByClassName('month')[0].innerText = this.showDate.getFullYear() + '年' + (this.showDate.getMonth() + 1);
        let year = date.getFullYear();
        let month = date.getMonth();
        this.createProcess(year, month);
    }

    createProcess(year, month) {
        const calendar = document.getElementsByClassName('calendarList')[0];
        let count = 0;
        let startDayOfWeek = new Date(year, month, 1).getDay();
        let endDate = new Date(year, month + 1, 0).getDate();
        let lastMonthEndDate = new Date(year, month, 0).getDate();
        let row = Math.ceil((startDayOfWeek + endDate) / this.state.week.length);
        for (let i = 0; i < row; i++) {
            const tr = document.createElement('tr');
            for(let j = 0; j < this.state.week.length; j++) {
                if (i === 0 && j < startDayOfWeek) {
                    const td = document.createElement('td');
                    td.innerText = lastMonthEndDate - startDayOfWeek + j + 1;
                    td.classList.add('disabled');
                    tr.appendChild(td);
                } else if (count >= endDate) {
                    count++;
                    const td = document.createElement('td');
                    td.innerText = count - endDate;
                    td.classList.add('disabled');
                    tr.appendChild(td);
                } else {
                     count++;
                    if (year === this.today.getFullYear() && month === (this.today.getMonth()) && count === this.today.getDate()) {
                        const td = document.createElement('td');
                        td.innerText = count;
                        td.classList.add('today');
                        tr.appendChild(td);
                    } else {
                        const td = document.createElement('td');
                        td.innerText = count;
                        tr.appendChild(td);
                    }
                }
            }
            calendar.appendChild(tr);
        }
    }

  render() {
    return (
        <div>
            <div className="contents">
            <h1>{ this.useText(0) }</h1>
            <p><input
            onClick={() => {
                this.moveText('Lemon');
            }}
            type="button" 
            value="next"/>
            <input
            onClick={() => {
                this.returnText('Lemon');
            }}
            type="button" 
            value="previous"/></p>
            </div>

            <div className="contents">
            <h1>{ this.useText(1) }</h1>
            <p><input
            onClick={() => {
                this.moveText('Orange');
            }}
            type="button" 
            value="next"/>
            <input
            onClick={() => {
                this.returnText('Orange');
            }}
            type="button" 
            value="previous"/></p>
            </div>

            <div className="contents">
            <h1>{ this.useText(2) }</h1>
            <p><input
            onClick={() => {
                this.moveText('Melon');
            }}
            type="button" 
            value="next"/>
            <input
            onClick={() => {
                this.returnText('Melon');
            }}
            type="button" 
            value="previous"/></p>
            </div>
            <div>
            <table className="sudoku">
                <tbody>
                <tr>
                    <td className="square"><button 
                    onClick={() => {
                        this.checkMove('1')
                    }}
                    className="btn"
                    type="button"
                    >{ this.state.squares[0][0] }</button></td>
                    <td className="square-two">
                    <button
                        onClick={() =>
                            {this.checkMove('2')}
                        }
                        className="btn-two"
                        type="button"
                        >{ this.state.squares[0][1] }</button>
                    </td>
                    <td className="square-three"><button 
                    onClick={() => {
                        this.checkMove('3')
                    }}
                    className="btn-three"
                    type="button">{ this.state.squares[0][2] }</button></td>
                </tr>
                <tr>
                   <td className="square-four"><button 
                    onClick={() => {
                        this.checkMove('4')
                    }}
                    className="btn-four"
                    type="button">{ this.state.squares[1][0] }</button></td>
                    <td className="square-five"><button 
                    onClick={() => {
                        this.checkMove('5')
                    }}
                    className="btn-five"
                    type="button">{ this.state.squares[1][1] }</button></td>
                    <td className="square-six"><button 
                    onClick={() => {
                        this.checkMove('6')
                    }}
                    className="btn-six"
                    type="button">{ this.state.squares[1][2] }</button></td>
                </tr>
                
                <tr>
                    <td className="square-seven"><button 
                    onClick={() => {
                        this.checkMove('7')
                    }}
                    className="btn-seven"
                    type="button">{ this.state.squares[2][0] }</button></td>
                    <td className="square-eight"><button 
                    onClick={() => {
                        this.checkMove('8')
                    }}
                    className="btn-eight"
                    type="button">{ this.state.squares[2][1] }</button></td>
                    <td className="square-nine"></td>
                </tr>
                </tbody>
            </table>
            </div>
            <p className="title"><span
            onClick={() => {
                this.previous();
            }} 
            className="previous">先月</span>　<span className="month"></span>月　<span 
            onClick={() => {
                this.next();
            }} 
            className="next">来月</span></p>
            <table className="calendar">
                <thead>
                    <tr>
                        <th>日</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                    </tr>
                </thead>
                <tbody className="calendarList">
                </tbody>
            </table>
            <button onClick={() => {
                this.showProcess(this.showDate);
            }}
            type="button"
            className="displayCalendarBtn"
            >表示する</button>
        </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);