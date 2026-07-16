import { PoolAnnotationsCreation } from './PoolAnnotationsCreation';
import { PoolLabelsCreation } from './PoolLabelsCreation';


export class PoolMetadataCreation {
    public labels?: PoolLabelsCreation;
    public annotations?: PoolAnnotationsCreation;
    public constructor(labels?: PoolLabelsCreation) { 
        this['labels'] = labels;
    }
    public withLabels(labels: PoolLabelsCreation): PoolMetadataCreation {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: PoolAnnotationsCreation): PoolMetadataCreation {
        this['annotations'] = annotations;
        return this;
    }
}