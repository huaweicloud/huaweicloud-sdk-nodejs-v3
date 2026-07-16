
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchPerTrialResponse extends SdkResponse {
    public header?: Array<string>;
    public data?: Array<Array<string>>;
    public constructor() { 
        super();
    }
    public withHeader(header: Array<string>): ShowAutoSearchPerTrialResponse {
        this['header'] = header;
        return this;
    }
    public withData(data: Array<Array<string>>): ShowAutoSearchPerTrialResponse {
        this['data'] = data;
        return this;
    }
}