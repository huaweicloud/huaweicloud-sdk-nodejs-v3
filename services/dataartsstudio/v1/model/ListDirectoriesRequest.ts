

export class ListDirectoriesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
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
    public withXProjectId(xProjectId: string): ListDirectoriesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListDirectoriesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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
