import { Pipelines } from './Pipelines';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelinesResponse extends SdkResponse {
    public pipelines?: Array<Pipelines>;
    public constructor() { 
        super();
    }
    public withPipelines(pipelines: Array<Pipelines>): ListPipelinesResponse {
        this['pipelines'] = pipelines;
        return this;
    }
}