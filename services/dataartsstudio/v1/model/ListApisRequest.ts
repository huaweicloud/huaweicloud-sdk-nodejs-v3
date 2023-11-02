

export class ListApisRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApisRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListApisRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApisRequestDlmTypeEnum | string): ListApisRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApisRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApisRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApisRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOffset(offset: number): ListApisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApisRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
