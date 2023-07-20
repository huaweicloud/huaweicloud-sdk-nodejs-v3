

export class DeleteRecordSetRequest {
    private 'zone_id'?: string;
    private 'recordset_id'?: string;
    public constructor(zoneId?: string, recordsetId?: string) { 
        this['zone_id'] = zoneId;
        this['recordset_id'] = recordsetId;
    }
    public withZoneId(zoneId: string): DeleteRecordSetRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withRecordsetId(recordsetId: string): DeleteRecordSetRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string  | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId(): string | undefined {
        return this['recordset_id'];
    }
}