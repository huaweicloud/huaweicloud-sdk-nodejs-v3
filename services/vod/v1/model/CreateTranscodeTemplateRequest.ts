import { CreateTranscodeTemplate } from './CreateTranscodeTemplate';


export class CreateTranscodeTemplateRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateTranscodeTemplate;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateTranscodeTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateTranscodeTemplate): CreateTranscodeTemplateRequest {
        this['body'] = body;
        return this;
    }
}