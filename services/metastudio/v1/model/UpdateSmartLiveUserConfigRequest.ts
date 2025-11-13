import { UpdateSmartLiveUserConfigReq } from './UpdateSmartLiveUserConfigReq';


export class UpdateSmartLiveUserConfigRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public body?: UpdateSmartLiveUserConfigReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateSmartLiveUserConfigRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateSmartLiveUserConfigRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateSmartLiveUserConfigRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withBody(body: UpdateSmartLiveUserConfigReq): UpdateSmartLiveUserConfigRequest {
        this['body'] = body;
        return this;
    }
}