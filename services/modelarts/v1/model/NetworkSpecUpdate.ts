import { NetworkConnection } from './NetworkConnection';


export class NetworkSpecUpdate {
    public connection?: NetworkConnection;
    public constructor() { 
    }
    public withConnection(connection: NetworkConnection): NetworkSpecUpdate {
        this['connection'] = connection;
        return this;
    }
}