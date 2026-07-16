import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePodIdentityAssociationResponse extends SdkResponse {
    public uid?: string;
    public clusterId?: string;
    public namespace?: string;
    public serviceAccount?: string;
    public agencyName?: string;
    public tags?: Array<ResourceTag>;
    public createdAt?: string;
    public modifiedAt?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): CreatePodIdentityAssociationResponse {
        this['uid'] = uid;
        return this;
    }
    public withClusterId(clusterId: string): CreatePodIdentityAssociationResponse {
        this['clusterId'] = clusterId;
        return this;
    }
    public withNamespace(namespace: string): CreatePodIdentityAssociationResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceAccount(serviceAccount: string): CreatePodIdentityAssociationResponse {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withAgencyName(agencyName: string): CreatePodIdentityAssociationResponse {
        this['agencyName'] = agencyName;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): CreatePodIdentityAssociationResponse {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: string): CreatePodIdentityAssociationResponse {
        this['createdAt'] = createdAt;
        return this;
    }
    public withModifiedAt(modifiedAt: string): CreatePodIdentityAssociationResponse {
        this['modifiedAt'] = modifiedAt;
        return this;
    }
}