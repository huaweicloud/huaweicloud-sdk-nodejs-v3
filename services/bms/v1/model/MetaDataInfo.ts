

export class MetaDataInfo {
    private 'op_svc_userid'?: string;
    private 'admin_pass'?: string;
    private 'BYOL'?: string;
    private 'agency_name'?: string;
    public constructor(opSvcUserid?: string) { 
        this['op_svc_userid'] = opSvcUserid;
    }
    public withOpSvcUserid(opSvcUserid: string): MetaDataInfo {
        this['op_svc_userid'] = opSvcUserid;
        return this;
    }
    public set opSvcUserid(opSvcUserid: string  | undefined) {
        this['op_svc_userid'] = opSvcUserid;
    }
    public get opSvcUserid(): string | undefined {
        return this['op_svc_userid'];
    }
    public withAdminPass(adminPass: string): MetaDataInfo {
        this['admin_pass'] = adminPass;
        return this;
    }
    public set adminPass(adminPass: string  | undefined) {
        this['admin_pass'] = adminPass;
    }
    public get adminPass(): string | undefined {
        return this['admin_pass'];
    }
    public withByol(byol: string): MetaDataInfo {
        this['BYOL'] = byol;
        return this;
    }
    public set byol(byol: string  | undefined) {
        this['BYOL'] = byol;
    }
    public get byol(): string | undefined {
        return this['BYOL'];
    }
    public withAgencyName(agencyName: string): MetaDataInfo {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}