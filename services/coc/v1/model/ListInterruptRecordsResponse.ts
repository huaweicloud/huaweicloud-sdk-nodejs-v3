import { InterruptRecord } from './InterruptRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInterruptRecordsResponse extends SdkResponse {
    public total?: number;
    private 'interrupt_record_list'?: Array<InterruptRecord>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInterruptRecordsResponse {
        this['total'] = total;
        return this;
    }
    public withInterruptRecordList(interruptRecordList: Array<InterruptRecord>): ListInterruptRecordsResponse {
        this['interrupt_record_list'] = interruptRecordList;
        return this;
    }
    public set interruptRecordList(interruptRecordList: Array<InterruptRecord>  | undefined) {
        this['interrupt_record_list'] = interruptRecordList;
    }
    public get interruptRecordList(): Array<InterruptRecord> | undefined {
        return this['interrupt_record_list'];
    }
}