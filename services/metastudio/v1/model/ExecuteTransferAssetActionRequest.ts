import { TransJobRejectBody } from './TransJobRejectBody';


export class ExecuteTransferAssetActionRequest {
    private 'X-App-UserId'?: string;
    private 'job_id'?: string;
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    public action?: string;
    public body?: TransJobRejectBody;
    public constructor(jobId?: string, action?: string) { 
        this['job_id'] = jobId;
        this['action'] = action;
    }
    public withXAppUserId(xAppUserId: string): ExecuteTransferAssetActionRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withJobId(jobId: string): ExecuteTransferAssetActionRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAuthorization(authorization: string): ExecuteTransferAssetActionRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ExecuteTransferAssetActionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAction(action: string): ExecuteTransferAssetActionRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: TransJobRejectBody): ExecuteTransferAssetActionRequest {
        this['body'] = body;
        return this;
    }
}