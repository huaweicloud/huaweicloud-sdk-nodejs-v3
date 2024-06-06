

export class ListAnalyzersRequest {
    public limit?: number;
    public marker?: string;
    public type?: ListAnalyzersRequestTypeEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAnalyzersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAnalyzersRequest {
        this['marker'] = marker;
        return this;
    }
    public withType(type: ListAnalyzersRequestTypeEnum | string): ListAnalyzersRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAnalyzersRequestTypeEnum {
    ACCOUNT = 'account',
    ORGANIZATION = 'organization'
}
