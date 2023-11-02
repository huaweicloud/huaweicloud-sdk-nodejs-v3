

export class DataBase {
    public id?: string;
    public name?: string;
    public type?: string;
    public version?: string;
    public charset?: string;
    public ip?: string;
    public port?: string;
    public os?: string;
    public status?: string;
    private 'instance_name'?: string;
    private 'audit_status'?: string;
    private 'agent_url'?: Array<string>;
    private 'db_classification'?: string;
    public constructor(name?: string, type?: string, version?: string, charset?: string, ip?: string, port?: string, os?: string, instanceName?: string, dbClassification?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['version'] = version;
        this['charset'] = charset;
        this['ip'] = ip;
        this['port'] = port;
        this['os'] = os;
        this['instance_name'] = instanceName;
        this['db_classification'] = dbClassification;
    }
    public withId(id: string): DataBase {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DataBase {
        this['name'] = name;
        return this;
    }
    public withType(type: string): DataBase {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DataBase {
        this['version'] = version;
        return this;
    }
    public withCharset(charset: string): DataBase {
        this['charset'] = charset;
        return this;
    }
    public withIp(ip: string): DataBase {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: string): DataBase {
        this['port'] = port;
        return this;
    }
    public withOs(os: string): DataBase {
        this['os'] = os;
        return this;
    }
    public withStatus(status: string): DataBase {
        this['status'] = status;
        return this;
    }
    public withInstanceName(instanceName: string): DataBase {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withAuditStatus(auditStatus: string): DataBase {
        this['audit_status'] = auditStatus;
        return this;
    }
    public set auditStatus(auditStatus: string  | undefined) {
        this['audit_status'] = auditStatus;
    }
    public get auditStatus(): string | undefined {
        return this['audit_status'];
    }
    public withAgentUrl(agentUrl: Array<string>): DataBase {
        this['agent_url'] = agentUrl;
        return this;
    }
    public set agentUrl(agentUrl: Array<string>  | undefined) {
        this['agent_url'] = agentUrl;
    }
    public get agentUrl(): Array<string> | undefined {
        return this['agent_url'];
    }
    public withDbClassification(dbClassification: string): DataBase {
        this['db_classification'] = dbClassification;
        return this;
    }
    public set dbClassification(dbClassification: string  | undefined) {
        this['db_classification'] = dbClassification;
    }
    public get dbClassification(): string | undefined {
        return this['db_classification'];
    }
}