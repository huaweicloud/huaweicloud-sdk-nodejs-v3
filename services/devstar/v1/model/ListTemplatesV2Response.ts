import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesV2Response extends SdkResponse {
    public count?: number;
    private 'invalid_count'?: number;
    public templates?: Array<TemplateInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTemplatesV2Response {
        this['count'] = count;
        return this;
    }
    public withInvalidCount(invalidCount: number): ListTemplatesV2Response {
        this['invalid_count'] = invalidCount;
        return this;
    }
    public set invalidCount(invalidCount: number  | undefined) {
        this['invalid_count'] = invalidCount;
    }
    public get invalidCount(): number | undefined {
        return this['invalid_count'];
    }
    public withTemplates(templates: Array<TemplateInfo>): ListTemplatesV2Response {
        this['templates'] = templates;
        return this;
    }
}