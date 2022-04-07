import { NodePoolMetadataUpdate } from './NodePoolMetadataUpdate';
import { NodePoolSpecUpdate } from './NodePoolSpecUpdate';


export class NodePoolUpdate {
    public metadata: NodePoolMetadataUpdate;
    public spec: NodePoolSpecUpdate;
    public constructor(metadata?: any, spec?: any) { 
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withMetadata(metadata: NodePoolMetadataUpdate): NodePoolUpdate {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpecUpdate): NodePoolUpdate {
        this['spec'] = spec;
        return this;
    }
}