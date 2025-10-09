import { CreateVirtualMfaDeviceReqBody } from './CreateVirtualMfaDeviceReqBody';


export class CreateVirtualMfaDeviceV5Request {
    public body?: CreateVirtualMfaDeviceReqBody;
    public constructor() { 
    }
    public withBody(body: CreateVirtualMfaDeviceReqBody): CreateVirtualMfaDeviceV5Request {
        this['body'] = body;
        return this;
    }
}