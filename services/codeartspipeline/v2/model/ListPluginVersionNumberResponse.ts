
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginVersionNumberResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPluginVersionNumberResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginVersionNumberResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPluginVersionNumberResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<string>): ListPluginVersionNumberResponse {
        this['data'] = data;
        return this;
    }
}