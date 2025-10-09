import { AccessScope } from './AccessScope';
import { Principal } from './Principal';


export class AccessPolicyResp {
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
    }
    public withKind(kind: string): AccessPolicyResp {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AccessPolicyResp {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withName(name: string): AccessPolicyResp {
        this['name'] = name;
        return this;
    }
    public withPolicyId(policyId: string): AccessPolicyResp {
        this['policyId'] = policyId;
        return this;
    }
    public withClusters(clusters: Array<string>): AccessPolicyResp {
        this['clusters'] = clusters;
        return this;
    }
    public withAccessScope(accessScope: AccessScope): AccessPolicyResp {
        this['accessScope'] = accessScope;
        return this;
    }
    public withPolicyType(policyType: string): AccessPolicyResp {
        this['policyType'] = policyType;
        return this;
    }
    public withPrincipal(principal: Principal): AccessPolicyResp {
        this['principal'] = principal;
        return this;
    }
    public withCreateTime(createTime: Date): AccessPolicyResp {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: Date): AccessPolicyResp {
        this['updateTime'] = updateTime;
        return this;
    }
}