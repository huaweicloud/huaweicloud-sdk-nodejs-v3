import { Http2Rpc } from './Http2Rpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHttp2RpcsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<Http2Rpc>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowHttp2RpcsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<Http2Rpc>): ShowHttp2RpcsResponse {
        this['data'] = data;
        return this;
    }
}