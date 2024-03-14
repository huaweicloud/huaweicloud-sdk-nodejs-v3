import { QuerySupportNodeTypeBean } from './QuerySupportNodeTypeBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableNodeTypesResponse extends SdkResponse {
    private 'node_types'?: Array<QuerySupportNodeTypeBean>;
    public constructor() { 
        super();
    }
    public withNodeTypes(nodeTypes: Array<QuerySupportNodeTypeBean>): ListAvailableNodeTypesResponse {
        this['node_types'] = nodeTypes;
        return this;
    }
    public set nodeTypes(nodeTypes: Array<QuerySupportNodeTypeBean>  | undefined) {
        this['node_types'] = nodeTypes;
    }
    public get nodeTypes(): Array<QuerySupportNodeTypeBean> | undefined {
        return this['node_types'];
    }
}