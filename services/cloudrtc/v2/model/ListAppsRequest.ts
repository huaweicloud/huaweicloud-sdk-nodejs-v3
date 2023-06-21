

export class ListAppsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    public state?: ListAppsRequestStateEnum;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListAppsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListAppsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListAppsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withState(state: ListAppsRequestStateEnum): ListAppsRequest {
        this['state'] = state;
        return this;
    }
    public withOffset(offset: number): ListAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAppsRequestStateEnum {
    ACTIVATION = 'ACTIVATION',
    DEACTIVATION = 'DEACTIVATION',
    ARREARS = 'ARREARS'
}
