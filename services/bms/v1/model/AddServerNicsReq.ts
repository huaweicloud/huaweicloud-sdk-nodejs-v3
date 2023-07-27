import { ServerNicsReq } from './ServerNicsReq';


export class AddServerNicsReq {
    public nics?: Array<ServerNicsReq>;
    public constructor(nics?: Array<ServerNicsReq>) { 
        this['nics'] = nics;
    }
    public withNics(nics: Array<ServerNicsReq>): AddServerNicsReq {
        this['nics'] = nics;
        return this;
    }
}