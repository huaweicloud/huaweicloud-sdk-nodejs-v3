import { UCSConstraintTemplate } from './UCSConstraintTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyDefinitionsResponse extends SdkResponse {
    public items?: Array<UCSConstraintTemplate>;
    public kind?: string;
    public apiVersion?: string;
    public constructor() { 
        super();
    }
    public withItems(items: Array<UCSConstraintTemplate>): ListPolicyDefinitionsResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): ListPolicyDefinitionsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListPolicyDefinitionsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
}