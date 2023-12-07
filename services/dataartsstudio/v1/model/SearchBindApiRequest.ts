

export class SearchBindApiRequest {
    public workspace?: string;
    private 'Dlm-Type'?: SearchBindApiRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'app_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string, contentType?: string, appId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['app_id'] = appId;
    }
    public withWorkspace(workspace: string): SearchBindApiRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: SearchBindApiRequestDlmTypeEnum | string): SearchBindApiRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: SearchBindApiRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): SearchBindApiRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): SearchBindApiRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppId(appId: string): SearchBindApiRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withOffset(offset: number): SearchBindApiRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchBindApiRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchBindApiRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
