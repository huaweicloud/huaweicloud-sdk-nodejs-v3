import { IdentityAssumerole } from './IdentityAssumerole';
import { ServicePolicy } from './ServicePolicy';


export class AgencyAuthIdentity {
    public methods: Array<AgencyAuthIdentityMethodsEnum>;
    private 'assume_role': IdentityAssumerole | undefined;
    public policy?: ServicePolicy;
    public constructor(methods?: any, assumeRole?: any) { 
        this['methods'] = methods;
        this['assume_role'] = assumeRole;
    }
    public withMethods(methods: Array<AgencyAuthIdentityMethodsEnum>): AgencyAuthIdentity {
        this['methods'] = methods;
        return this;
    }
    public withAssumeRole(assumeRole: IdentityAssumerole): AgencyAuthIdentity {
        this['assume_role'] = assumeRole;
        return this;
    }
    public set assumeRole(assumeRole: IdentityAssumerole | undefined) {
        this['assume_role'] = assumeRole;
    }
    public get assumeRole() {
        return this['assume_role'];
    }
    public withPolicy(policy: ServicePolicy): AgencyAuthIdentity {
        this['policy'] = policy;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgencyAuthIdentityMethodsEnum {
    ASSUME_ROLE = 'assume_role'
}
