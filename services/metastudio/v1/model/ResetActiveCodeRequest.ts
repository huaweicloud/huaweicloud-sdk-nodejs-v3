import { ResetActiveCodeReq } from './ResetActiveCodeReq';


export class ResetActiveCodeRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'active_code_id'?: string;
    public body?: ResetActiveCodeReq;
    public constructor(activeCodeId?: string) { 
        this['active_code_id'] = activeCodeId;
    }
    public withAuthorization(authorization: string): ResetActiveCodeRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ResetActiveCodeRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ResetActiveCodeRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ResetActiveCodeRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withActiveCodeId(activeCodeId: string): ResetActiveCodeRequest {
        this['active_code_id'] = activeCodeId;
        return this;
    }
    public set activeCodeId(activeCodeId: string  | undefined) {
        this['active_code_id'] = activeCodeId;
    }
    public get activeCodeId(): string | undefined {
        return this['active_code_id'];
    }
    public withBody(body: ResetActiveCodeReq): ResetActiveCodeRequest {
        this['body'] = body;
        return this;
    }
}