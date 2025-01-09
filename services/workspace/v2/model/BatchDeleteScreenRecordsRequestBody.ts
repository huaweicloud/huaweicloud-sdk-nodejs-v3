import { BatchDeleteScreenRecordsRequestBodyScreenRecords } from './BatchDeleteScreenRecordsRequestBodyScreenRecords';


export class BatchDeleteScreenRecordsRequestBody {
    private 'screen_records'?: Array<BatchDeleteScreenRecordsRequestBodyScreenRecords>;
    public constructor() { 
    }
    public withScreenRecords(screenRecords: Array<BatchDeleteScreenRecordsRequestBodyScreenRecords>): BatchDeleteScreenRecordsRequestBody {
        this['screen_records'] = screenRecords;
        return this;
    }
    public set screenRecords(screenRecords: Array<BatchDeleteScreenRecordsRequestBodyScreenRecords>  | undefined) {
        this['screen_records'] = screenRecords;
    }
    public get screenRecords(): Array<BatchDeleteScreenRecordsRequestBodyScreenRecords> | undefined {
        return this['screen_records'];
    }
}