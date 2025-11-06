import { PipelineStageJobDto } from './PipelineStageJobDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLatestPipelineJobsResponse extends SdkResponse {
    public id?: number;
    public status?: ListLatestPipelineJobsResponseStatusEnum | string;
    public stages?: Array<PipelineStageJobDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): ListLatestPipelineJobsResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListLatestPipelineJobsResponseStatusEnum | string): ListLatestPipelineJobsResponse {
        this['status'] = status;
        return this;
    }
    public withStages(stages: Array<PipelineStageJobDto>): ListLatestPipelineJobsResponse {
        this['stages'] = stages;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLatestPipelineJobsResponseStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
