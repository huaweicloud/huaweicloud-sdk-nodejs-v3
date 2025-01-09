import { DeleteDesktopsReq } from './DeleteDesktopsReq';


export class BatchDeleteDesktopsRequest {
    public body?: DeleteDesktopsReq;
    public constructor() { 
    }
    public withBody(body: DeleteDesktopsReq): BatchDeleteDesktopsRequest {
        this['body'] = body;
        return this;
    }
}