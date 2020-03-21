import * as React from 'react';
import styles from './frontendDev.module.css'
import {FaArrowLeft} from "react-icons/fa";

export interface IFrontendDevProps {
}

export interface IFrontendDevState {
}

export default class FrontendDev extends React.Component<IFrontendDevProps, IFrontendDevState> {
  constructor(props: IFrontendDevProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className={styles.backgroundColor}>
        <div>
          <FaArrowLeft />
        </div>
        <div className={styles.titleAnimation}>
          <div className={styles.bigTitle}>
            <a className={styles.projectsTitle}>Frontend</a>
          </div>
          <div className={styles.titleWrapper}>
            <a className={styles.frontendTitle}>Heres some project to showcase my knowledge</a>
          </div>
        </div>
        <div className={styles.projectsGrid}>
          <div className={styles.boxRed0}>
            <div className={styles.topBoxRed}>

            </div>
            <div className={styles.leftBoxRed}>

            </div>
            <div className={styles.projectWrapperRed}>
              <a className={styles.titleBox}>Animated SVG Project</a>
            </div>

          </div>

          <div className={styles.boxRed1}>
            <div className={styles.topBoxRed}>

            </div>
            <div className={styles.leftBoxRed}>

            </div>
            <div className={styles.projectWrapperRed}>
              <a className={styles.titleBox}>Setup React Without Create React App</a>
            </div>

          </div>

          <div className={styles.boxRed2}>
            <div className={styles.topBoxRed}>

            </div>
            <div className={styles.leftBoxRed}>

            </div>
            <div className={styles.projectWrapperRed}>
              <a className={styles.titleBox}>Landing Page</a>
            </div>

          </div>

        </div>

      </div>
    );
  }
}
