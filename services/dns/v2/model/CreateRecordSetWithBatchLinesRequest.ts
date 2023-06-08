import { CreateRSetBatchLinesReq } from './CreateRSetBatchLinesReq';


export class CreateRecordSetWithBatchLinesRequest {
    private 'zone_id': string | undefined;
    public body?: CreateRSetBatchLinesReq;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): CreateRecordSetWithBatchLinesRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: CreateRSetBatchLinesReq): CreateRecordSetWithBatchLinesRequest {
        this['body'] = body;
        return this;
    }
}