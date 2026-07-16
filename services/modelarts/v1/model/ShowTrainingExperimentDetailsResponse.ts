import { TrainingExperimentResponseMetadata } from './TrainingExperimentResponseMetadata';
import { TrainingExperimentStatistic } from './TrainingExperimentStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingExperimentDetailsResponse extends SdkResponse {
    public metadata?: TrainingExperimentResponseMetadata;
    public statistic?: TrainingExperimentStatistic;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: TrainingExperimentResponseMetadata): ShowTrainingExperimentDetailsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withStatistic(statistic: TrainingExperimentStatistic): ShowTrainingExperimentDetailsResponse {
        this['statistic'] = statistic;
        return this;
    }
}