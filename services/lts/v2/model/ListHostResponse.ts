import { GetHostListInfo } from './GetHostListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostResponse extends SdkResponse {
    public result?: Array<GetHostListInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<GetHostListInfo>): ListHostResponse {
        this['result'] = result;
        return this;
    }
    public withTotal(total: number): ListHostResponse {
        this['total'] = total;
        return this;
    }
}