import { ModifyTemplateGroupCollection } from './ModifyTemplateGroupCollection';


export class UpdateTemplateGroupCollectionRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ModifyTemplateGroupCollection;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateTemplateGroupCollectionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ModifyTemplateGroupCollection): UpdateTemplateGroupCollectionRequest {
        this['body'] = body;
        return this;
    }
}