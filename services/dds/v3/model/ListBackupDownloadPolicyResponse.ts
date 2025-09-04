
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupDownloadPolicyResponse extends SdkResponse {
    public id?: string;
    public action?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ListBackupDownloadPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): ListBackupDownloadPolicyResponse {
        this['action'] = action;
        return this;
    }
}