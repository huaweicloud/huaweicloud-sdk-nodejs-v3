import { UpdateWatermarkTemplateReq } from './UpdateWatermarkTemplateReq';


export class UpdateWatermarkTemplateRequest {
    private 'X-Sdk-Date'?: string;
    public body?: UpdateWatermarkTemplateReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateWatermarkTemplateReq): UpdateWatermarkTemplateRequest {
        this['body'] = body;
        return this;
    }
}