import { NetworkMetadataLabels } from './NetworkMetadataLabels';


export class NetworkMetadataCreation {
    public labels?: NetworkMetadataLabels;
    public constructor(labels?: NetworkMetadataLabels) { 
        this['labels'] = labels;
    }
    public withLabels(labels: NetworkMetadataLabels): NetworkMetadataCreation {
        this['labels'] = labels;
        return this;
    }
}