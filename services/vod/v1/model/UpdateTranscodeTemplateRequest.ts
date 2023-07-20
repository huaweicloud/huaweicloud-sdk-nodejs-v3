import { ModifyTransTemplate } from './ModifyTransTemplate';


export class UpdateTranscodeTemplateRequest {
    private 'X-Sdk-Date'?: string;
    public body?: ModifyTransTemplate;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateTranscodeTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ModifyTransTemplate): UpdateTranscodeTemplateRequest {
        this['body'] = body;
        return this;
    }
}