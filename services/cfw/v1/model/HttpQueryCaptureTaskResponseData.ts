import { CaptureTaskVO } from './CaptureTaskVO';


export class HttpQueryCaptureTaskResponseData {
    public limit?: number;
    private 'object_id'?: string;
    public offset?: number;
    private 'project_id'?: string;
    public total?: number;
    public records?: Array<CaptureTaskVO>;
    public constructor() { 
    }
    public withLimit(limit: number): HttpQueryCaptureTaskResponseData {
        this['limit'] = limit;
        return this;
    }
    public withObjectId(objectId: string): HttpQueryCaptureTaskResponseData {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withOffset(offset: number): HttpQueryCaptureTaskResponseData {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): HttpQueryCaptureTaskResponseData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
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