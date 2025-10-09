import { AccessScope } from './AccessScope';
import { Principal } from './Principal';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAccessPolicyResponse extends SdkResponse {
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
    public withKind(kind: string): CreateAccessPolicyResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateAccessPolicyResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withName(name: string): CreateAccessPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyId(policyId: string): CreateAccessPolicyResponse {
        this['policyId'] = policyId;
        return this;
    }
    public withClusters(clusters: Array<string>): CreateAccessPolicyResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withAccessScope(accessScope: AccessScope): CreateAccessPolicyResponse {
        this['accessScope'] = accessScope;
        return this;
    }
    public withPolicyType(policyType: string): CreateAccessPolicyResponse {
        this['policyType'] = policyType;
        return this;
    }
    public withPrincipal(principal: Principal): CreateAccessPolicyResponse {
        this['principal'] = principal;
        return this;
    }
    public withCreateTime(createTime: Date): CreateAccessPolicyResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: Date): CreateAccessPolicyResponse {
        this['updateTime'] = updateTime;
        return this;
    }
}