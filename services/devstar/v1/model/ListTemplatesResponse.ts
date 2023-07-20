import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public count?: number;
    private 'invalid_count'?: number;
    public templates?: Array<TemplateInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withInvalidCount(invalidCount: number): ListTemplatesResponse {
        this['invalid_count'] = invalidCount;
        return this;
    }
    public set invalidCount(invalidCount: number  | undefined) {
        this['invalid_count'] = invalidCount;
    }
    public get invalidCount(): number | undefined {
        return this['invalid_count'];
    }
    public withTemplates(templates: Array<TemplateInfo>): ListTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}