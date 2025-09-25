import { WaitEventResult } from './WaitEventResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWaitEventResponse extends SdkResponse {
    public total?: number;
    public rows?: WaitEventResult;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWaitEventResponse {
        this['total'] = total;
        return this;
    }
    public withRows(rows: WaitEventResult): ListWaitEventResponse {
        this['rows'] = rows;
        return this;
    }
}