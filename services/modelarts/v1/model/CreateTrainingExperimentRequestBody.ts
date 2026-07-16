import { TrainingExperimentRequestMetadata } from './TrainingExperimentRequestMetadata';


export class CreateTrainingExperimentRequestBody {
    public metadata?: TrainingExperimentRequestMetadata;
    public constructor(metadata?: TrainingExperimentRequestMetadata) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: TrainingExperimentRequestMetadata): CreateTrainingExperimentRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}