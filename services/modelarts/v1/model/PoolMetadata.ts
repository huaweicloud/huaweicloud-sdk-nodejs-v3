import { PoolMetaAnnotations } from './PoolMetaAnnotations';
import { PoolMetaLabels } from './PoolMetaLabels';


export class PoolMetadata {
    public name?: string;
    public creationTimestamp?: string;
    public labels?: PoolMetaLabels;
    public annotations?: PoolMetaAnnotations;
    public constructor(name?: string, creationTimestamp?: string, labels?: PoolMetaLabels) { 
        this['name'] = name;
        this['creationTimestamp'] = creationTimestamp;
        this['labels'] = labels;
    }
    public withName(name: string): PoolMetadata {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): PoolMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withLabels(labels: PoolMetaLabels): PoolMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: PoolMetaAnnotations): PoolMetadata {
        this['annotations'] = annotations;
        return this;
    }
}