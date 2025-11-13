import { BatchCreateRecordSetsTaskItem } from './BatchCreateRecordSetsTaskItem';


export class BatchCreateRecordSetsTaskRequestBody {
    public recordsets?: Array<BatchCreateRecordSetsTaskItem>;
    public constructor(recordsets?: Array<BatchCreateRecordSetsTaskItem>) { 
        this['recordsets'] = recordsets;
    }
    public withRecordsets(recordsets: Array<BatchCreateRecordSetsTaskItem>): BatchCreateRecordSetsTaskRequestBody {
        this['recordsets'] = recordsets;
        return this;
    }
}