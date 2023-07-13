import { ShowMetadataRespGesMetadataLabels } from './ShowMetadataRespGesMetadataLabels';


export class ShowMetadataRespGesMetadata {
    public labels?: Array<ShowMetadataRespGesMetadataLabels>;
    public constructor() { 
    }
    public withLabels(labels: Array<ShowMetadataRespGesMetadataLabels>): ShowMetadataRespGesMetadata {
        this['labels'] = labels;
        return this;
    }
}