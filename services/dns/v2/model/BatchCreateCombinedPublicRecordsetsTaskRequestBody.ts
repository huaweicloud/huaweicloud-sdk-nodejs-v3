

export class BatchCreateCombinedPublicRecordsetsTaskRequestBody {
    private 'zone_names'?: Array<string>;
    private 'recordset_name_prefixes'?: Array<string>;
    public records?: Array<string>;
    public type?: string;
    public line?: string;
    public ttl?: number;
    public constructor(zoneNames?: Array<string>, recordsetNamePrefixes?: Array<string>, records?: Array<string>, type?: string) { 
        this['zone_names'] = zoneNames;
        this['recordset_name_prefixes'] = recordsetNamePrefixes;
        this['records'] = records;
        this['type'] = type;
    }
    public withZoneNames(zoneNames: Array<string>): BatchCreateCombinedPublicRecordsetsTaskRequestBody {
        this['zone_names'] = zoneNames;
        return this;
    }
    public set zoneNames(zoneNames: Array<string>  | undefined) {
        this['zone_names'] = zoneNames;
    }
    public get zoneNames(): Array<string> | undefined {
        return this['zone_names'];
    }
    public withRecordsetNamePrefixes(recordsetNamePrefixes: Array<string>): BatchCreateCombinedPublicRecordsetsTaskRequestBody {
        this['recordset_name_prefixes'] = recordsetNamePrefixes;
        return this;
    }
    public set recordsetNamePrefixes(recordsetNamePrefixes: Array<string>  | undefined) {
        this['recordset_name_prefixes'] = recordsetNamePrefixes;
    }
    public get recordsetNamePrefixes(): Array<string> | undefined {
        return this['recordset_name_prefixes'];
    }
    public withRecords(records: Array<string>): BatchCreateCombinedPublicRecordsetsTaskRequestBody {
        this['records'] = records;
        return this;
    }
    public withType(type: string): BatchCreateCombinedPublicRecordsetsTaskRequestBody {
        this['type'] = type;
        return this;
    }
    public withLine(line: string): BatchCreateCombinedPublicRecordsetsTaskRequestBody {
        this['line'] = line;
        return this;
    }
    public withTtl(ttl: number): BatchCreateCombinedPublicRecordsetsTaskRequestBody {
        this['ttl'] = ttl;
        return this;
    }
}