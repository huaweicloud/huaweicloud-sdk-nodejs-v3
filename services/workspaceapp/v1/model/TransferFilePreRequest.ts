import { TransferFilePreReq } from './TransferFilePreReq';


export class TransferFilePreRequest {
    public body?: TransferFilePreReq;
    public constructor() { 
    }
    public withBody(body: TransferFilePreReq): TransferFilePreRequest {
        this['body'] = body;
        return this;
    }
}