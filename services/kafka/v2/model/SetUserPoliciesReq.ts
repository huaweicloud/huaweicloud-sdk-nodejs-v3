import { UserPolicyEntity } from './UserPolicyEntity';


export class SetUserPoliciesReq {
    public action?: SetUserPoliciesReqActionEnum | string;
    public policies?: Array<UserPolicyEntity>;
    public constructor() { 
    }
    public withAction(action: SetUserPoliciesReqActionEnum | string): SetUserPoliciesReq {
        this['action'] = action;
        return this;
    }
    public withPolicies(policies: Array<UserPolicyEntity>): SetUserPoliciesReq {
        this['policies'] = policies;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetUserPoliciesReqActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
