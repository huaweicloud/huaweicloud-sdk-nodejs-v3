import { ConfigTemplatesListInfo } from './ConfigTemplatesListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigTemplatesResponse extends SdkResponse {
    private 'template_num'?: number;
    public templates?: Array<ConfigTemplatesListInfo>;
    public constructor() { 
        super();
    }
    public withTemplateNum(templateNum: number): ListConfigTemplatesResponse {
        this['template_num'] = templateNum;
        return this;
    }
    public set templateNum(templateNum: number  | undefined) {
        this['template_num'] = templateNum;
    }
    public get templateNum(): number | undefined {
        return this['template_num'];
    }
    public withTemplates(templates: Array<ConfigTemplatesListInfo>): ListConfigTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}