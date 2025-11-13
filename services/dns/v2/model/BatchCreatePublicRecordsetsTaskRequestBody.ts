import { BatchCreatePublicRecordsetsTaskItem } from './BatchCreatePublicRecordsetsTaskItem';


export class BatchCreatePublicRecordsetsTaskRequestBody {
    public recordsets?: Array<BatchCreatePublicRecordsetsTaskItem>;
    public constructor(recordsets?: Array<BatchCreatePublicRecordsetsTaskItem>) { 
        this['recordsets'] = recordsets;
    }
    public withRecordsets(recordsets: Array<BatchCreatePublicRecordsetsTaskItem>): BatchCreatePublicRecordsetsTaskRequestBody {
        this['recordsets'] = recordsets;
        return this;
    }
}