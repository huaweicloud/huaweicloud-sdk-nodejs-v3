
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseUserResponse extends SdkResponse {
    public name?: string;
    public login?: boolean;
    public createrole?: boolean;
    public createdb?: boolean;
    public systemadmin?: boolean;
    public auditadmin?: boolean;
    public inherit?: boolean;
    public useft?: boolean;
    private 'conn_limit'?: number;
    public replication?: boolean;
    private 'valid_begin'?: number;
    private 'valid_until'?: number;
    public lock?: boolean;
    public desc?: string;
    private 'user_type'?: string;
    private 'logical_cluster'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowDatabaseUserResponse {
        this['name'] = name;
        return this;
    }
    public withLogin(login: boolean): ShowDatabaseUserResponse {
        this['login'] = login;
        return this;
    }
    public withCreaterole(createrole: boolean): ShowDatabaseUserResponse {
        this['createrole'] = createrole;
        return this;
    }
    public withCreatedb(createdb: boolean): ShowDatabaseUserResponse {
        this['createdb'] = createdb;
        return this;
    }
    public withSystemadmin(systemadmin: boolean): ShowDatabaseUserResponse {
        this['systemadmin'] = systemadmin;
        return this;
    }
    public withAuditadmin(auditadmin: boolean): ShowDatabaseUserResponse {
        this['auditadmin'] = auditadmin;
        return this;
    }
    public withInherit(inherit: boolean): ShowDatabaseUserResponse {
        this['inherit'] = inherit;
        return this;
    }
    public withUseft(useft: boolean): ShowDatabaseUserResponse {
        this['useft'] = useft;
        return this;
    }
    public withConnLimit(connLimit: number): ShowDatabaseUserResponse {
        this['conn_limit'] = connLimit;
        return this;
    }
    public set connLimit(connLimit: number  | undefined) {
        this['conn_limit'] = connLimit;
    }
    public get connLimit(): number | undefined {
        return this['conn_limit'];
    }
    public withReplication(replication: boolean): ShowDatabaseUserResponse {
        this['replication'] = replication;
        return this;
    }
    public withValidBegin(validBegin: number): ShowDatabaseUserResponse {
        this['valid_begin'] = validBegin;
        return this;
    }
    public set validBegin(validBegin: number  | undefined) {
        this['valid_begin'] = validBegin;
    }
    public get validBegin(): number | undefined {
        return this['valid_begin'];
    }
    public withValidUntil(validUntil: number): ShowDatabaseUserResponse {
        this['valid_until'] = validUntil;
        return this;
    }
    public set validUntil(validUntil: number  | undefined) {
        this['valid_until'] = validUntil;
    }
    public get validUntil(): number | undefined {
        return this['valid_until'];
    }
    public withLock(lock: boolean): ShowDatabaseUserResponse {
        this['lock'] = lock;
        return this;
    }
    public withDesc(desc: string): ShowDatabaseUserResponse {
        this['desc'] = desc;
        return this;
    }
    public withUserType(userType: string): ShowDatabaseUserResponse {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
    public withLogicalCluster(logicalCluster: string): ShowDatabaseUserResponse {
        this['logical_cluster'] = logicalCluster;
        return this;
    }
    public set logicalCluster(logicalCluster: string  | undefined) {
        this['logical_cluster'] = logicalCluster;
    }
    public get logicalCluster(): string | undefined {
        return this['logical_cluster'];
    }
}