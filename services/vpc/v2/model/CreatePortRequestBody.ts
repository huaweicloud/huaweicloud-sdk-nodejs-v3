import { CreatePortOption } from './CreatePortOption';


export class CreatePortRequestBody {
    public port: CreatePortOption;
    public constructor(port?: any) { 
        this['port'] = port;
    }
    public withPort(port: CreatePortOption): CreatePortRequestBody {
        this['port'] = port;
        return this;
    }
}