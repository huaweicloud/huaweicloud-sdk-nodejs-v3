import { AgencyTokenAssumerole } from './AgencyTokenAssumerole';


export class AgencyTokenIdentity {
    public methods?: Array<AgencyTokenIdentityMethodsEnum> | Array<string>;
    private 'assume_role'?: AgencyTokenAssumerole;
    public constructor(methods?: Array<string>, assumeRole?: AgencyTokenAssumerole) { 
        this['methods'] = methods;
        this['assume_role'] = assumeRole;
    }
    public withMethods(methods: Array<AgencyTokenIdentityMethodsEnum> | Array<string>): AgencyTokenIdentity {
        this['methods'] = methods;
        return this;
    }
    public withAssumeRole(assumeRole: AgencyTokenAssumerole): AgencyTokenIdentity {
        this['assume_role'] = assumeRole;
        return this;
    }
    public set assumeRole(assumeRole: AgencyTokenAssumerole  | undefined) {
        this['assume_role'] = assumeRole;
    }
    public get assumeRole(): AgencyTokenAssumerole | undefined {
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
