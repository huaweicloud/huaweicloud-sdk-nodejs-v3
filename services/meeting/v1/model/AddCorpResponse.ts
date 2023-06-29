
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddCorpResponse extends SdkResponse {
    public value?: string;
    public constructor() { 
        super();
    }
    public withValue(value: string): AddCorpResponse {
        this['value'] = value;
        return this;
    }
}