

export class BatchSetRecordSetsStatusRequestBody {
    public status?: string;
    private 'recordset_ids'?: Array<string>;
    public constructor(status?: string, recordsetIds?: Array<string>) { 
        this['status'] = status;
        this['recordset_ids'] = recordsetIds;
    }
    public withStatus(status: string): BatchSetRecordSetsStatusRequestBody {
        this['status'] = status;
        return this;
    }
    public withRecordsetIds(recordsetIds: Array<string>): BatchSetRecordSetsStatusRequestBody {
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