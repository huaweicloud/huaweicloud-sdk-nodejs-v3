import { BatchUpdateRecordSet } from './BatchUpdateRecordSet';


export class BatchUpdateRecordSetWithLineRequestBody {
    public recordsets?: Array<BatchUpdateRecordSet>;
    public constructor(recordsets?: Array<BatchUpdateRecordSet>) { 
        this['recordsets'] = recordsets;
    }
    public withRecordsets(recordsets: Array<BatchUpdateRecordSet>): BatchUpdateRecordSetWithLineRequestBody {
        this['recordsets'] = recordsets;
        return this;
    }
}