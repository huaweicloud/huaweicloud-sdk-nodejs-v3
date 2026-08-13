import { ResourceSummaryResponseItemTypes } from './ResourceSummaryResponseItemTypes';


export class ResourceSummaryResponseItem {
    public provider?: string;
    public types?: Array<ResourceSummaryResponseItemTypes>;
    public constructor() { 
    }
    public withProvider(provider: string): ResourceSummaryResponseItem {
        this['provider'] = provider;
        return this;
    }
    public withTypes(types: Array<ResourceSummaryResponseItemTypes>): ResourceSummaryResponseItem {
        this['types'] = types;
        return this;
    }
}