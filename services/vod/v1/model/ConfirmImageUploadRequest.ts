import { ConfirmImageUploadReq } from './ConfirmImageUploadReq';


export class ConfirmImageUploadRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ConfirmImageUploadReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ConfirmImageUploadRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ConfirmImageUploadRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ConfirmImageUploadReq): ConfirmImageUploadRequest {
        this['body'] = body;
        return this;
    }
}