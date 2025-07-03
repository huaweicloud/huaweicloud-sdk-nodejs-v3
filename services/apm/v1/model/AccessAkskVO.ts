

export class AccessAkskVO {
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    private 'inner_domain_id'?: number;
    public ak?: string;
    public sk?: string;
    public status?: string;
    public descp?: string;
    private 'gmt_create_timestamp'?: number;
    private 'gmt_modify_timestamp'?: number;
    public constructor() { 
    }
    public withId(id: number): AccessAkskVO {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): AccessAkskVO {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): AccessAkskVO {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withInnerDomainId(innerDomainId: number): AccessAkskVO {
        this['inner_domain_id'] = innerDomainId;
        return this;
    }
    public set innerDomainId(innerDomainId: number  | undefined) {
        this['inner_domain_id'] = innerDomainId;
    }
    public get innerDomainId(): number | undefined {
        return this['inner_domain_id'];
    }
    public withAk(ak: string): AccessAkskVO {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): AccessAkskVO {
        this['sk'] = sk;
        return this;
    }
    public withStatus(status: string): AccessAkskVO {
        this['status'] = status;
        return this;
    }
    public withDescp(descp: string): AccessAkskVO {
        this['descp'] = descp;
        return this;
    }
    public withGmtCreateTimestamp(gmtCreateTimestamp: number): AccessAkskVO {
        this['gmt_create_timestamp'] = gmtCreateTimestamp;
        return this;
    }
    public set gmtCreateTimestamp(gmtCreateTimestamp: number  | undefined) {
        this['gmt_create_timestamp'] = gmtCreateTimestamp;
    }
    public get gmtCreateTimestamp(): number | undefined {
        return this['gmt_create_timestamp'];
    }
    public withGmtModifyTimestamp(gmtModifyTimestamp: number): AccessAkskVO {
        this['gmt_modify_timestamp'] = gmtModifyTimestamp;
        return this;
    }
    public set gmtModifyTimestamp(gmtModifyTimestamp: number  | undefined) {
        this['gmt_modify_timestamp'] = gmtModifyTimestamp;
    }
    public get gmtModifyTimestamp(): number | undefined {
        return this['gmt_modify_timestamp'];
    }
}