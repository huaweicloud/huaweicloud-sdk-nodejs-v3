

export class RetentionPolicy {
    public policy?: RetentionPolicyPolicyEnum | string;
    public constructor() { 
    }
    public withPolicy(policy: RetentionPolicyPolicyEnum | string): RetentionPolicy {
        this['policy'] = policy;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RetentionPolicyPolicyEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
