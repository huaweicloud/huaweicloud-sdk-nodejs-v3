
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterClusterResponse extends SdkResponse {
    public uid?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): RegisterClusterResponse {
        this['uid'] = uid;
        return this;
    }
}