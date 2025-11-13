import { BatchCreateRecordSetsTaskRequestBody } from './BatchCreateRecordSetsTaskRequestBody';


export class BatchCreateRecordSetsTaskRequest {
    private 'zone_id'?: string;
    public body?: BatchCreateRecordSetsTaskRequestBody;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): BatchCreateRecordSetsTaskRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBody(body: BatchCreateRecordSetsTaskRequestBody): BatchCreateRecordSetsTaskRequest {
        this['body'] = body;
        return this;
    }
}