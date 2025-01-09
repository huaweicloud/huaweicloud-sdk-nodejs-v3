import { DeleteTerminalsBindingDesktopsRequestBody } from './DeleteTerminalsBindingDesktopsRequestBody';


export class DeleteTerminalsBindingDesktopsRequest {
    public body?: DeleteTerminalsBindingDesktopsRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteTerminalsBindingDesktopsRequestBody): DeleteTerminalsBindingDesktopsRequest {
        this['body'] = body;
        return this;
    }
}