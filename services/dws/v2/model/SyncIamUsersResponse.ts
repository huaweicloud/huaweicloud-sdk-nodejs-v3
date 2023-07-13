
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncIamUsersResponse extends SdkResponse {
    private 'sync_user'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withSyncUser(syncUser: Array<string>): SyncIamUsersResponse {
        this['sync_user'] = syncUser;
        return this;
    }
    public set syncUser(syncUser: Array<string> | undefined) {
        this['sync_user'] = syncUser;
    }
    public get syncUser() {
        return this['sync_user'];
    }
}