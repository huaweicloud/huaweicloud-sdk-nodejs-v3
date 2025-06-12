import { UpdateRecycleBinReq } from './UpdateRecycleBinReq';


export class UpdateRecycleBinRequest {
    public body?: UpdateRecycleBinReq;
    public constructor() { 
    }
    public withBody(body: UpdateRecycleBinReq): UpdateRecycleBinRequest {
        this['body'] = body;
        return this;
    }
}