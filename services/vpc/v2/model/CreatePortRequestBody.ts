import { CreatePortOption } from './CreatePortOption';


export class CreatePortRequestBody {
    public port?: CreatePortOption;
    public constructor(port?: CreatePortOption) { 
        this['port'] = port;
    }
    public withPort(port: CreatePortOption): CreatePortRequestBody {
        this['port'] = port;
        return this;
    }
}