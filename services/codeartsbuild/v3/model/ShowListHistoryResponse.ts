import { HistoryRecord } from './HistoryRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowListHistoryResponse extends SdkResponse {
    private 'history_records'?: Array<HistoryRecord> | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withHistoryRecords(historyRecords: Array<HistoryRecord>): ShowListHistoryResponse {
        this['history_records'] = historyRecords;
        return this;
    }
    public set historyRecords(historyRecords: Array<HistoryRecord> | undefined) {
        this['history_records'] = historyRecords;
    }
    public get historyRecords() {
        return this['history_records'];
    }
    public withTotal(total: number): ShowListHistoryResponse {
        this['total'] = total;
        return this;
    }
}