import { ListTransactionResponseBodyRowsInfo } from './ListTransactionResponseBodyRowsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransactionResponse extends SdkResponse {
    public total?: number;
    private 'rows_info'?: Array<ListTransactionResponseBodyRowsInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTransactionResponse {
        this['total'] = total;
        return this;
    }
    public withRowsInfo(rowsInfo: Array<ListTransactionResponseBodyRowsInfo>): ListTransactionResponse {
        this['rows_info'] = rowsInfo;
        return this;
    }
    public set rowsInfo(rowsInfo: Array<ListTransactionResponseBodyRowsInfo>  | undefined) {
        this['rows_info'] = rowsInfo;
    }
    public get rowsInfo(): Array<ListTransactionResponseBodyRowsInfo> | undefined {
        return this['rows_info'];
    }
}