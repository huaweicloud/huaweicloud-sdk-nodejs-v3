

export class MigrationErrors {
    private 'error_json'?: string;
    private 'host_name'?: string;
    public name?: string;
    private 'source_id'?: string;
    private 'source_ip'?: string;
    private 'target_ip'?: string;
    public constructor() { 
    }
    public withErrorJson(errorJson: string): MigrationErrors {
        this['error_json'] = errorJson;
        return this;
    }
    public set errorJson(errorJson: string  | undefined) {
        this['error_json'] = errorJson;
    }
    public get errorJson(): string | undefined {
        return this['error_json'];
    }
    public withHostName(hostName: string): MigrationErrors {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withName(name: string): MigrationErrors {
        this['name'] = name;
        return this;
    }
    public withSourceId(sourceId: string): MigrationErrors {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceIp(sourceIp: string): MigrationErrors {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withTargetIp(targetIp: string): MigrationErrors {
        this['target_ip'] = targetIp;
        return this;
    }
    public set targetIp(targetIp: string  | undefined) {
        this['target_ip'] = targetIp;
    }
    public get targetIp(): string | undefined {
        return this['target_ip'];
    }
}