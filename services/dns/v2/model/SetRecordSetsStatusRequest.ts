import { SetRecordSetsStatusRequestBody } from './SetRecordSetsStatusRequestBody';


export class SetRecordSetsStatusRequest {
    private 'recordset_id'?: string;
    public body?: SetRecordSetsStatusRequestBody;
    public constructor(recordsetId?: string) { 
        this['recordset_id'] = recordsetId;
    }
    public withRecordsetId(recordsetId: string): SetRecordSetsStatusRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string  | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId(): string | undefined {
        return this['recordset_id'];
    }
    public withBody(body: SetRecordSetsStatusRequestBody): SetRecordSetsStatusRequest {
        this['body'] = body;
        return this;
    }
}