import { UpdateRecordSetsReq } from './UpdateRecordSetsReq';


export class UpdateRecordSetsRequest {
    private 'zone_id': string | undefined;
    private 'recordset_id': string | undefined;
    public body?: UpdateRecordSetsReq;
    public constructor(zoneId?: any, recordsetId?: any) { 
        this['zone_id'] = zoneId;
        this['recordset_id'] = recordsetId;
    }
    public withZoneId(zoneId: string): UpdateRecordSetsRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withRecordsetId(recordsetId: string): UpdateRecordSetsRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId() {
        return this['recordset_id'];
    }
    public withBody(body: UpdateRecordSetsReq): UpdateRecordSetsRequest {
        this['body'] = body;
        return this;
    }
}