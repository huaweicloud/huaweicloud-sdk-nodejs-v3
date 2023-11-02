

export class ExportInstancesTaskBody {
    private 'included_instances'?: Array<string>;
    public region?: string;
    public name?: string;
    public capacity?: string;
    private 'instance_id'?: string;
    public ip?: string;
    private 'available_zone'?: string;
    public status?: string;
    private 'product_type'?: ExportInstancesTaskBodyProductTypeEnum | string;
    private 'cache_mode'?: string;
    public engine?: string;
    private 'engine_version'?: string;
    private 'cpu_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'charging_mode'?: string;
    public tags?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withIncludedInstances(includedInstances: Array<string>): ExportInstancesTaskBody {
        this['included_instances'] = includedInstances;
        return this;
    }
    public set includedInstances(includedInstances: Array<string>  | undefined) {
        this['included_instances'] = includedInstances;
    }
    public get includedInstances(): Array<string> | undefined {
        return this['included_instances'];
    }
    public withRegion(region: string): ExportInstancesTaskBody {
        this['region'] = region;
        return this;
    }
    public withName(name: string): ExportInstancesTaskBody {
        this['name'] = name;
        return this;
    }
    public withCapacity(capacity: string): ExportInstancesTaskBody {
        this['capacity'] = capacity;
        return this;
    }
    public withInstanceId(instanceId: string): ExportInstancesTaskBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): ExportInstancesTaskBody {
        this['ip'] = ip;
        return this;
    }
    public withAvailableZone(availableZone: string): ExportInstancesTaskBody {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
    public withStatus(status: string): ExportInstancesTaskBody {
        this['status'] = status;
        return this;
    }
    public withProductType(productType: ExportInstancesTaskBodyProductTypeEnum | string): ExportInstancesTaskBody {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: ExportInstancesTaskBodyProductTypeEnum | string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): ExportInstancesTaskBodyProductTypeEnum | string | undefined {
        return this['product_type'];
    }
    public withCacheMode(cacheMode: string): ExportInstancesTaskBody {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string  | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode(): string | undefined {
        return this['cache_mode'];
    }
    public withEngine(engine: string): ExportInstancesTaskBody {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ExportInstancesTaskBody {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withCpuType(cpuType: string): ExportInstancesTaskBody {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: string  | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType(): string | undefined {
        return this['cpu_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportInstancesTaskBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withChargingMode(chargingMode: string): ExportInstancesTaskBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withTags(tags: string): ExportInstancesTaskBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportInstancesTaskBodyProductTypeEnum {
    GENERIC = 'generic',
    ENTERPRISE = 'enterprise'
}
