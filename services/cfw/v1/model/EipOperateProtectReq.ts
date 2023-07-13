import { EipOperateProtectReqIpInfos } from './EipOperateProtectReqIpInfos';


export class EipOperateProtectReq {
    private 'object_id': string | undefined;
    public status: number;
    private 'ip_infos': Array<EipOperateProtectReqIpInfos> | undefined;
    public constructor(objectId?: any, status?: any, ipInfos?: any) { 
        this['object_id'] = objectId;
        this['status'] = status;
        this['ip_infos'] = ipInfos;
    }
    public withObjectId(objectId: string): EipOperateProtectReq {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withStatus(status: number): EipOperateProtectReq {
        this['status'] = status;
        return this;
    }
    public withIpInfos(ipInfos: Array<EipOperateProtectReqIpInfos>): EipOperateProtectReq {
        this['ip_infos'] = ipInfos;
        return this;
    }
    public set ipInfos(ipInfos: Array<EipOperateProtectReqIpInfos> | undefined) {
        this['ip_infos'] = ipInfos;
    }
    public get ipInfos() {
        return this['ip_infos'];
    }
}