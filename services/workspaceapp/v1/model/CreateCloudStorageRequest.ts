import { CreateCloudStorageReq } from './CreateCloudStorageReq';


export class CreateCloudStorageRequest {
    public body?: CreateCloudStorageReq;
    public constructor() { 
    }
    public withBody(body: CreateCloudStorageReq): CreateCloudStorageRequest {
        this['body'] = body;
        return this;
    }
}