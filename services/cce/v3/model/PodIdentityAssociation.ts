import { ResourceTag } from './ResourceTag';


export class PodIdentityAssociation {
    public namespace?: string;
    public serviceAccount?: string;
    public agencyName?: string;
    public tags?: Array<ResourceTag>;
    public constructor(namespace?: string, serviceAccount?: string, agencyName?: string) { 
        this['namespace'] = namespace;
        this['serviceAccount'] = serviceAccount;
        this['agencyName'] = agencyName;
    }
    public withNamespace(namespace: string): PodIdentityAssociation {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceAccount(serviceAccount: string): PodIdentityAssociation {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withAgencyName(agencyName: string): PodIdentityAssociation {
        this['agencyName'] = agencyName;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): PodIdentityAssociation {
        this['tags'] = tags;
        return this;
    }
}