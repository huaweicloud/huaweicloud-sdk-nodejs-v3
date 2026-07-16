import { HyperClusterNetworkInfo } from './HyperClusterNetworkInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHyperClusterResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'network_info'?: Array<HyperClusterNetworkInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHyperClusterResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateHyperClusterResponse {
        this['name'] = name;
        return this;
    }
    public withNetworkInfo(networkInfo: Array<HyperClusterNetworkInfo>): CreateHyperClusterResponse {
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