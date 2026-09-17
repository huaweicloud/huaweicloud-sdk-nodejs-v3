import { QueryNamespaceResp } from './QueryNamespaceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterNamespacesResponse extends SdkResponse {
    public namespaces?: Array<QueryNamespaceResp>;
    public constructor() { 
        super();
    }
    public withNamespaces(namespaces: Array<QueryNamespaceResp>): ListClusterNamespacesResponse {
        this['namespaces'] = namespaces;
        return this;
    }
}