
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDepartmentResponse extends SdkResponse {
    public value?: string;
    public constructor() { 
        super();
    }
    public withValue(value: string): AddDepartmentResponse {
        this['value'] = value;
        return this;
    }
}