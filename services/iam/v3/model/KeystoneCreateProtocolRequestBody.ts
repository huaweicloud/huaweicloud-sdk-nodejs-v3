import { ProtocolOption } from './ProtocolOption';


export class KeystoneCreateProtocolRequestBody {
    public protocol: ProtocolOption;
    public constructor(protocol: any) { 
        this['protocol'] = protocol;
    }
    public withProtocol(protocol: ProtocolOption): KeystoneCreateProtocolRequestBody {
        this['protocol'] = protocol;
        return this;
    }
}