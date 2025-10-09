import { AccessScope } from './AccessScope';
import { Principal } from './Principal';


export class AccessPolicy {
    public kind?: string;
    public apiVersion?: string;
    public name?: string;
    public clusters?: Array<string>;
    public accessScope?: AccessScope;
    public policyType?: string;
    public principal?: Principal;
    public constructor(clusters?: Array<string>, accessScope?: AccessScope, policyType?: string, principal?: Principal) { 
        this['clusters'] = clusters;
        this['accessScope'] = accessScope;
        this['policyType'] = policyType;
        this['principal'] = principal;
    }
    public withKind(kind: string): AccessPolicy {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AccessPolicy {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withName(name: string): AccessPolicy {
        this['name'] = name;
        return this;
    }
    public withClusters(clusters: Array<string>): AccessPolicy {
        this['clusters'] = clusters;
        return this;
    }
    public withAccessScope(accessScope: AccessScope): AccessPolicy {
        this['accessScope'] = accessScope;
        return this;
    }
    public withPolicyType(policyType: string): AccessPolicy {
        this['policyType'] = policyType;
        return this;
    }
    public withPrincipal(principal: Principal): AccessPolicy {
        this['principal'] = principal;
        return this;
    }
}