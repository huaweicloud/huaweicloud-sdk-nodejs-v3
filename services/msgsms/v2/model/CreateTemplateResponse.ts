
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateResponse extends SdkResponse {
    public id?: string;
    private 'template_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withTemplateName(templateName: string): CreateTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
}