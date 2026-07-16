
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchParamsAnalysisResponse extends SdkResponse {
    public header?: Array<string>;
    public data?: Array<Array<string>>;
    public constructor() { 
        super();
    }
    public withHeader(header: Array<string>): ShowAutoSearchParamsAnalysisResponse {
        this['header'] = header;
        return this;
    }
    public withData(data: Array<Array<string>>): ShowAutoSearchParamsAnalysisResponse {
        this['data'] = data;
        return this;
    }
}