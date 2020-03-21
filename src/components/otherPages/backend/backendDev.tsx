import * as React from 'react';
import styles from './backendDev.module.css'
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
        <div className={styles.titleAnimation}>
          <div className={styles.bigTitle}>
            <a className={styles.projectsTitle}>Backend</a>
          </div>
          <div className={styles.titleWrapper}>
            <a className={styles.frontendTitle}>Algorithms,datastructures and other cool stuff</a>
          </div>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.boxWrapper1}>
            <div className={styles.boxTop}>
            </div>
            <div className={styles.boxBottom}>
              <div className={styles.boxLeft}>

              </div>
              <div className={styles.boxRight}>
                <a className={styles.title}>C++ blackjack</a>
              </div>
            </div>
          </div>
          <div className={styles.boxWrapper2}>
            <div className={styles.boxTop2}>
            </div>
            <div className={styles.boxBottom2}>
              <div className={styles.boxLeft2}>

              </div>
              <div className={styles.boxRight2}>
                <a className={styles.title}>Pathfinding Mazes</a>
              </div>
            </div>
          </div>
          <div className={styles.boxWrapper3}>
            <div className={styles.boxTop3}>
            </div>
            <div className={styles.boxBottom3}>
              <div className={styles.boxLeft3}>
              </div>
              <div className={styles.boxRight3}>
                <a className={styles.title}>Sorting Algorithms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
