

export class ListLeaguesRequest {
    public limit?: number;
    public offset?: number;
    public type?: ListLeaguesRequestTypeEnum | string;
    public constructor(limit?: number, offset?: number, type?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['type'] = type;
    }
    public withLimit(limit: number): ListLeaguesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLeaguesRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: ListLeaguesRequestTypeEnum | string): ListLeaguesRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLeaguesRequestTypeEnum {
    OWNED = 'owned',
    PARTICIPATIVENORMAL = 'participativenormal'
}
