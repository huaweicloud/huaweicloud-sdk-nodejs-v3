import { UpdateWatermarkTemplateReq } from './UpdateWatermarkTemplateReq';


export class UpdateWatermarkTemplateRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UpdateWatermarkTemplateReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateWatermarkTemplateRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateWatermarkTemplateReq): UpdateWatermarkTemplateRequest {
        this['body'] = body;
        return this;
    }
}