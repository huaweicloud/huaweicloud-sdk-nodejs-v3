
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncStarRocksUsersResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SyncStarRocksUsersResponse {
        this['success'] = success;
        return this;
    }
}