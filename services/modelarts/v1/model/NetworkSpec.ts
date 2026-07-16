import { NetworkConnection } from './NetworkConnection';


export class NetworkSpec {
    public cidr?: string;
    public connection?: NetworkConnection;
    public constructor(cidr?: string) { 
        this['cidr'] = cidr;
    }
    public withCidr(cidr: string): NetworkSpec {
        this['cidr'] = cidr;
        return this;
    }
    public withConnection(connection: NetworkConnection): NetworkSpec {
        this['connection'] = connection;
        return this;
    }
}