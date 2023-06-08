import { UpdateRecordSetReq } from './UpdateRecordSetReq';


export class UpdateRecordSetRequest {
    private 'zone_id': string | undefined;
    private 'recordset_id': string | undefined;
    public body?: UpdateRecordSetReq;
    public constructor(zoneId?: any, recordsetId?: any) { 
        this['zone_id'] = zoneId;
        this['recordset_id'] = recordsetId;
    }
    public withZoneId(zoneId: string): UpdateRecordSetRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withRecordsetId(recordsetId: string): UpdateRecordSetRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId() {
        return this['recordset_id'];
    }
    public withBody(body: UpdateRecordSetReq): UpdateRecordSetRequest {
        this['body'] = body;
        return this;
    }
}