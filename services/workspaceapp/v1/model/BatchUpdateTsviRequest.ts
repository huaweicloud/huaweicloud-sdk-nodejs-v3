import { UpdateTsviReq } from './UpdateTsviReq';


export class BatchUpdateTsviRequest {
    public body?: UpdateTsviReq;
    public constructor() { 
    }
    public withBody(body: UpdateTsviReq): BatchUpdateTsviRequest {
        this['body'] = body;
        return this;
    }
}