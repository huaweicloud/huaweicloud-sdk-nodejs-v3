import { SetRecordSetsStatusReq } from './SetRecordSetsStatusReq';


export class SetRecordSetsStatusRequest {
    private 'recordset_id': string | undefined;
    public body?: SetRecordSetsStatusReq;
    public constructor(recordsetId?: any) { 
        this['recordset_id'] = recordsetId;
    }
    public withRecordsetId(recordsetId: string): SetRecordSetsStatusRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId() {
        return this['recordset_id'];
    }
    public withBody(body: SetRecordSetsStatusReq): SetRecordSetsStatusRequest {
        this['body'] = body;
        return this;
    }
}