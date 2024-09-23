

export class ListCloseAccountStatusesRequest {
    private 'X-Security-Token'?: string;
    public states?: Array<ListCloseAccountStatusesRequestStatesEnum> | Array<string>;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListCloseAccountStatusesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withStates(states: Array<ListCloseAccountStatusesRequestStatesEnum> | Array<string>): ListCloseAccountStatusesRequest {
        this['states'] = states;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCloseAccountStatusesRequestStatesEnum {
    PENDING_CLOSURE = 'pending_closure',
    SUSPENDED = 'suspended'
}
