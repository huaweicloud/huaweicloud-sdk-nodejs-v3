import { ServerNics } from './ServerNics';


export class DeleteServerNicsReq {
    public nics?: Array<ServerNics>;
    public constructor(nics?: Array<ServerNics>) { 
        this['nics'] = nics;
    }
    public withNics(nics: Array<ServerNics>): DeleteServerNicsReq {
        this['nics'] = nics;
        return this;
    }
}