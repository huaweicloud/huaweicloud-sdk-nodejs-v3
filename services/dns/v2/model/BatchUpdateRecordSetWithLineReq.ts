import { BatchUpdateRecordSet } from './BatchUpdateRecordSet';


export class BatchUpdateRecordSetWithLineReq {
    public recordsets?: Array<BatchUpdateRecordSet>;
    public constructor(recordsets?: Array<BatchUpdateRecordSet>) { 
        this['recordsets'] = recordsets;
    }
    public withRecordsets(recordsets: Array<BatchUpdateRecordSet>): BatchUpdateRecordSetWithLineReq {
        this['recordsets'] = recordsets;
        return this;
    }
}