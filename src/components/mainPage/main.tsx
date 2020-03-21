import * as React from 'react';
import styles from './main.module.css'
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IconContext } from "react-icons";


import { CSSTransition } from 'react-transition-group';

import { Frontend, Backend, Database, Devops } from './descriptions/descriptions'
export interface IMainPageProps {
    history: any,
}


export interface IMainPageState {
    showHello: boolean,
    showMessage: boolean,
    activeRed: boolean,
    activeGreen: boolean,
    activeYellow: boolean,
    activeBlue: boolean,
}


export default class MainPage extends React.Component<IMainPageProps, IMainPageState> {
    constructor(props: IMainPageProps) {
        super(props);
        this.state = {
            showHello: false,
            showMessage: false,
            activeRed: false,
            activeGreen: false,
            activeYellow: false,
            activeBlue: false,
        }
    }
    componentDidMount() {
        this.setState({
            showHello: true,
        })
        setTimeout(
            () => {
                this.setState({
                    showMessage: true
                })
            }, 1000);

    }
    active = async (name: string) => {


        switch (name) {
            case 'activeRed':
                console.log('hit');
                this.setState({
                    activeRed: true,
                    activeGreen: false,
                    activeYellow: false,
                    activeBlue: false,

                })
                break;
            case 'activeGreen':
                console.log('green')
                this.setState({
                    activeRed: false,
                    activeGreen: true,
                    activeYellow: false,
                    activeBlue: false,
                })
                break;
            case 'activeYellow':
                console.log('yellow')
                this.setState({
                    activeRed: false,
                    activeGreen: false,
                    activeYellow: true,
                    activeBlue: false,
                })
                break;
            case 'activeBlue':
                this.setState({
                    activeRed: false,
                    activeGreen: false,
                    activeYellow: false,
                    activeBlue: true,
                })
                break;
            default:
                this.setState({
                    activeRed: false,
                    activeGreen: false,
                    activeYellow: false,
                    activeBlue: true,
                })
                break;
        }
        /**
         * 
         * TYPESCRIPT DOSENT ALLOW ME TO WRITE IT THIS WAY><
         */
        /*
        for (let [key, value] of Object.entries(this.state)){
            if(name== key)
            this.setState({
                key:true,
            })
            else{
                this.setState({
                }) 
            }
        }*/

    }
    disActive = () => {

        this.setState({
            activeRed: false,
            activeGreen: false,
            activeYellow: false,
            activeBlue: false,
        })

    }
    public render() {
        const { activeRed, activeGreen, activeYellow, activeBlue } = this.state
        console.log(activeRed, activeGreen, activeYellow, activeBlue);
        return (
            <>

                <div className={activeRed ? styles.frontendWrapper : styles.hideStackPadding}
                >
                    <Frontend active={this.state.activeRed} />
                </div>
                <div className={activeGreen ? styles.backendWrapper : styles.Hide}>
                    <Backend active={this.state.activeGreen} />
                </div>
                <div className={activeYellow ? styles.databaseWrapper : styles.Hide}>
                    <Database active={this.state.activeYellow} />
                </div>
                <div className={activeBlue ? styles.devopsWrapper : styles.Hide}>
                    <Devops active={this.state.activeBlue} />
                </div>
                <div className={styles.backgroundRed}>
                    <div className={styles.backgroundVideo}>
                        <video
                            autoPlay
                            loop
                            muted
                            className={styles.fullscreenVideoWrap}>
                            <source src="Cart.mp4" type="video/mp4" />
                            <img src="logo192.png" width="400" height="300" />
                        </video>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.description}>
                        <div className={styles.name}>
                            <h1 className={styles.nameText}>Hello.</h1>
                        </div>

                        <div className={styles.title}>
                            <a className={styles.titleText}>I'm called Kevin</a>
                        </div>
                        <div className={styles.descriptionWrap}>
                            <a className={styles.descriptionText}>Honesty, integrity and hard work!</a><br />
                            <a className={styles.descriptionText}>I started writing coding since I was 16 and I'm pretty good at making software</a><br />
                            <a className={styles.descriptionText}>Writing clean code from the inside out is what I pride myself on</a>
                        </div>

                        <div className={styles.socialsWrapper}>
                            <div className={styles.icons}>
                                <IconContext.Provider value={{ color: "black" }}>
                                    <FaGithub size={'3rem'} /> <FaLinkedin size={'3rem'} /> <FaMedium size={'3rem'} />
                                </IconContext.Provider>

                            </div>
                        </div>
                    </div>
                    <div className={styles.stack}>


                        <div className={styles.stackWrapper}>
                            <CSSTransition
                                in={this.state.showMessage}
                                timeout={2000}
                                classNames="message"
                            >
                                <div className={this.state.showMessage ? styles.stackPadding : styles.stackPaddingHidden}>
                                    <h1 className={styles.stackTitle}>Check out my stack! &darr;</h1>
                                </div>
                            </CSSTransition>
                            <div
                                className={styles.mainDiv1}
                                onMouseEnter={() => {
                                    this.active('activeRed')
                                }}
                                onMouseLeave={this.disActive}
                                onClick={() => { this.props.history.push("/frontend") }}>
                                <div className={styles.squarered3}></div>
                                <div className={styles.bottomSeperator}>
                                    <div className={styles.squarered1}></div>
                                    <div className={styles.squarered2}></div>
                                </div>
                            </div>


                            <div>
                                <div className={styles.mainDiv2}
                                    onMouseEnter={() => {
                                        this.active('activeGreen')
                                    }}
                                    onMouseLeave={this.disActive}
                                    onClick={() => { this.props.history.push("/backend") }}>
                                    <div className={styles.squaregreen3}></div>
                                    <div className={styles.bottomSeperator}>
                                        <div className={styles.squaregreen1}></div>
                                        <div className={styles.squaregreen2}></div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.mainDiv3}
                                onMouseEnter={() => {
                                    this.active('activeYellow')
                                }}
                                onMouseLeave={this.disActive}
                                onClick={() => { this.props.history.push("/database") }}>
                                <div className={styles.squareYellow3}></div>
                                <div className={styles.bottomSeperator}>
                                    <div className={styles.squareYellow1}></div>
                                    <div className={styles.squareYellow2}></div>
                                </div>
                            </div>

                            <div className={styles.mainDiv4}
                                onMouseEnter={() => {
                                    this.active('activeBlue')
                                }}
                                onMouseLeave={this.disActive}
                                onClick={() => { this.props.history.push("/Devops") }}>
                                <div className={styles.squareBlue3}></div>
                                <div className={styles.bottomSeperator}>
                                    <div className={styles.squareBlue1}></div>
                                    <div className={styles.squareBlue2}></div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.selectPointer}>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}
