import { Nodes } from './Nodes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentInfosResponse extends SdkResponse {
    public nodes?: Array<Nodes>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<Nodes>): ListComponentInfosResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withTotalCount(totalCount: number): ListComponentInfosResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}