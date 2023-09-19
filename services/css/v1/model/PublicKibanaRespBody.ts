import { KibanaElbWhiteListResp } from './KibanaElbWhiteListResp';


export class PublicKibanaRespBody {
    public eipSize?: number;
    public elbWhiteListResp?: KibanaElbWhiteListResp;
    public publicKibanaIp?: string;
    public constructor() { 
    }
    public withEipSize(eipSize: number): PublicKibanaRespBody {
        this['eipSize'] = eipSize;
        return this;
    }
    public withElbWhiteListResp(elbWhiteListResp: KibanaElbWhiteListResp): PublicKibanaRespBody {
        this['elbWhiteListResp'] = elbWhiteListResp;
        return this;
    }
    public withPublicKibanaIp(publicKibanaIp: string): PublicKibanaRespBody {
        this['publicKibanaIp'] = publicKibanaIp;
        return this;
    }
}