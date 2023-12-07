import { AppUpdateDTO } from './AppUpdateDTO';


export class UpdateAppRequest {
    public workspace?: string;
    private 'Dlm-Type'?: UpdateAppRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'app_id'?: string;
    public body?: AppUpdateDTO;
    public constructor(workspace?: string, contentType?: string, appId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['app_id'] = appId;
    }
    public withWorkspace(workspace: string): UpdateAppRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: UpdateAppRequestDlmTypeEnum | string): UpdateAppRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: UpdateAppRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): UpdateAppRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): UpdateAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppId(appId: string): UpdateAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: AppUpdateDTO): UpdateAppRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAppRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
