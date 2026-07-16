import { PoolMetadataUpdate } from './PoolMetadataUpdate';
import { PoolSpecUpdate } from './PoolSpecUpdate';


export class PoolUpdateRequest {
    public metadata?: PoolMetadataUpdate;
    public spec?: PoolSpecUpdate;
    public constructor() { 
    }
    public withMetadata(metadata: PoolMetadataUpdate): PoolUpdateRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecUpdate): PoolUpdateRequest {
        this['spec'] = spec;
        return this;
    }
}