import { TransTemplateGroup } from './TransTemplateGroup';


export class CreateTemplateGroupRequest {
    private 'X-Sdk-Date'?: string;
    public body?: TransTemplateGroup;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateTemplateGroupRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: TransTemplateGroup): CreateTemplateGroupRequest {
        this['body'] = body;
        return this;
    }
}