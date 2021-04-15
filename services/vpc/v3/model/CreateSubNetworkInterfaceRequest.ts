import { CreateSubNetworkInterfaceRequestBody } from './CreateSubNetworkInterfaceRequestBody';


export class CreateSubNetworkInterfaceRequest {
    public body?: CreateSubNetworkInterfaceRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSubNetworkInterfaceRequestBody): CreateSubNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}