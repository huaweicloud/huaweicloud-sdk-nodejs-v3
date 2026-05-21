import { AvailableDnInstance } from './AvailableDnInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableRdsResponse extends SdkResponse {
    private 'data_nodes'?: Array<AvailableDnInstance>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDataNodes(dataNodes: Array<AvailableDnInstance>): ListAvailableRdsResponse {
        this['data_nodes'] = dataNodes;
        return this;
    }
    public set dataNodes(dataNodes: Array<AvailableDnInstance>  | undefined) {
        this['data_nodes'] = dataNodes;
    }
    public get dataNodes(): Array<AvailableDnInstance> | undefined {
        return this['data_nodes'];
    }
    public withOffset(offset: number): ListAvailableRdsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAvailableRdsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListAvailableRdsResponse {
        this['total'] = total;
        return this;
    }
}