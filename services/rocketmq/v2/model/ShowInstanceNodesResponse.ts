import { NodeContextEntity } from './NodeContextEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceNodesResponse extends SdkResponse {
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public nodes?: Array<NodeContextEntity>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withNextOffset(nextOffset: number): ShowInstanceNodesResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowInstanceNodesResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withNodes(nodes: Array<NodeContextEntity>): ShowInstanceNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withTotal(total: number): ShowInstanceNodesResponse {
        this['total'] = total;
        return this;
    }
}