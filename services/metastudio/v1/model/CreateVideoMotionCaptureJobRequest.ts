import { VideoMotionCaptureJobReq } from './VideoMotionCaptureJobReq';


export class CreateVideoMotionCaptureJobRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'X-User-Privilege'?: string;
    public body?: VideoMotionCaptureJobReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateVideoMotionCaptureJobRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateVideoMotionCaptureJobRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): CreateVideoMotionCaptureJobRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): CreateVideoMotionCaptureJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withXUserPrivilege(xUserPrivilege: string): CreateVideoMotionCaptureJobRequest {
        this['X-User-Privilege'] = xUserPrivilege;
        return this;
    }
    public set xUserPrivilege(xUserPrivilege: string  | undefined) {
        this['X-User-Privilege'] = xUserPrivilege;
    }
    public get xUserPrivilege(): string | undefined {
        return this['X-User-Privilege'];
    }
    public withBody(body: VideoMotionCaptureJobReq): CreateVideoMotionCaptureJobRequest {
        this['body'] = body;
        return this;
    }
}