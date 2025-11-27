
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfigSetResponse extends SdkResponse {
    public uid?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): CreateConfigSetResponse {
        this['uid'] = uid;
        return this;
    }
}