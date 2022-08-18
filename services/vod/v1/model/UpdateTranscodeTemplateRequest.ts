import { ModifyTransTemplate } from './ModifyTransTemplate';


export class UpdateTranscodeTemplateRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ModifyTransTemplate;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateTranscodeTemplateRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
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