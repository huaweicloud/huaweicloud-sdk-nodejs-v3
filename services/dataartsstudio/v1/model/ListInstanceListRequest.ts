

export class ListInstanceListRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListInstanceListRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    public action?: ListInstanceListRequestActionEnum | string;
    private 'show_all'?: boolean;
    private 'check_status'?: boolean;
    private 'check_debug'?: boolean;
    private 'app_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, apiId?: string, action?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
        this['action'] = action;
    }
    public withWorkspace(workspace: string): ListInstanceListRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListInstanceListRequestDlmTypeEnum | string): ListInstanceListRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListInstanceListRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListInstanceListRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListInstanceListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): ListInstanceListRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withAction(action: ListInstanceListRequestActionEnum | string): ListInstanceListRequest {
        this['action'] = action;
        return this;
    }
    public withShowAll(showAll: boolean): ListInstanceListRequest {
        this['show_all'] = showAll;
        return this;
    }
    public set showAll(showAll: boolean  | undefined) {
        this['show_all'] = showAll;
    }
    public get showAll(): boolean | undefined {
        return this['show_all'];
    }
    public withCheckStatus(checkStatus: boolean): ListInstanceListRequest {
        this['check_status'] = checkStatus;
        return this;
    }
    public set checkStatus(checkStatus: boolean  | undefined) {
        this['check_status'] = checkStatus;
    }
    public get checkStatus(): boolean | undefined {
        return this['check_status'];
    }
    public withCheckDebug(checkDebug: boolean): ListInstanceListRequest {
        this['check_debug'] = checkDebug;
        return this;
    }
    public set checkDebug(checkDebug: boolean  | undefined) {
        this['check_debug'] = checkDebug;
    }
    public get checkDebug(): boolean | undefined {
        return this['check_debug'];
    }
    public withAppId(appId: string): ListInstanceListRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withLimit(limit: number): ListInstanceListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceListRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceListRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceListRequestActionEnum {
    PUBLISH = 'PUBLISH',
    UNPUBLISH = 'UNPUBLISH',
    STOP = 'STOP',
    RECOVER = 'RECOVER',
    WHITELIST = 'WHITELIST',
    AUTHORIZE = 'AUTHORIZE'
}
