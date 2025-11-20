import { AvailableDnInstance } from './AvailableDnInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableRdsForMigrateResponse extends SdkResponse {
    private 'data_nodes'?: Array<AvailableDnInstance>;
    public constructor() { 
        super();
    }
    public withDataNodes(dataNodes: Array<AvailableDnInstance>): ListAvailableRdsForMigrateResponse {
        this['data_nodes'] = dataNodes;
        return this;
    }
    public set dataNodes(dataNodes: Array<AvailableDnInstance>  | undefined) {
        this['data_nodes'] = dataNodes;
    }
    public get dataNodes(): Array<AvailableDnInstance> | undefined {
        return this['data_nodes'];
    }
}