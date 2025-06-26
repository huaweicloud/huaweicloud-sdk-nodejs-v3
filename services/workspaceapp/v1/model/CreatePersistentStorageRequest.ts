import { CreatePersistentStorageReq } from './CreatePersistentStorageReq';


export class CreatePersistentStorageRequest {
    public body?: CreatePersistentStorageReq;
    public constructor() { 
    }
    public withBody(body: CreatePersistentStorageReq): CreatePersistentStorageRequest {
        this['body'] = body;
        return this;
    }
}