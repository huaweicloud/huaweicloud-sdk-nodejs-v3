import { UpdateServerOption } from './UpdateServerOption';


export class UpdateServerRequestBody {
    public server?: UpdateServerOption;
    public constructor(server?: UpdateServerOption) { 
        this['server'] = server;
    }
    public withServer(server: UpdateServerOption): UpdateServerRequestBody {
        this['server'] = server;
        return this;
    }
}