import { PoolMetaAnnotations } from './PoolMetaAnnotations';
import { PoolMetaLabels } from './PoolMetaLabels';


export class PoolMetadataDeletion {
    public name?: string;
    public creationTimestamp?: string;
    public deletionTimestamp?: string;
    public labels?: PoolMetaLabels;
    public annotations?: PoolMetaAnnotations;
    public constructor(name?: string, creationTimestamp?: string, deletionTimestamp?: string, labels?: PoolMetaLabels) { 
        this['name'] = name;
        this['creationTimestamp'] = creationTimestamp;
        this['deletionTimestamp'] = deletionTimestamp;
        this['labels'] = labels;
    }
    public withName(name: string): PoolMetadataDeletion {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): PoolMetadataDeletion {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withDeletionTimestamp(deletionTimestamp: string): PoolMetadataDeletion {
        this['deletionTimestamp'] = deletionTimestamp;
        return this;
    }
    public withLabels(labels: PoolMetaLabels): PoolMetadataDeletion {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: PoolMetaAnnotations): PoolMetadataDeletion {
        this['annotations'] = annotations;
        return this;
    }
}