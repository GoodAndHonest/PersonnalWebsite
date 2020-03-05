import * as React from 'react';
import styles from './description.module.css'
export interface IFrontendProps {
    active: boolean;
}

export function Frontend(props: IFrontendProps) {
    return (
        <div className={styles.frontEnd}>
            <h1 className={styles.titleRed}>I do frontend!</h1>
            <ul className={styles.ul}>
                <li ><a className={styles.subtitleRed}>React/Redux</a></li>
                <li><a className={styles.subtitleRed}>CS/SCSS</a></li>
                <li><a className={styles.subtitleRed}>Typescript</a></li>
                <li><a className={styles.subtitleRed}>Animations</a></li>
                <li><a className={styles.subtitleRed}>Material UI,Blueprintjs</a></li>
            </ul>
        </div>
    );
}

export interface IBackendProps {
    active: boolean;
}

export function Backend(props: IBackendProps) {
    return (
        <div>
            <h1 className={styles.titleGreen}>I also know backend!</h1>
            <ul>
                <li><a className={styles.subtitleGreen}>Datastructures and Algorithmes</a></li>
                <li><a className={styles.subtitleGreen}>Java</a></li>
                <li><a className={styles.subtitleGreen}>Node.js,Springboot</a></li>
                <li><a className={styles.subtitleGreen}>Search, Sorting, Pathfinding</a></li>
            </ul>
        </div>
    );
}


export interface IDatabaseProps {
    active: boolean;
}

export function Database(props: IDatabaseProps) {
    return (
        <div>
            <h1 className={styles.titleYellow}>Databases are great too!</h1>
            <ul>
                <li><a className={styles.subtitleYellow}>Mongo,Mysql,Dynamo</a></li>
                <li><a className={styles.subtitleYellow}>Graphql (thats a special one)</a></li>
                <li><a className={styles.subtitleYellow}>ElasticSearch</a></li>
            </ul>
        </div>
    );
}


export interface IDevopsProps {
    active: boolean;
}

export function Devops(props: IDevopsProps) {
    return (
        <div>
            <h1 className={styles.titleBlue}>Devops/AWS</h1>
            <ul>
                <li><a className={styles.subtitleBlue}>frontend: S3+Cloudfrond</a></li>
                <li><a className={styles.subtitleBlue}>compute:AWS LAMBDA, AWS EC2</a></li>
                <li><a className={styles.subtitleBlue}>databases:AWS RDS</a></li>
                <li><a className={styles.subtitleBlue}>Google Analytics</a></li>
            </ul>
        </div>
    );
}
