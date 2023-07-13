import { BatchDeleteRecordSetWithLineRequestBody } from './BatchDeleteRecordSetWithLineRequestBody';


export class BatchDeleteRecordSetWithLineRequest {
    private 'zone_id': string | undefined;
    public body?: BatchDeleteRecordSetWithLineRequestBody;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): BatchDeleteRecordSetWithLineRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: BatchDeleteRecordSetWithLineRequestBody): BatchDeleteRecordSetWithLineRequest {
        this['body'] = body;
        return this;
    }
}