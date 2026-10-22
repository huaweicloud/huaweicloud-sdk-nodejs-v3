
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountSnapshotsGroupResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): CountSnapshotsGroupResponse {
        this['count'] = count;
        return this;
    }
}