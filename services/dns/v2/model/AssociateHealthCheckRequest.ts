import { AssociateHealthCheckReq } from './AssociateHealthCheckReq';


export class AssociateHealthCheckRequest {
    private 'recordset_id': string | undefined;
    public body?: AssociateHealthCheckReq;
    public constructor(recordsetId?: any) { 
        this['recordset_id'] = recordsetId;
    }
    public withRecordsetId(recordsetId: string): AssociateHealthCheckRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId() {
        return this['recordset_id'];
    }
    public withBody(body: AssociateHealthCheckReq): AssociateHealthCheckRequest {
        this['body'] = body;
        return this;
    }
}