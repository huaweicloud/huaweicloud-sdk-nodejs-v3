import { CreateDatasourceConnectionRequestBody } from './CreateDatasourceConnectionRequestBody';


export class CreateDatasourceConnectionRequest {
    public body?: CreateDatasourceConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDatasourceConnectionRequestBody): CreateDatasourceConnectionRequest {
        this['body'] = body;
        return this;
    }
}