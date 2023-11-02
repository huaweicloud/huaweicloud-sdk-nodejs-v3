

export class SearchCustomizedFieldsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public type?: SearchCustomizedFieldsRequestTypeEnum | string;
    public constructor(workspace?: string, type?: string) { 
        this['workspace'] = workspace;
        this['type'] = type;
    }
    public withWorkspace(workspace: string): SearchCustomizedFieldsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): SearchCustomizedFieldsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchCustomizedFieldsRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: SearchCustomizedFieldsRequestTypeEnum | string): SearchCustomizedFieldsRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchCustomizedFieldsRequestTypeEnum {
    TABLE = 'TABLE',
    ATTRIBUTE = 'ATTRIBUTE',
    SUBJECT = 'SUBJECT'
}
