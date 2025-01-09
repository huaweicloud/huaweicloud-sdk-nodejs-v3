import { BatchDisassociateDesktopsEipReq } from './BatchDisassociateDesktopsEipReq';


export class BatchDisassociateDesktopsEipRequest {
    public body?: BatchDisassociateDesktopsEipReq;
    public constructor() { 
    }
    public withBody(body: BatchDisassociateDesktopsEipReq): BatchDisassociateDesktopsEipRequest {
        this['body'] = body;
        return this;
    }
}