import { HistoryRecord1 } from './HistoryRecord1';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowListPeriodHistoryResponse extends SdkResponse {
    public total?: number;
    private 'history_records'?: Array<HistoryRecord1>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowListPeriodHistoryResponse {
        this['total'] = total;
        return this;
    }
    public withHistoryRecords(historyRecords: Array<HistoryRecord1>): ShowListPeriodHistoryResponse {
        this['history_records'] = historyRecords;
        return this;
    }
    public set historyRecords(historyRecords: Array<HistoryRecord1>  | undefined) {
        this['history_records'] = historyRecords;
    }
    public get historyRecords(): Array<HistoryRecord1> | undefined {
        return this['history_records'];
    }
}