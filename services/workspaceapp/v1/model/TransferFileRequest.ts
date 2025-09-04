import { TransferFileReq } from './TransferFileReq';


export class TransferFileRequest {
    public body?: TransferFileReq;
    public constructor() { 
    }
    public withBody(body: TransferFileReq): TransferFileRequest {
        this['body'] = body;
        return this;
    }
}