import { AccessScope } from './AccessScope';
import { Principal } from './Principal';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAccessPolicyResponse extends SdkResponse {
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
    public withKind(kind: string): UpdateAccessPolicyResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateAccessPolicyResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withName(name: string): UpdateAccessPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyId(policyId: string): UpdateAccessPolicyResponse {
        this['policyId'] = policyId;
        return this;
    }
    public withClusters(clusters: Array<string>): UpdateAccessPolicyResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withAccessScope(accessScope: AccessScope): UpdateAccessPolicyResponse {
        this['accessScope'] = accessScope;
        return this;
    }
    public withPolicyType(policyType: string): UpdateAccessPolicyResponse {
        this['policyType'] = policyType;
        return this;
    }
    public withPrincipal(principal: Principal): UpdateAccessPolicyResponse {
        this['principal'] = principal;
        return this;
    }
    public withCreateTime(createTime: Date): UpdateAccessPolicyResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: Date): UpdateAccessPolicyResponse {
        this['updateTime'] = updateTime;
        return this;
    }
}