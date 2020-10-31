import { TemplateViewHistory } from './TemplateViewHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateViewHistoriesResponse extends SdkResponse {
    public templates?: Array<TemplateViewHistory>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<TemplateViewHistory>): ListTemplateViewHistoriesResponse {
        this['templates'] = templates;
        return this;
    }
    public withCount(count: number): ListTemplateViewHistoriesResponse {
        this['count'] = count;
        return this;
    }
}