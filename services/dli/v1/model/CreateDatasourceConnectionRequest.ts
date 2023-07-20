import { CreateDatasourceConnectionReq } from './CreateDatasourceConnectionReq';


export class CreateDatasourceConnectionRequest {
    public body?: CreateDatasourceConnectionReq;
    public constructor() { 
    }
    public withBody(body: CreateDatasourceConnectionReq): CreateDatasourceConnectionRequest {
        this['body'] = body;
        return this;
    }
}