

export class HealthReportInstanceInfo {
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'master_node_id'?: string;
    private 'instance_name'?: string;
    public cpu?: number;
    public mem?: number;
    private 'disk_size'?: number;
    private 'disk_type'?: string;
    public engine?: string;
    private 'engine_version'?: string;
    public constructor(tenantId?: string, projectId?: string, instanceId?: string, masterNodeId?: string, instanceName?: string, cpu?: number, mem?: number, diskSize?: number, diskType?: string, engine?: string, engineVersion?: string) { 
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['instance_id'] = instanceId;
        this['master_node_id'] = masterNodeId;
        this['instance_name'] = instanceName;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['disk_size'] = diskSize;
        this['disk_type'] = diskType;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
    }
    public withTenantId(tenantId: string): HealthReportInstanceInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): HealthReportInstanceInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): HealthReportInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMasterNodeId(masterNodeId: string): HealthReportInstanceInfo {
        this['master_node_id'] = masterNodeId;
        return this;
    }
    public set masterNodeId(masterNodeId: string  | undefined) {
        this['master_node_id'] = masterNodeId;
    }
    public get masterNodeId(): string | undefined {
        return this['master_node_id'];
    }
    public withInstanceName(instanceName: string): HealthReportInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withCpu(cpu: number): HealthReportInstanceInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: number): HealthReportInstanceInfo {
        this['mem'] = mem;
        return this;
    }
    public withDiskSize(diskSize: number): HealthReportInstanceInfo {
        this['disk_size'] = diskSize;
        return this;
    }
    public set diskSize(diskSize: number  | undefined) {
        this['disk_size'] = diskSize;
    }
    public get diskSize(): number | undefined {
        return this['disk_size'];
    }
    public withDiskType(diskType: string): HealthReportInstanceInfo {
        this['disk_type'] = diskType;
        return this;
    }
    public set diskType(diskType: string  | undefined) {
        this['disk_type'] = diskType;
    }
    public get diskType(): string | undefined {
        return this['disk_type'];
    }
    public withEngine(engine: string): HealthReportInstanceInfo {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): HealthReportInstanceInfo {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
}