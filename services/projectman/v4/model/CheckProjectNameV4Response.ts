
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckProjectNameV4Response extends SdkResponse {
    public exist?: boolean;
    public constructor() { 
        super();
    }
    public withExist(exist: boolean): CheckProjectNameV4Response {
        this['exist'] = exist;
        return this;
    }
}