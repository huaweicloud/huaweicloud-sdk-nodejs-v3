

export class BatchDeletePublicRecordsetsTaskRequestBody {
    private 'zone_names'?: Array<string>;
    private 'recordset_name_prefixes'?: Array<string>;
    public constructor(zoneNames?: Array<string>, recordsetNamePrefixes?: Array<string>) { 
        this['zone_names'] = zoneNames;
        this['recordset_name_prefixes'] = recordsetNamePrefixes;
    }
    public withZoneNames(zoneNames: Array<string>): BatchDeletePublicRecordsetsTaskRequestBody {
        this['zone_names'] = zoneNames;
        return this;
    }
    public set zoneNames(zoneNames: Array<string>  | undefined) {
        this['zone_names'] = zoneNames;
    }
    public get zoneNames(): Array<string> | undefined {
        return this['zone_names'];
    }
    public withRecordsetNamePrefixes(recordsetNamePrefixes: Array<string>): BatchDeletePublicRecordsetsTaskRequestBody {
        this['recordset_name_prefixes'] = recordsetNamePrefixes;
        return this;
    }
    public set recordsetNamePrefixes(recordsetNamePrefixes: Array<string>  | undefined) {
        this['recordset_name_prefixes'] = recordsetNamePrefixes;
    }
    public get recordsetNamePrefixes(): Array<string> | undefined {
        return this['recordset_name_prefixes'];
    }
}