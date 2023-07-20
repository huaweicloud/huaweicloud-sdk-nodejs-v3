import { BatchDeleteRecordSetWithLineRequestBody } from './BatchDeleteRecordSetWithLineRequestBody';


export class BatchDeleteRecordSetWithLineRequest {
    private 'zone_id'?: string;
    public body?: BatchDeleteRecordSetWithLineRequestBody;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): BatchDeleteRecordSetWithLineRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBody(body: BatchDeleteRecordSetWithLineRequestBody): BatchDeleteRecordSetWithLineRequest {
        this['body'] = body;
        return this;
    }
}