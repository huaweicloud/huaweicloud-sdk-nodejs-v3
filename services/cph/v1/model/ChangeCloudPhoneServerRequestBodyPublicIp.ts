import { CreateNet2CloudPhoneServerRequestBodyPublicIpEip } from './CreateNet2CloudPhoneServerRequestBodyPublicIpEip';


export class ChangeCloudPhoneServerRequestBodyPublicIp {
    public ids?: Array<string>;
    public eip?: CreateNet2CloudPhoneServerRequestBodyPublicIpEip;
    public count?: number;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ChangeCloudPhoneServerRequestBodyPublicIp {
        this['ids'] = ids;
        return this;
    }
    public withEip(eip: CreateNet2CloudPhoneServerRequestBodyPublicIpEip): ChangeCloudPhoneServerRequestBodyPublicIp {
        this['eip'] = eip;
        return this;
    }
    public withCount(count: number): ChangeCloudPhoneServerRequestBodyPublicIp {
        this['count'] = count;
        return this;
    }
}