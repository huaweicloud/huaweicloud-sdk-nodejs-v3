import { CreateMfaDeviceReq } from './CreateMfaDeviceReq';


export class CreateMfaDeviceRequest {
    public body?: CreateMfaDeviceReq;
    public constructor() { 
    }
    public withBody(body: CreateMfaDeviceReq): CreateMfaDeviceRequest {
        this['body'] = body;
        return this;
    }
}