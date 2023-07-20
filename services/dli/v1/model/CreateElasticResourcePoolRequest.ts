import { CreateElasticResourcePoolRequestBody } from './CreateElasticResourcePoolRequestBody';


export class CreateElasticResourcePoolRequest {
    public body?: CreateElasticResourcePoolRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateElasticResourcePoolRequestBody): CreateElasticResourcePoolRequest {
        this['body'] = body;
        return this;
    }
}