
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportResourceResponse extends SdkResponse {
    public value?: string;
    public constructor() { 
        super();
    }
    public withValue(value: string): ExportResourceResponse {
        this['value'] = value;
        return this;
    }
}