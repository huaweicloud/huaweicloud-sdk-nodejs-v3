import { ClusterInformationSpec } from './ClusterInformationSpec';
import { ClusterMetadataForUpdate } from './ClusterMetadataForUpdate';


export class ClusterInformation {
    public spec?: ClusterInformationSpec;
    public metadata?: ClusterMetadataForUpdate;
    public constructor(spec?: ClusterInformationSpec) { 
        this['spec'] = spec;
    }
    public withSpec(spec: ClusterInformationSpec): ClusterInformation {
        this['spec'] = spec;
        return this;
    }
    public withMetadata(metadata: ClusterMetadataForUpdate): ClusterInformation {
        this['metadata'] = metadata;
        return this;
    }
}