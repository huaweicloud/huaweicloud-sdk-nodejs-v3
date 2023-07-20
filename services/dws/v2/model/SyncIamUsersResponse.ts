
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncIamUsersResponse extends SdkResponse {
    private 'sync_user'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSyncUser(syncUser: Array<string>): SyncIamUsersResponse {
        this['sync_user'] = syncUser;
        return this;
    }
    public set syncUser(syncUser: Array<string>  | undefined) {
        this['sync_user'] = syncUser;
    }
    public get syncUser(): Array<string> | undefined {
        return this['sync_user'];
    }
}