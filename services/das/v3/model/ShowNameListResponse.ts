
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNameListResponse extends SdkResponse {
    public data?: Array<object>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<object>): ShowNameListResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ShowNameListResponse {
        this['total'] = total;
        return this;
    }
}