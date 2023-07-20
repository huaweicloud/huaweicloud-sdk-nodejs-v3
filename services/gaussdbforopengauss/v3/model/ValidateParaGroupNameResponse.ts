
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateParaGroupNameResponse extends SdkResponse {
    public exist?: boolean;
    public constructor() { 
        super();
    }
    public withExist(exist: boolean): ValidateParaGroupNameResponse {
        this['exist'] = exist;
        return this;
    }
}