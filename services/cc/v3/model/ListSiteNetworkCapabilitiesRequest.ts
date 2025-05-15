import { SiteNetworkSpecificationEnum } from './SiteNetworkSpecificationEnum';


export class ListSiteNetworkCapabilitiesRequest {
    public specification?: Array<SiteNetworkSpecificationEnum>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withSpecification(specification: Array<SiteNetworkSpecificationEnum>): ListSiteNetworkCapabilitiesRequest {
        this['specification'] = specification;
        return this;
    }
    public withLimit(limit: number): ListSiteNetworkCapabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSiteNetworkCapabilitiesRequest {
        this['marker'] = marker;
        return this;
    }
}