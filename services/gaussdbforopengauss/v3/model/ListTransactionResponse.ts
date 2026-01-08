import { ListTransactionResponseBodyRows } from './ListTransactionResponseBodyRows';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransactionResponse extends SdkResponse {
    public total?: number;
    public rows?: Array<ListTransactionResponseBodyRows>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTransactionResponse {
        this['total'] = total;
        return this;
    }
    public withRows(rows: Array<ListTransactionResponseBodyRows>): ListTransactionResponse {
        this['rows'] = rows;
        return this;
    }
}