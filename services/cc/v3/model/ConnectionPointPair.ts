import { ConnectionPoint } from './ConnectionPoint';


export class ConnectionPointPair {
    private 'connection_point_pair'?: Array<ConnectionPoint>;
    public constructor(connectionPointPair?: Array<ConnectionPoint>) { 
        this['connection_point_pair'] = connectionPointPair;
    }
    public withConnectionPointPair(connectionPointPair: Array<ConnectionPoint>): ConnectionPointPair {
        this['connection_point_pair'] = connectionPointPair;
        return this;
    }
    public set connectionPointPair(connectionPointPair: Array<ConnectionPoint>  | undefined) {
        this['connection_point_pair'] = connectionPointPair;
    }
    public get connectionPointPair(): Array<ConnectionPoint> | undefined {
        return this['connection_point_pair'];
    }
}