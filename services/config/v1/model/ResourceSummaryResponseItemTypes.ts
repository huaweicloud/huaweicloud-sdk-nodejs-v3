import { ResourceSummaryResponseItemRegions } from './ResourceSummaryResponseItemRegions';


export class ResourceSummaryResponseItemTypes {
    public type?: string;
    public regions?: Array<ResourceSummaryResponseItemRegions>;
    public constructor() { 
    }
    public withType(type: string): ResourceSummaryResponseItemTypes {
        this['type'] = type;
        return this;
    }
    public withRegions(regions: Array<ResourceSummaryResponseItemRegions>): ResourceSummaryResponseItemTypes {
        this['regions'] = regions;
        return this;
    }
}