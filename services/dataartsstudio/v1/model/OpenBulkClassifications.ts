import { OpenClassification } from './OpenClassification';


export class OpenBulkClassifications {
    public guids?: Array<string>;
    public classification?: OpenClassification;
    public constructor(guids?: Array<string>, classification?: OpenClassification) { 
        this['guids'] = guids;
        this['classification'] = classification;
    }
    public withGuids(guids: Array<string>): OpenBulkClassifications {
        this['guids'] = guids;
        return this;
    }
    public withClassification(classification: OpenClassification): OpenBulkClassifications {
        this['classification'] = classification;
        return this;
    }
}