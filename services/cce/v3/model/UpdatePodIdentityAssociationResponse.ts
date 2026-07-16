import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePodIdentityAssociationResponse extends SdkResponse {
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
    public withUid(uid: string): UpdatePodIdentityAssociationResponse {
        this['uid'] = uid;
        return this;
    }
    public withClusterId(clusterId: string): UpdatePodIdentityAssociationResponse {
        this['clusterId'] = clusterId;
        return this;
    }
    public withNamespace(namespace: string): UpdatePodIdentityAssociationResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceAccount(serviceAccount: string): UpdatePodIdentityAssociationResponse {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withAgencyName(agencyName: string): UpdatePodIdentityAssociationResponse {
        this['agencyName'] = agencyName;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): UpdatePodIdentityAssociationResponse {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdatePodIdentityAssociationResponse {
        this['createdAt'] = createdAt;
        return this;
    }
    public withModifiedAt(modifiedAt: string): UpdatePodIdentityAssociationResponse {
        this['modifiedAt'] = modifiedAt;
        return this;
    }
}