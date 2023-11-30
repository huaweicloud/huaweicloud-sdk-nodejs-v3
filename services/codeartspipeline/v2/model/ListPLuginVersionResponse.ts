import { PluginBasicVO } from './PluginBasicVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPLuginVersionResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public data?: Array<PluginBasicVO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPLuginVersionResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPLuginVersionResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPLuginVersionResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PluginBasicVO>): ListPLuginVersionResponse {
        this['data'] = data;
        return this;
    }
}