

export class ShowAppInfoRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowAppInfoRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'app_id'?: string;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, appId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['app_id'] = appId;
    }
    public withWorkspace(workspace: string): ShowAppInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowAppInfoRequestDlmTypeEnum | string): ShowAppInfoRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowAppInfoRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowAppInfoRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowAppInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppId(appId: string): ShowAppInfoRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppInfoRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
