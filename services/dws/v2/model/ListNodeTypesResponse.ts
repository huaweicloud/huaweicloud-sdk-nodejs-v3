import { NodeTypes } from './NodeTypes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodeTypesResponse extends SdkResponse {
    private 'node_types'?: Array<NodeTypes> | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withNodeTypes(nodeTypes: Array<NodeTypes>): ListNodeTypesResponse {
        this['node_types'] = nodeTypes;
        return this;
    }
    public set nodeTypes(nodeTypes: Array<NodeTypes> | undefined) {
        this['node_types'] = nodeTypes;
    }
    public get nodeTypes() {
        return this['node_types'];
    }
    public withCount(count: number): ListNodeTypesResponse {
        this['count'] = count;
        return this;
    }
}