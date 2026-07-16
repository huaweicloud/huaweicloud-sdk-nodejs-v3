import { HyperClusterNetworkInfo } from './HyperClusterNetworkInfo';


export class HyperCluster {
    public id?: string;
    public name?: string;
    private 'network_info'?: Array<HyperClusterNetworkInfo>;
    public constructor() { 
    }
    public withId(id: string): HyperCluster {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HyperCluster {
        this['name'] = name;
        return this;
    }
    public withNetworkInfo(networkInfo: Array<HyperClusterNetworkInfo>): HyperCluster {
        this['network_info'] = networkInfo;
        return this;
    }
    public set networkInfo(networkInfo: Array<HyperClusterNetworkInfo>  | undefined) {
        this['network_info'] = networkInfo;
    }
    public get networkInfo(): Array<HyperClusterNetworkInfo> | undefined {
        return this['network_info'];
    }
}