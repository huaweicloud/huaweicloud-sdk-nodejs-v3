

export class ListCreateAccountStatusesRequest {
    private 'X-Security-Token'?: string;
    public states?: Array<ListCreateAccountStatusesRequestStatesEnum> | Array<string>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListCreateAccountStatusesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withStates(states: Array<ListCreateAccountStatusesRequestStatesEnum> | Array<string>): ListCreateAccountStatusesRequest {
        this['states'] = states;
        return this;
    }
    public withLimit(limit: number): ListCreateAccountStatusesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCreateAccountStatusesRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCreateAccountStatusesRequestStatesEnum {
    IN_PROGRESS = 'in_progress',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}
