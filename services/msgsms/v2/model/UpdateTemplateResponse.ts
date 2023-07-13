
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTemplateResponse extends SdkResponse {
    public id?: string;
    private 'template_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withTemplateName(templateName: string): UpdateTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
}