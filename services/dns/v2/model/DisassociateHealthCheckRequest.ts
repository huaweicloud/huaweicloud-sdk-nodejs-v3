import { AssociateHealthCheckReq } from './AssociateHealthCheckReq';


export class DisassociateHealthCheckRequest {
    private 'recordset_id'?: string;
    public body?: AssociateHealthCheckReq;
    public constructor(recordsetId?: string) { 
        this['recordset_id'] = recordsetId;
    }
    public withRecordsetId(recordsetId: string): DisassociateHealthCheckRequest {
        this['recordset_id'] = recordsetId;
        return this;
    }
    public set recordsetId(recordsetId: string  | undefined) {
        this['recordset_id'] = recordsetId;
    }
    public get recordsetId(): string | undefined {
        return this['recordset_id'];
    }
    public withBody(body: AssociateHealthCheckReq): DisassociateHealthCheckRequest {
        this['body'] = body;
        return this;
    }
}