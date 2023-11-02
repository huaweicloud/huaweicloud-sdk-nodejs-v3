

export class SearchIdByPathRequest {
    public workspace?: string;
    private 'Dlm-Type'?: SearchIdByPathRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public path?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, path?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['path'] = path;
    }
    public withWorkspace(workspace: string): SearchIdByPathRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: SearchIdByPathRequestDlmTypeEnum | string): SearchIdByPathRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: SearchIdByPathRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): SearchIdByPathRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): SearchIdByPathRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPath(path: string): SearchIdByPathRequest {
        this['path'] = path;
        return this;
    }
    public withLimit(limit: number): SearchIdByPathRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchIdByPathRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchIdByPathRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
