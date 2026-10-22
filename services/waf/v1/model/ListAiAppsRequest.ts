

export class ListAiAppsRequest {
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'protect_status'?: ListAiAppsRequestProtectStatusEnum | number;
    private 'policy_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAiAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListAiAppsRequest {
        this['name'] = name;
        return this;
    }
    public withProtectStatus(protectStatus: ListAiAppsRequestProtectStatusEnum | number): ListAiAppsRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: ListAiAppsRequestProtectStatusEnum | number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): ListAiAppsRequestProtectStatusEnum | number | undefined {
        return this['protect_status'];
    }
    public withPolicyId(policyId: string): ListAiAppsRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAiAppsRequestProtectStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
