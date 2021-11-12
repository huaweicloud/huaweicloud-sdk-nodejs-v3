

export class ListUsersForEnterpriseProjectResUsers {
    private 'domain_id': string | undefined;
    public id: string;
    public name: string;
    public enabled: boolean;
    public description: string;
    private 'policy_num': number | undefined;
    private 'lastest_policy_time': number | undefined;
    public constructor(domainId?: any, id?: any, name?: any, enabled?: any, description?: any, policyNum?: any, lastestPolicyTime?: any) { 
        this['domain_id'] = domainId;
        this['id'] = id;
        this['name'] = name;
        this['enabled'] = enabled;
        this['description'] = description;
        this['policy_num'] = policyNum;
        this['lastest_policy_time'] = lastestPolicyTime;
    }
    public withDomainId(domainId: string): ListUsersForEnterpriseProjectResUsers {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withId(id: string): ListUsersForEnterpriseProjectResUsers {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListUsersForEnterpriseProjectResUsers {
        this['name'] = name;
        return this;
    }
    public withEnabled(enabled: boolean): ListUsersForEnterpriseProjectResUsers {
        this['enabled'] = enabled;
        return this;
    }
    public withDescription(description: string): ListUsersForEnterpriseProjectResUsers {
        this['description'] = description;
        return this;
    }
    public withPolicyNum(policyNum: number): ListUsersForEnterpriseProjectResUsers {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum() {
        return this['policy_num'];
    }
    public withLastestPolicyTime(lastestPolicyTime: number): ListUsersForEnterpriseProjectResUsers {
        this['lastest_policy_time'] = lastestPolicyTime;
        return this;
    }
    public set lastestPolicyTime(lastestPolicyTime: number | undefined) {
        this['lastest_policy_time'] = lastestPolicyTime;
    }
    public get lastestPolicyTime() {
        return this['lastest_policy_time'];
    }
}