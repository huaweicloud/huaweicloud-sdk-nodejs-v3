import { TrainingJobInfo } from './TrainingJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVoiceTrainingJobResponse extends SdkResponse {
    public count?: number;
    public jobs?: Array<TrainingJobInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListVoiceTrainingJobResponse {
        this['count'] = count;
        return this;
    }
    public withJobs(jobs: Array<TrainingJobInfo>): ListVoiceTrainingJobResponse {
        this['jobs'] = jobs;
        return this;
    }
}