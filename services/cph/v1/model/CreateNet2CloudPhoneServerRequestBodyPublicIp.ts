import { CreateNet2CloudPhoneServerRequestBodyPublicIpEip } from './CreateNet2CloudPhoneServerRequestBodyPublicIpEip';


export class CreateNet2CloudPhoneServerRequestBodyPublicIp {
    public ids?: Array<string>;
    public eip?: CreateNet2CloudPhoneServerRequestBodyPublicIpEip;
    public count?: number;
    public constructor() { 
    }
    public withIds(ids: Array<string>): CreateNet2CloudPhoneServerRequestBodyPublicIp {
        this['ids'] = ids;
        return this;
    }
    public withEip(eip: CreateNet2CloudPhoneServerRequestBodyPublicIpEip): CreateNet2CloudPhoneServerRequestBodyPublicIp {
        this['eip'] = eip;
        return this;
    }
    public withCount(count: number): CreateNet2CloudPhoneServerRequestBodyPublicIp {
        this['count'] = count;
        return this;
    }
}