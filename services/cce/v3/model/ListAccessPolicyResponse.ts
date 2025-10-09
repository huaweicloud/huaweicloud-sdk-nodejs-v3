import { AccessPolicyResp } from './AccessPolicyResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessPolicyResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public accessPolicyList?: Array<AccessPolicyResp>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAccessPolicyResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAccessPolicyResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withAccessPolicyList(accessPolicyList: Array<AccessPolicyResp>): ListAccessPolicyResponse {
        this['accessPolicyList'] = accessPolicyList;
        return this;
    }
}