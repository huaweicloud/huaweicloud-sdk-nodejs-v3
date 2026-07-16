import { TrainingExperimentResponseMetadata } from './TrainingExperimentResponseMetadata';
import { TrainingExperimentStatistic } from './TrainingExperimentStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrainingExperimentResponse extends SdkResponse {
    public metadata?: TrainingExperimentResponseMetadata;
    public statistic?: TrainingExperimentStatistic;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: TrainingExperimentResponseMetadata): CreateTrainingExperimentResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withStatistic(statistic: TrainingExperimentStatistic): CreateTrainingExperimentResponse {
        this['statistic'] = statistic;
        return this;
    }
}