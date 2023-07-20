import { ConfigTemplatesListInfo } from './ConfigTemplatesListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigTemplatesResponse extends SdkResponse {
    private 'template_num'?: number;
    private 'config_templates'?: Array<ConfigTemplatesListInfo>;
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
    public withConfigTemplates(configTemplates: Array<ConfigTemplatesListInfo>): ListConfigTemplatesResponse {
        this['config_templates'] = configTemplates;
        return this;
    }
    public set configTemplates(configTemplates: Array<ConfigTemplatesListInfo>  | undefined) {
        this['config_templates'] = configTemplates;
    }
    public get configTemplates(): Array<ConfigTemplatesListInfo> | undefined {
        return this['config_templates'];
    }
}