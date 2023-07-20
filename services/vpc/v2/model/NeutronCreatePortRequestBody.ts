import { NeutronCreatePortOption } from './NeutronCreatePortOption';


export class NeutronCreatePortRequestBody {
    public port?: NeutronCreatePortOption;
    public constructor(port?: NeutronCreatePortOption) { 
        this['port'] = port;
    }
    public withPort(port: NeutronCreatePortOption): NeutronCreatePortRequestBody {
        this['port'] = port;
        return this;
    }
}