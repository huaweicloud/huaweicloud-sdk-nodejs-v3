import { PublicipResp } from './PublicipResp';


export class BatchPublicipResp {
    public statusCode?: number;
    public publicip?: PublicipResp;
    public constructor(statusCode?: number, publicip?: PublicipResp) { 
        this['statusCode'] = statusCode;
        this['publicip'] = publicip;
    }
    public withStatusCode(statusCode: number): BatchPublicipResp {
        this['statusCode'] = statusCode;
        return this;
    }
    public withPublicip(publicip: PublicipResp): BatchPublicipResp {
        this['publicip'] = publicip;
        return this;
    }
}