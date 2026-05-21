import { AvailableDnInstance } from './AvailableDnInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableRdsForMigrateResponse extends SdkResponse {
    private 'data_nodes'?: Array<AvailableDnInstance>;
    public offset?: number;
    public limit?: number;
    public total?: number;
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
    public withOffset(offset: number): ListAvailableRdsForMigrateResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAvailableRdsForMigrateResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListAvailableRdsForMigrateResponse {
        this['total'] = total;
        return this;
    }
}