import { InstancePublicatiosInfo } from './InstancePublicatiosInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublications4SubscriptionResponse extends SdkResponse {
    private 'instance_publications'?: Array<InstancePublicatiosInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstancePublications(instancePublications: Array<InstancePublicatiosInfo>): ListPublications4SubscriptionResponse {
        this['instance_publications'] = instancePublications;
        return this;
    }
    public set instancePublications(instancePublications: Array<InstancePublicatiosInfo>  | undefined) {
        this['instance_publications'] = instancePublications;
    }
    public get instancePublications(): Array<InstancePublicatiosInfo> | undefined {
        return this['instance_publications'];
    }
    public withTotalCount(totalCount: number): ListPublications4SubscriptionResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}