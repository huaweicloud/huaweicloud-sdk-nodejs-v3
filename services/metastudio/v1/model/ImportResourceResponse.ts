
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportResourceResponse extends SdkResponse {
    public value?: string;
    public constructor() { 
        super();
    }
    public withValue(value: string): ImportResourceResponse {
        this['value'] = value;
        return this;
    }
}