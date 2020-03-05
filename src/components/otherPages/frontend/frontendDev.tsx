import * as React from 'react';
import styles from './frontendev.module.css'
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
      <div>
        <div className={styles.firstDiv}>
            <h1></h1>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
