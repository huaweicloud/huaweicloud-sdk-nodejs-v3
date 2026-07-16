import { NetworkMetadataUpdate } from './NetworkMetadataUpdate';
import { NetworkSpecUpdate } from './NetworkSpecUpdate';


export class NetworkUpdateRequest {
    public metadata?: NetworkMetadataUpdate;
    public spec?: NetworkSpecUpdate;
    public constructor() { 
    }
    public withMetadata(metadata: NetworkMetadataUpdate): NetworkUpdateRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpecUpdate): NetworkUpdateRequest {
        this['spec'] = spec;
        return this;
    }
}