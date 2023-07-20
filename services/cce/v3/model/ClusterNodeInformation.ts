import { ClusterNodeInformationMetadata } from './ClusterNodeInformationMetadata';


export class ClusterNodeInformation {
    public metadata?: ClusterNodeInformationMetadata;
    public constructor(metadata?: ClusterNodeInformationMetadata) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: ClusterNodeInformationMetadata): ClusterNodeInformation {
        this['metadata'] = metadata;
        return this;
    }
}