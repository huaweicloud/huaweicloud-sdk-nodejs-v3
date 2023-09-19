import { CreateClusterPublicKibanaElbWhiteList } from './CreateClusterPublicKibanaElbWhiteList';


export class CreateClusterPublicKibanaReq {
    public eipSize?: number;
    public elbWhiteList?: CreateClusterPublicKibanaElbWhiteList;
    public constructor(eipSize?: number, elbWhiteList?: CreateClusterPublicKibanaElbWhiteList) { 
        this['eipSize'] = eipSize;
        this['elbWhiteList'] = elbWhiteList;
    }
    public withEipSize(eipSize: number): CreateClusterPublicKibanaReq {
        this['eipSize'] = eipSize;
        return this;
    }
    public withElbWhiteList(elbWhiteList: CreateClusterPublicKibanaElbWhiteList): CreateClusterPublicKibanaReq {
        this['elbWhiteList'] = elbWhiteList;
        return this;
    }
}