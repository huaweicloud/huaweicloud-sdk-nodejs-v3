import { ProtocolOption } from './ProtocolOption';


export class KeystoneUpdateProtocolRequestBody {
    public protocol: ProtocolOption;
    public constructor(protocol?: any) { 
        this['protocol'] = protocol;
    }
    public withProtocol(protocol: ProtocolOption): KeystoneUpdateProtocolRequestBody {
        this['protocol'] = protocol;
        return this;
    }
}