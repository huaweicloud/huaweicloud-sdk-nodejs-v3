import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPodIdentityAssociationResponse extends SdkResponse {
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
    public withUid(uid: string): ShowPodIdentityAssociationResponse {
        this['uid'] = uid;
        return this;
    }
    public withClusterId(clusterId: string): ShowPodIdentityAssociationResponse {
        this['clusterId'] = clusterId;
        return this;
    }
    public withNamespace(namespace: string): ShowPodIdentityAssociationResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceAccount(serviceAccount: string): ShowPodIdentityAssociationResponse {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withAgencyName(agencyName: string): ShowPodIdentityAssociationResponse {
        this['agencyName'] = agencyName;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): ShowPodIdentityAssociationResponse {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowPodIdentityAssociationResponse {
        this['createdAt'] = createdAt;
        return this;
    }
    public withModifiedAt(modifiedAt: string): ShowPodIdentityAssociationResponse {
        this['modifiedAt'] = modifiedAt;
        return this;
    }
}