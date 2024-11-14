
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateConfigurationNameResponse extends SdkResponse {
    private 'is_existed'?: boolean;
    public constructor() { 
        super();
    }
    public withIsExisted(isExisted: boolean): ValidateConfigurationNameResponse {
        this['is_existed'] = isExisted;
        return this;
    }
    public set isExisted(isExisted: boolean  | undefined) {
        this['is_existed'] = isExisted;
    }
    public get isExisted(): boolean | undefined {
        return this['is_existed'];
    }
}