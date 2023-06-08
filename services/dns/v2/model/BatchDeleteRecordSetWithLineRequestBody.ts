

export class BatchDeleteRecordSetWithLineRequestBody {
    private 'recordset_ids': Array<string> | undefined;
    public constructor(recordsetIds?: any) { 
        this['recordset_ids'] = recordsetIds;
    }
    public withRecordsetIds(recordsetIds: Array<string>): BatchDeleteRecordSetWithLineRequestBody {
        this['recordset_ids'] = recordsetIds;
        return this;
    }
    public set recordsetIds(recordsetIds: Array<string> | undefined) {
        this['recordset_ids'] = recordsetIds;
    }
    public get recordsetIds() {
        return this['recordset_ids'];
    }
}