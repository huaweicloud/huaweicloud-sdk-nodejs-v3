import { AutopilotClusterInformationSpec } from './AutopilotClusterInformationSpec';
import { AutopilotClusterMetadataForUpdate } from './AutopilotClusterMetadataForUpdate';


export class AutopilotClusterInformation {
    public spec?: AutopilotClusterInformationSpec;
    public metadata?: AutopilotClusterMetadataForUpdate;
    public constructor(spec?: AutopilotClusterInformationSpec) { 
        this['spec'] = spec;
    }
    public withSpec(spec: AutopilotClusterInformationSpec): AutopilotClusterInformation {
        this['spec'] = spec;
        return this;
    }
    public withMetadata(metadata: AutopilotClusterMetadataForUpdate): AutopilotClusterInformation {
        this['metadata'] = metadata;
        return this;
    }
}