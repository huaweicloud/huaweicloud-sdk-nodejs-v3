
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterClusterGroupResponse extends SdkResponse {
    public uid?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): RegisterClusterGroupResponse {
        this['uid'] = uid;
        return this;
    }
}