

export class DatabaseUserInfoReq {
    public login?: boolean;
    public createrole?: boolean;
    public createdb?: boolean;
    public systemadmin?: boolean;
    public auditadmin?: boolean;
    public inherit?: boolean;
    public useft?: boolean;
    private 'conn_limit'?: number;
    public replication?: boolean;
    private 'valid_begin'?: string;
    private 'valid_until'?: string;
    public lock?: boolean;
    public constructor() { 
    }
    public withLogin(login: boolean): DatabaseUserInfoReq {
        this['login'] = login;
        return this;
    }
    public withCreaterole(createrole: boolean): DatabaseUserInfoReq {
        this['createrole'] = createrole;
        return this;
    }
    public withCreatedb(createdb: boolean): DatabaseUserInfoReq {
        this['createdb'] = createdb;
        return this;
    }
    public withSystemadmin(systemadmin: boolean): DatabaseUserInfoReq {
        this['systemadmin'] = systemadmin;
        return this;
    }
    public withAuditadmin(auditadmin: boolean): DatabaseUserInfoReq {
        this['auditadmin'] = auditadmin;
        return this;
    }
    public withInherit(inherit: boolean): DatabaseUserInfoReq {
        this['inherit'] = inherit;
        return this;
    }
    public withUseft(useft: boolean): DatabaseUserInfoReq {
        this['useft'] = useft;
        return this;
    }
    public withConnLimit(connLimit: number): DatabaseUserInfoReq {
        this['conn_limit'] = connLimit;
        return this;
    }
    public set connLimit(connLimit: number  | undefined) {
        this['conn_limit'] = connLimit;
    }
    public get connLimit(): number | undefined {
        return this['conn_limit'];
    }
    public withReplication(replication: boolean): DatabaseUserInfoReq {
        this['replication'] = replication;
        return this;
    }
    public withValidBegin(validBegin: string): DatabaseUserInfoReq {
        this['valid_begin'] = validBegin;
        return this;
    }
    public set validBegin(validBegin: string  | undefined) {
        this['valid_begin'] = validBegin;
    }
    public get validBegin(): string | undefined {
        return this['valid_begin'];
    }
    public withValidUntil(validUntil: string): DatabaseUserInfoReq {
        this['valid_until'] = validUntil;
        return this;
    }
    public set validUntil(validUntil: string  | undefined) {
        this['valid_until'] = validUntil;
    }
    public get validUntil(): string | undefined {
        return this['valid_until'];
    }
    public withLock(lock: boolean): DatabaseUserInfoReq {
        this['lock'] = lock;
        return this;
    }
}