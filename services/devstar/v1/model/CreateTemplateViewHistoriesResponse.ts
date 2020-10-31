import { TemplateViewHistory } from './TemplateViewHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateViewHistoriesResponse extends SdkResponse {
    public templates?: Array<TemplateViewHistory>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<TemplateViewHistory>): CreateTemplateViewHistoriesResponse {
        this['templates'] = templates;
        return this;
    }
    public withCount(count: number): CreateTemplateViewHistoriesResponse {
        this['count'] = count;
        return this;
    }
}