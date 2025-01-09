import { CreateTerminalsBindingDesktopsRequestBody } from './CreateTerminalsBindingDesktopsRequestBody';


export class CreateTerminalsBindingDesktopsRequest {
    public body?: CreateTerminalsBindingDesktopsRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTerminalsBindingDesktopsRequestBody): CreateTerminalsBindingDesktopsRequest {
        this['body'] = body;
        return this;
    }
}