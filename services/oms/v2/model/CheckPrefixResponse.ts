
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckPrefixResponse extends SdkResponse {
    public exist?: boolean;
    public constructor() { 
        super();
    }
    public withExist(exist: boolean): CheckPrefixResponse {
        this['exist'] = exist;
        return this;
    }
}