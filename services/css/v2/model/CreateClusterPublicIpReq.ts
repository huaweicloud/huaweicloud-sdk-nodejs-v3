import { CreateClusterElbWhiteList } from './CreateClusterElbWhiteList';
import { CreateClusterPublicEip } from './CreateClusterPublicEip';


export class CreateClusterPublicIpReq {
    public eip?: CreateClusterPublicEip;
    public elbWhiteListReq?: CreateClusterElbWhiteList;
    public publicBindType?: string;
    public eipId?: string;
    public constructor(eip?: CreateClusterPublicEip, elbWhiteListReq?: CreateClusterElbWhiteList, publicBindType?: string) { 
        this['eip'] = eip;
        this['elbWhiteListReq'] = elbWhiteListReq;
        this['publicBindType'] = publicBindType;
    }
    public withEip(eip: CreateClusterPublicEip): CreateClusterPublicIpReq {
        this['eip'] = eip;
        return this;
    }
    public withElbWhiteListReq(elbWhiteListReq: CreateClusterElbWhiteList): CreateClusterPublicIpReq {
        this['elbWhiteListReq'] = elbWhiteListReq;
        return this;
    }
    public withPublicBindType(publicBindType: string): CreateClusterPublicIpReq {
        this['publicBindType'] = publicBindType;
        return this;
    }
    public withEipId(eipId: string): CreateClusterPublicIpReq {
        this['eipId'] = eipId;
        return this;
    }
}