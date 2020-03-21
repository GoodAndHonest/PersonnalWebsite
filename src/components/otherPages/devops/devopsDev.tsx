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
            <a className={styles.projectsTitle}>DevOps</a>
          </div>
          <div className={styles.titleWrapper}>
            <a className={styles.frontendTitle}>Im love using AWS, I have experience with the following:</a>
          </div>
        </div>
        <div>
          <div className={styles.Ec2Wrapper}>
            <a>EC2</a>
          </div>
          <div className={styles.Lambda}>
            <a>Lamdba</a>
          </div>
          <div className={styles.Cloudfront}>
            <a>Cloudfront</a>
          </div>
          <div className={styles.S3}>
            <a>S3</a>
          </div>
        </div>

      </div>
    );
  }
}
