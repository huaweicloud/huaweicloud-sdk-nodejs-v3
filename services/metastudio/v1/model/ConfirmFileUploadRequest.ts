import { ConfirmFileUploadRequestBody } from './ConfirmFileUploadRequestBody';


export class ConfirmFileUploadRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-App-UserId'?: string;
    private 'file_id'?: string;
    public body?: ConfirmFileUploadRequestBody;
    public constructor(fileId?: string) { 
        this['file_id'] = fileId;
    }
    public withAuthorization(authorization: string): ConfirmFileUploadRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ConfirmFileUploadRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXAppUserId(xAppUserId: string): ConfirmFileUploadRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withFileId(fileId: string): ConfirmFileUploadRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withBody(body: ConfirmFileUploadRequestBody): ConfirmFileUploadRequest {
        this['body'] = body;
        return this;
    }
}