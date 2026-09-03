import { DASUserInstanceInfo } from './DASUserInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserInstanceListResponse extends SdkResponse {
    private 'das_instances'?: Array<DASUserInstanceInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDasInstances(dasInstances: Array<DASUserInstanceInfo>): ListUserInstanceListResponse {
        this['das_instances'] = dasInstances;
        return this;
    }
    public set dasInstances(dasInstances: Array<DASUserInstanceInfo>  | undefined) {
        this['das_instances'] = dasInstances;
    }
    public get dasInstances(): Array<DASUserInstanceInfo> | undefined {
        return this['das_instances'];
    }
    public withTotal(total: number): ListUserInstanceListResponse {
        this['total'] = total;
        return this;
    }
}