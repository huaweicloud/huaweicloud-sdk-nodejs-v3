import { V2CreateClusterReq } from './V2CreateClusterReq';


export class CreateClusterV2Request {
    public body?: V2CreateClusterReq;
    public constructor() { 
    }
    public withBody(body: V2CreateClusterReq): CreateClusterV2Request {
        this['body'] = body;
        return this;
    }
}