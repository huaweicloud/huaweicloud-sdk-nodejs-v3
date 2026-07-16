import { NetworkMetadataAnnotations } from './NetworkMetadataAnnotations';
import { NetworkMetadataLabels } from './NetworkMetadataLabels';


export class NetworkMetadata {
    public name?: string;
    public creationTimestamp?: string;
    public labels?: NetworkMetadataLabels;
    public annotations?: NetworkMetadataAnnotations;
    public constructor(name?: string, creationTimestamp?: string, labels?: NetworkMetadataLabels) { 
        this['name'] = name;
        this['creationTimestamp'] = creationTimestamp;
        this['labels'] = labels;
    }
    public withName(name: string): NetworkMetadata {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): NetworkMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withLabels(labels: NetworkMetadataLabels): NetworkMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: NetworkMetadataAnnotations): NetworkMetadata {
        this['annotations'] = annotations;
        return this;
    }
}