import { BatchUpdateRecordSetWithLineReq } from './BatchUpdateRecordSetWithLineReq';


export class BatchUpdateRecordSetWithLineRequest {
    private 'zone_id'?: string;
    public body?: BatchUpdateRecordSetWithLineReq;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): BatchUpdateRecordSetWithLineRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBody(body: BatchUpdateRecordSetWithLineReq): BatchUpdateRecordSetWithLineRequest {
        this['body'] = body;
        return this;
    }
}