import { Namespace } from './Namespace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceNamespacesResponse extends SdkResponse {
    public namespaces?: Array<Namespace>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withNamespaces(namespaces: Array<Namespace>): ListInstanceNamespacesResponse {
        this['namespaces'] = namespaces;
        return this;
    }
    public withTotal(total: number): ListInstanceNamespacesResponse {
        this['total'] = total;
        return this;
    }
}