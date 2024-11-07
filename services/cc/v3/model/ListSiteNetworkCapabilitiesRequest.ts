import { SiteNetworkSpecificationEnum } from './SiteNetworkSpecificationEnum';


export class ListSiteNetworkCapabilitiesRequest {
    public specification?: Array<SiteNetworkSpecificationEnum>;
    public constructor() { 
    }
    public withSpecification(specification: Array<SiteNetworkSpecificationEnum>): ListSiteNetworkCapabilitiesRequest {
        this['specification'] = specification;
        return this;
    }
}