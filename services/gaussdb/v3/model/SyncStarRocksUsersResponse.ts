
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncStarRocksUsersResponse extends SdkResponse {
    public success?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: string): SyncStarRocksUsersResponse {
        this['success'] = success;
        return this;
    }
}