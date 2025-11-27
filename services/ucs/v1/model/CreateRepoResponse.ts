
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRepoResponse extends SdkResponse {
    public uid?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): CreateRepoResponse {
        this['uid'] = uid;
        return this;
    }
}