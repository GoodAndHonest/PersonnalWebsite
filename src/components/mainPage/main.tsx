import * as React from 'react';
import styles from './main.module.css'
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Button, Popover, Position, Tooltip, Intent } from "@blueprintjs/core";

import ReactTooltip from 'react-tooltip';


import { ArcherContainer, ArcherElement } from 'react-archer';

import { CSSTransition } from 'react-transition-group';


export interface IMainPageProps {

}


export interface IMainPageState {
    activeRed: boolean,
    activeGreen: boolean,
    activeYellow: boolean,
    activeBlue: boolean,
}


export default class MainPage extends React.Component<IMainPageProps, IMainPageState> {
    constructor(props: IMainPageProps) {
        super(props);
        this.state = {
            activeRed: false,
            activeGreen: false,
            activeYellow: false,
            activeBlue: false,
        }
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
                <div className={styles.mainContent}>
                    <div className={styles.description}>
                        <div className={styles.name}>
                            <h1 className={styles.nameText}>Kevin Yan</h1>
                        </div>
                        <div className={styles.title}>
                            <a className={styles.titleText}>Fullstack Software Developper</a>
                        </div>
                        <div className={styles.descriptionWrap}>
                            <a className={styles.descriptionText}>I believe that the art of crisp clean code is the key</a><br />
                            <a className={styles.descriptionText}>to building resilient and powerful software from the</a><br />
                            <a className={styles.descriptionText}>inside out</a>
                        </div>
                        <div className={styles.line} />
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
                            <ReactTooltip place="top" type="light" effect="float" />
                            <div className={styles.mainDiv}>
                                <div className={styles.square3}></div>
                                <div className={styles.bottomSeperator}>
                                    <div className={styles.square1}></div>
                                    <div className={styles.square2}></div>
                                </div>

                            </div>
            
                                <div
                                    className={styles.mainDiv1}
                                    onMouseEnter={() => {
                                        this.active('activeRed')
                                    }}
                                    onMouseLeave={this.disActive}>
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
                                            onMouseLeave={this.disActive}>
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
                                        onMouseLeave={this.disActive}>
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
                                    onMouseLeave={this.disActive}>
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
