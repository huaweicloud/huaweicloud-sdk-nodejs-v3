import { CreateMetadataReqGesMetadataLabels } from './CreateMetadataReqGesMetadataLabels';


export class CreateMetadataReqGesMetadata {
    public labels: Array<CreateMetadataReqGesMetadataLabels>;
    public constructor(labels?: any) { 
        this['labels'] = labels;
    }
    public withLabels(labels: Array<CreateMetadataReqGesMetadataLabels>): CreateMetadataReqGesMetadata {
        this['labels'] = labels;
        return this;
    }
}