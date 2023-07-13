import { ConfirmImageUploadReq } from './ConfirmImageUploadReq';


export class ConfirmImageUploadRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ConfirmImageUploadReq;
    public constructor() { 
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