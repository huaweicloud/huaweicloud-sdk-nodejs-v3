import { CreateSiteInformation } from './CreateSiteInformation';


export class CreateSiteInformationPair {
    public sites?: Array<CreateSiteInformation>;
    public constructor(sites?: Array<CreateSiteInformation>) { 
        this['sites'] = sites;
    }
    public withSites(sites: Array<CreateSiteInformation>): CreateSiteInformationPair {
        this['sites'] = sites;
        return this;
    }
}