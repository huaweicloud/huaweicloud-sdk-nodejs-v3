import { AssociateDesktopsEipReq } from './AssociateDesktopsEipReq';


export class AssociateDesktopsEipRequest {
    public body?: AssociateDesktopsEipReq;
    public constructor() { 
    }
    public withBody(body: AssociateDesktopsEipReq): AssociateDesktopsEipRequest {
        this['body'] = body;
        return this;
    }
}