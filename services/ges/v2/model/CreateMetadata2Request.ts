import { CreateMetadataReq } from './CreateMetadataReq';


export class CreateMetadata2Request {
    public body?: CreateMetadataReq;
    public constructor() { 
    }
    public withBody(body: CreateMetadataReq): CreateMetadata2Request {
        this['body'] = body;
        return this;
    }
}