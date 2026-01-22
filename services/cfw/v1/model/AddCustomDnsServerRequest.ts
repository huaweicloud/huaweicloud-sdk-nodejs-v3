

export class AddCustomDnsServerRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'server_ip'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, serverIp?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['server_ip'] = serverIp;
    }
    public withProjectId(projectId: string): AddCustomDnsServerRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): AddCustomDnsServerRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withServerIp(serverIp: string): AddCustomDnsServerRequest {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
}