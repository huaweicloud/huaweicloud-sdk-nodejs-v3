import { ListReadonlyNodesResult } from './ListReadonlyNodesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReadonlyNodesResponse extends SdkResponse {
    public instances?: Array<ListReadonlyNodesResult>;
    private 'max_readonly_node_num'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ListReadonlyNodesResult>): ListReadonlyNodesResponse {
        this['instances'] = instances;
        return this;
    }
    public withMaxReadonlyNodeNum(maxReadonlyNodeNum: number): ListReadonlyNodesResponse {
        this['max_readonly_node_num'] = maxReadonlyNodeNum;
        return this;
    }
    public set maxReadonlyNodeNum(maxReadonlyNodeNum: number  | undefined) {
        this['max_readonly_node_num'] = maxReadonlyNodeNum;
    }
    public get maxReadonlyNodeNum(): number | undefined {
        return this['max_readonly_node_num'];
    }
}