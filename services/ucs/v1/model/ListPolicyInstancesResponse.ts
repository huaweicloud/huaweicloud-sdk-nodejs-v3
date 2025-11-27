import { UCSConstraint } from './UCSConstraint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyInstancesResponse extends SdkResponse {
    public items?: Array<UCSConstraint>;
    public kind?: string;
    public apiVersion?: string;
    public constructor() { 
        super();
    }
    public withItems(items: Array<UCSConstraint>): ListPolicyInstancesResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): ListPolicyInstancesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListPolicyInstancesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
}