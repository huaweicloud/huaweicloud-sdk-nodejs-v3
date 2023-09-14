import { PipelineTemplateSimpleVO } from './PipelineTemplateSimpleVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelineTemplatesResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public templates?: Array<PipelineTemplateSimpleVO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPipelineTemplatesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineTemplatesResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPipelineTemplatesResponse {
        this['total'] = total;
        return this;
    }
    public withTemplates(templates: Array<PipelineTemplateSimpleVO>): ListPipelineTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}