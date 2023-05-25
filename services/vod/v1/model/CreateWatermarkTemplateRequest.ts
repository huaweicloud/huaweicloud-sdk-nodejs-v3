import { CreateWatermarkTemplateReq } from './CreateWatermarkTemplateReq';


export class CreateWatermarkTemplateRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateWatermarkTemplateReq;
    public constructor() { 
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