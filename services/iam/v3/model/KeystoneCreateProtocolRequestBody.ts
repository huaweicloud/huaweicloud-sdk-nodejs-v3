import { ProtocolOption } from './ProtocolOption';


export class KeystoneCreateProtocolRequestBody {
    public protocol?: ProtocolOption;
    public constructor(protocol?: ProtocolOption) { 
        this['protocol'] = protocol;
    }
    public withProtocol(protocol: ProtocolOption): KeystoneCreateProtocolRequestBody {
        this['protocol'] = protocol;
        return this;
    }
}