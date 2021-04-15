import { CCEClusterNodeInformationMetadata } from './CCEClusterNodeInformationMetadata';


export class CCEClusterNodeInformation {
    public metadata: CCEClusterNodeInformationMetadata;
    public constructor(metadata?: any) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: CCEClusterNodeInformationMetadata): CCEClusterNodeInformation {
        this['metadata'] = metadata;
        return this;
    }
}