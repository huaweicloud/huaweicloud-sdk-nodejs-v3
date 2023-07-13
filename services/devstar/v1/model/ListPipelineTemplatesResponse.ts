import { PipelineTemplate } from './PipelineTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelineTemplatesResponse extends SdkResponse {
    public templates?: Array<PipelineTemplate>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<PipelineTemplate>): ListPipelineTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
    public withCount(count: number): ListPipelineTemplatesResponse {
        this['count'] = count;
        return this;
    }
}