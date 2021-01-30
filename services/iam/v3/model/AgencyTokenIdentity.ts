import { AgencyTokenAssumerole } from './AgencyTokenAssumerole';


export class AgencyTokenIdentity {
    public methods: Array<AgencyTokenIdentityMethodsEnum>;
    private 'assume_role': AgencyTokenAssumerole | undefined;
    public constructor(methods: any, assumeRole: any) { 
        this['methods'] = methods;
        this['assume_role'] = assumeRole;
    }
    public withMethods(methods: Array<AgencyTokenIdentityMethodsEnum>): AgencyTokenIdentity {
        this['methods'] = methods;
        return this;
    }
    public withAssumeRole(assumeRole: AgencyTokenAssumerole): AgencyTokenIdentity {
        this['assume_role'] = assumeRole;
        return this;
    }
    public set assumeRole(assumeRole: AgencyTokenAssumerole | undefined) {
        this['assume_role'] = assumeRole;
    }
    public get assumeRole() {
        return this['assume_role'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgencyTokenIdentityMethodsEnum {
    ASSUME_ROLE = 'assume_role'
}
