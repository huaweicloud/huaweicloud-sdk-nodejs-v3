import { ModifyTransTemplateGroup } from './ModifyTransTemplateGroup';


export class UpdateTemplateGroupRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ModifyTransTemplateGroup;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateTemplateGroupRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ModifyTransTemplateGroup): UpdateTemplateGroupRequest {
        this['body'] = body;
        return this;
    }
}