import { WasmPlugin } from './WasmPlugin';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<WasmPlugin>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowPluginsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<WasmPlugin>): ShowPluginsResponse {
        this['data'] = data;
        return this;
    }
}