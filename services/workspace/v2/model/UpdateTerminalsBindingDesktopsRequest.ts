import { UpdateTerminalsBindingDesktopsRequestBody } from './UpdateTerminalsBindingDesktopsRequestBody';


export class UpdateTerminalsBindingDesktopsRequest {
    public body?: UpdateTerminalsBindingDesktopsRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateTerminalsBindingDesktopsRequestBody): UpdateTerminalsBindingDesktopsRequest {
        this['body'] = body;
        return this;
    }
}