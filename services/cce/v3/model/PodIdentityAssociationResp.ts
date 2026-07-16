import { ResourceTag } from './ResourceTag';


export class PodIdentityAssociationResp {
    public uid?: string;
    public clusterId?: string;
    public namespace?: string;
    public serviceAccount?: string;
    public agencyName?: string;
    public tags?: Array<ResourceTag>;
    public createdAt?: string;
    public modifiedAt?: string;
    public constructor() { 
    }
    public withUid(uid: string): PodIdentityAssociationResp {
        this['uid'] = uid;
        return this;
    }
    public withClusterId(clusterId: string): PodIdentityAssociationResp {
        this['clusterId'] = clusterId;
        return this;
    }
    public withNamespace(namespace: string): PodIdentityAssociationResp {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceAccount(serviceAccount: string): PodIdentityAssociationResp {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withAgencyName(agencyName: string): PodIdentityAssociationResp {
        this['agencyName'] = agencyName;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): PodIdentityAssociationResp {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: string): PodIdentityAssociationResp {
        this['createdAt'] = createdAt;
        return this;
    }
    public withModifiedAt(modifiedAt: string): PodIdentityAssociationResp {
        this['modifiedAt'] = modifiedAt;
        return this;
    }
}