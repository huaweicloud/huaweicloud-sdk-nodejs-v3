

export class ListCreateAccountStatusesRequest {
    public states?: Array<ListCreateAccountStatusesRequestStatesEnum> | Array<string>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
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
