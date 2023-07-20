import { EipOperateProtectReqIpInfos } from './EipOperateProtectReqIpInfos';


export class EipOperateProtectReq {
    private 'object_id'?: string;
    public status?: number;
    private 'ip_infos'?: Array<EipOperateProtectReqIpInfos>;
    public constructor(objectId?: string, status?: number, ipInfos?: Array<EipOperateProtectReqIpInfos>) { 
        this['object_id'] = objectId;
        this['status'] = status;
        this['ip_infos'] = ipInfos;
    }
    public withObjectId(objectId: string): EipOperateProtectReq {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
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
    public set ipInfos(ipInfos: Array<EipOperateProtectReqIpInfos>  | undefined) {
        this['ip_infos'] = ipInfos;
    }
    public get ipInfos(): Array<EipOperateProtectReqIpInfos> | undefined {
        return this['ip_infos'];
    }
}