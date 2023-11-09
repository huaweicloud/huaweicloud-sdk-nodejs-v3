import { NamespacesNamespaces } from './NamespacesNamespaces';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNamespacesResponse extends SdkResponse {
    public namespaces?: Array<NamespacesNamespaces>;
    public constructor() { 
        super();
    }
    public withNamespaces(namespaces: Array<NamespacesNamespaces>): ListNamespacesResponse {
        this['namespaces'] = namespaces;
        return this;
    }
}