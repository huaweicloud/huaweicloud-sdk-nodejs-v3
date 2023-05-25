import { TransTemplateGroupCollection } from './TransTemplateGroupCollection';


export class CreateTemplateGroupCollectionRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: TransTemplateGroupCollection;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateTemplateGroupCollectionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: TransTemplateGroupCollection): CreateTemplateGroupCollectionRequest {
        this['body'] = body;
        return this;
    }
}