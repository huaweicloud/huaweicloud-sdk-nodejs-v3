

export class ListCloseAccountStatusesRequest {
    public states?: Array<ListCloseAccountStatusesRequestStatesEnum> | Array<string>;
    public constructor() { 
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
