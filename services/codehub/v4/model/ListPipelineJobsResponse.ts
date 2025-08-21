import { JobWithStageDto } from './JobWithStageDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelineJobsResponse extends SdkResponse {
    public body?: Array<JobWithStageDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<JobWithStageDto>): ListPipelineJobsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListPipelineJobsResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}