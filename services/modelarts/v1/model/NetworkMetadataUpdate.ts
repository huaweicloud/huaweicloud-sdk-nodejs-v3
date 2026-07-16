import { NetworkMetadataAnnotations } from './NetworkMetadataAnnotations';


export class NetworkMetadataUpdate {
    public annotations?: NetworkMetadataAnnotations;
    public constructor() { 
    }
    public withAnnotations(annotations: NetworkMetadataAnnotations): NetworkMetadataUpdate {
        this['annotations'] = annotations;
        return this;
    }
}