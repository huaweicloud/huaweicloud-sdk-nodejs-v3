import { ModifyTransTemplate } from './ModifyTransTemplate';


export class UpdateTranscodeTemplateRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ModifyTransTemplate;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateTranscodeTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ModifyTransTemplate): UpdateTranscodeTemplateRequest {
        this['body'] = body;
        return this;
    }
}