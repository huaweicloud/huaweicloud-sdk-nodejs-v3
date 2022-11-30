import { CreateWatermarkTemplateReq } from './CreateWatermarkTemplateReq';


export class CreateWatermarkTemplateRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateWatermarkTemplateReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateWatermarkTemplateRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateWatermarkTemplateReq): CreateWatermarkTemplateRequest {
        this['body'] = body;
        return this;
    }
}