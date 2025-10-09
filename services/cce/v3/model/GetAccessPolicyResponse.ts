import { AccessScope } from './AccessScope';
import { Principal } from './Principal';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAccessPolicyResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public name?: string;
    public policyId?: string;
    public clusters?: Array<string>;
    public accessScope?: AccessScope;
    public policyType?: string;
    public principal?: Principal;
    public createTime?: Date;
    public updateTime?: Date;
    public constructor() { 
        super();
    }
    public withKind(kind: string): GetAccessPolicyResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): GetAccessPolicyResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withName(name: string): GetAccessPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyId(policyId: string): GetAccessPolicyResponse {
        this['policyId'] = policyId;
        return this;
    }
    public withClusters(clusters: Array<string>): GetAccessPolicyResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withAccessScope(accessScope: AccessScope): GetAccessPolicyResponse {
        this['accessScope'] = accessScope;
        return this;
    }
    public withPolicyType(policyType: string): GetAccessPolicyResponse {
        this['policyType'] = policyType;
        return this;
    }
    public withPrincipal(principal: Principal): GetAccessPolicyResponse {
        this['principal'] = principal;
        return this;
    }
    public withCreateTime(createTime: Date): GetAccessPolicyResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: Date): GetAccessPolicyResponse {
        this['updateTime'] = updateTime;
        return this;
    }
}