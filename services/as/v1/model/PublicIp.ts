import { EipInfo } from './EipInfo';


export class PublicIp {
    public eip?: EipInfo;
    public constructor(eip?: EipInfo) { 
        this['eip'] = eip;
    }
    public withEip(eip: EipInfo): PublicIp {
        this['eip'] = eip;
        return this;
    }
}