import { AppCallbackUrlReq } from './AppCallbackUrlReq';


export class UpdateRecordCallbackRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    private 'app_id': string | undefined;
    public body?: AppCallbackUrlReq;
    public constructor(appId?: any) { 
        this['app_id'] = appId;
    }
    public withAuthorization(authorization: string): UpdateRecordCallbackRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateRecordCallbackRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateRecordCallbackRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withAppId(appId: string): UpdateRecordCallbackRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withBody(body: AppCallbackUrlReq): UpdateRecordCallbackRequest {
        this['body'] = body;
        return this;
    }
}