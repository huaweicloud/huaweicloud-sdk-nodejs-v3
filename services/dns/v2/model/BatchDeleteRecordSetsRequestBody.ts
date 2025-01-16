

export class BatchDeleteRecordSetsRequestBody {
    private 'zone_type'?: string;
    private 'recordset_ids'?: Array<string>;
    public constructor(zoneType?: string, recordsetIds?: Array<string>) { 
        this['zone_type'] = zoneType;
        this['recordset_ids'] = recordsetIds;
    }
    public withZoneType(zoneType: string): BatchDeleteRecordSetsRequestBody {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withRecordsetIds(recordsetIds: Array<string>): BatchDeleteRecordSetsRequestBody {
        this['recordset_ids'] = recordsetIds;
        return this;
    }
    public set recordsetIds(recordsetIds: Array<string>  | undefined) {
        this['recordset_ids'] = recordsetIds;
    }
    public get recordsetIds(): Array<string> | undefined {
        return this['recordset_ids'];
    }
}