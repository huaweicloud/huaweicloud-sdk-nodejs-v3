import { CaptureTaskVO } from './CaptureTaskVO';


export class HttpQueryCaptureTaskResponseData {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<CaptureTaskVO>;
    public constructor() { 
    }
    public withLimit(limit: number): HttpQueryCaptureTaskResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): HttpQueryCaptureTaskResponseData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): HttpQueryCaptureTaskResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<CaptureTaskVO>): HttpQueryCaptureTaskResponseData {
        this['records'] = records;
        return this;
    }
}