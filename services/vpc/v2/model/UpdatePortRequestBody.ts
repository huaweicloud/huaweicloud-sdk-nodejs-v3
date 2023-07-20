import { UpdatePortOption } from './UpdatePortOption';


export class UpdatePortRequestBody {
    public port?: UpdatePortOption;
    public constructor(port?: UpdatePortOption) { 
        this['port'] = port;
    }
    public withPort(port: UpdatePortOption): UpdatePortRequestBody {
        this['port'] = port;
        return this;
    }
}