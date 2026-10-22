
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountAutoSnapshotPoliciesResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): CountAutoSnapshotPoliciesResponse {
        this['count'] = count;
        return this;
    }
}