

export class ListDirectoriesRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public type?: ListDirectoriesRequestTypeEnum | string;
    public constructor(workspace?: string, type?: string) { 
        this['workspace'] = workspace;
        this['type'] = type;
    }
    public withWorkspace(workspace: string): ListDirectoriesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListDirectoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDirectoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: ListDirectoriesRequestTypeEnum | string): ListDirectoriesRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDirectoriesRequestTypeEnum {
    CODE = 'CODE',
    STANDARD_ELEMENT = 'STANDARD_ELEMENT'
}
