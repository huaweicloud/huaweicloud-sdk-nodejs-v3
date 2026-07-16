import { TrainingExperimentResponseMetadata } from './TrainingExperimentResponseMetadata';
import { TrainingExperimentStatistic } from './TrainingExperimentStatistic';


export class TrainingExperimentResponse {
    public metadata?: TrainingExperimentResponseMetadata;
    public statistic?: TrainingExperimentStatistic;
    public constructor() { 
    }
    public withMetadata(metadata: TrainingExperimentResponseMetadata): TrainingExperimentResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withStatistic(statistic: TrainingExperimentStatistic): TrainingExperimentResponse {
        this['statistic'] = statistic;
        return this;
    }
}