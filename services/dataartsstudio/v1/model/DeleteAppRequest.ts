

export class DeleteAppRequest {
    public workspace?: string;
    private 'Dlm-Type'?: DeleteAppRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'app_id'?: string;
    public constructor(workspace?: string, contentType?: string, appId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['app_id'] = appId;
    }
    public withWorkspace(workspace: string): DeleteAppRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: DeleteAppRequestDlmTypeEnum | string): DeleteAppRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: DeleteAppRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): DeleteAppRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): DeleteAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppId(appId: string): DeleteAppRequest {
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
export enum DeleteAppRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
