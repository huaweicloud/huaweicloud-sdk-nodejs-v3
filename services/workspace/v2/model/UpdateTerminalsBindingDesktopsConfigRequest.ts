import { TerminalsBindingDesktopsConfig } from './TerminalsBindingDesktopsConfig';


export class UpdateTerminalsBindingDesktopsConfigRequest {
    public body?: TerminalsBindingDesktopsConfig;
    public constructor() { 
    }
    public withBody(body: TerminalsBindingDesktopsConfig): UpdateTerminalsBindingDesktopsConfigRequest {
        this['body'] = body;
        return this;
    }
}