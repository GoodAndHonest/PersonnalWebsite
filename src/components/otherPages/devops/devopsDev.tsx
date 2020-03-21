import * as React from 'react';
import styles from './devops.module.css'
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
            <a className={styles.projectsTitle}>Database</a>
          </div>
          <div className={styles.titleWrapper}>
            <a className={styles.frontendTitle}>Showcase of my amazing database skills!</a>
          </div>
        </div>
        <div>
          <div className={styles.boxWrapper1}>
            <div className={styles.boxTop}>
            </div>
            <div className={styles.boxBottom}>
              <div className={styles.boxLeft}>

              </div>
              <div className={styles.boxRight}>
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

              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
