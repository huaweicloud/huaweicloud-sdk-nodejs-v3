import { PoolMetadataUpdateAnnotations } from './PoolMetadataUpdateAnnotations';


export class PoolMetadataUpdate {
    public annotations?: PoolMetadataUpdateAnnotations;
    public constructor() { 
    }
    public withAnnotations(annotations: PoolMetadataUpdateAnnotations): PoolMetadataUpdate {
        this['annotations'] = annotations;
        return this;
    }
}