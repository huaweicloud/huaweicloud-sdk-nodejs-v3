import { CreateFullSqlBucketRequestBody } from './CreateFullSqlBucketRequestBody';


export class CreateFullSqlBucketRequest {
    public body?: CreateFullSqlBucketRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFullSqlBucketRequestBody): CreateFullSqlBucketRequest {
        this['body'] = body;
        return this;
    }
}