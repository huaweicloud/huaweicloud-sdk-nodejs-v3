import { TransTemplateGroup } from './TransTemplateGroup';


export class CreateTemplateGroupRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: TransTemplateGroup;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateTemplateGroupRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateTemplateGroupRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: TransTemplateGroup): CreateTemplateGroupRequest {
        this['body'] = body;
        return this;
    }
}