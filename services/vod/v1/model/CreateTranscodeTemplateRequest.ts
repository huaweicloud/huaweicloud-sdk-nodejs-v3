import { CreateTranscodeTemplate } from './CreateTranscodeTemplate';


export class CreateTranscodeTemplateRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateTranscodeTemplate;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateTranscodeTemplateRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
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