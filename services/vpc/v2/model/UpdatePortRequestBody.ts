import { UpdatePortOption } from './UpdatePortOption';


export class UpdatePortRequestBody {
    public port: UpdatePortOption;
    public constructor(port?: any) { 
        this['port'] = port;
    }
    public withPort(port: UpdatePortOption): UpdatePortRequestBody {
        this['port'] = port;
        return this;
    }
}