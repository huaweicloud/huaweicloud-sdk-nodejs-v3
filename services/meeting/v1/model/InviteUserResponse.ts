
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InviteUserResponse extends SdkResponse {
    public userExist?: boolean;
    public constructor() { 
        super();
    }
    public withUserExist(userExist: boolean): InviteUserResponse {
        this['userExist'] = userExist;
        return this;
    }
}