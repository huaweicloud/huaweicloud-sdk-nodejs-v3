import { CreateVirtualInterfaceRequestBody } from './CreateVirtualInterfaceRequestBody';


export class CreateVirtualInterfaceRequest {
    public body?: CreateVirtualInterfaceRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVirtualInterfaceRequestBody): CreateVirtualInterfaceRequest {
        this['body'] = body;
        return this;
    }
}