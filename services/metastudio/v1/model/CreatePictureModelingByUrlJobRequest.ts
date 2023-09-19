import { PictureModelingByUrlReq } from './PictureModelingByUrlReq';


export class CreatePictureModelingByUrlJobRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'X-User-Privilege'?: string;
    public body?: PictureModelingByUrlReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreatePictureModelingByUrlJobRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreatePictureModelingByUrlJobRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): CreatePictureModelingByUrlJobRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): CreatePictureModelingByUrlJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withXUserPrivilege(xUserPrivilege: string): CreatePictureModelingByUrlJobRequest {
        this['X-User-Privilege'] = xUserPrivilege;
        return this;
    }
    public set xUserPrivilege(xUserPrivilege: string  | undefined) {
        this['X-User-Privilege'] = xUserPrivilege;
    }
    public get xUserPrivilege(): string | undefined {
        return this['X-User-Privilege'];
    }
    public withBody(body: PictureModelingByUrlReq): CreatePictureModelingByUrlJobRequest {
        this['body'] = body;
        return this;
    }
}