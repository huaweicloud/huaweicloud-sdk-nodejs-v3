

export class ListAppsRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListAppsRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'app_type'?: ListAppsRequestAppTypeEnum | string;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListAppsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListAppsRequestDlmTypeEnum | string): ListAppsRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListAppsRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListAppsRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListAppsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListAppsRequest {
        this['name'] = name;
        return this;
    }
    public withAppType(appType: ListAppsRequestAppTypeEnum | string): ListAppsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ListAppsRequestAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ListAppsRequestAppTypeEnum | string | undefined {
        return this['app_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAppsRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAppsRequestAppTypeEnum {
    APIG = 'APIG',
    IAM = 'IAM',
    APIGW = 'APIGW',
    DLM = 'DLM',
    ROMA_APIC = 'ROMA_APIC'
}
