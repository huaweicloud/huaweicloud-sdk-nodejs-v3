import { ShowNamespace } from './ShowNamespace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNamespacesResponse extends SdkResponse {
    public namespaces?: Array<ShowNamespace>;
    public constructor() { 
        super();
    }
    public withNamespaces(namespaces: Array<ShowNamespace>): ListNamespacesResponse {
        this['namespaces'] = namespaces;
        return this;
    }
}