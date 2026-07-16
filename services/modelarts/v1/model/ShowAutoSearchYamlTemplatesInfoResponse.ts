import { YamlTemplate } from './YamlTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchYamlTemplatesInfoResponse extends SdkResponse {
    private 'yaml_templates'?: Array<YamlTemplate>;
    public constructor() { 
        super();
    }
    public withYamlTemplates(yamlTemplates: Array<YamlTemplate>): ShowAutoSearchYamlTemplatesInfoResponse {
        this['yaml_templates'] = yamlTemplates;
        return this;
    }
    public set yamlTemplates(yamlTemplates: Array<YamlTemplate>  | undefined) {
        this['yaml_templates'] = yamlTemplates;
    }
    public get yamlTemplates(): Array<YamlTemplate> | undefined {
        return this['yaml_templates'];
    }
}