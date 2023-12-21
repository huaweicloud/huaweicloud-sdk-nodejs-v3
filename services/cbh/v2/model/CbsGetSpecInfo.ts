

export class CbsGetSpecInfo {
    private 'resource_spec_code'?: string;
    private 'ecs_system_data_size'?: number;
    public cpu?: number;
    public ram?: number;
    public asset?: number;
    public connection?: number;
    public type?: string;
    private 'data_disk_size'?: number;
    public constructor(resourceSpecCode?: string, ecsSystemDataSize?: number, cpu?: number, ram?: number, asset?: number, connection?: number, type?: string, dataDiskSize?: number) { 
        this['resource_spec_code'] = resourceSpecCode;
        this['ecs_system_data_size'] = ecsSystemDataSize;
        this['cpu'] = cpu;
        this['ram'] = ram;
        this['asset'] = asset;
        this['connection'] = connection;
        this['type'] = type;
        this['data_disk_size'] = dataDiskSize;
    }
    public withResourceSpecCode(resourceSpecCode: string): CbsGetSpecInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withEcsSystemDataSize(ecsSystemDataSize: number): CbsGetSpecInfo {
        this['ecs_system_data_size'] = ecsSystemDataSize;
        return this;
    }
    public set ecsSystemDataSize(ecsSystemDataSize: number  | undefined) {
        this['ecs_system_data_size'] = ecsSystemDataSize;
    }
    public get ecsSystemDataSize(): number | undefined {
        return this['ecs_system_data_size'];
    }
    public withCpu(cpu: number): CbsGetSpecInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withRam(ram: number): CbsGetSpecInfo {
        this['ram'] = ram;
        return this;
    }
    public withAsset(asset: number): CbsGetSpecInfo {
        this['asset'] = asset;
        return this;
    }
    public withConnection(connection: number): CbsGetSpecInfo {
        this['connection'] = connection;
        return this;
    }
    public withType(type: string): CbsGetSpecInfo {
        this['type'] = type;
        return this;
    }
    public withDataDiskSize(dataDiskSize: number): CbsGetSpecInfo {
        this['data_disk_size'] = dataDiskSize;
        return this;
    }
    public set dataDiskSize(dataDiskSize: number  | undefined) {
        this['data_disk_size'] = dataDiskSize;
    }
    public get dataDiskSize(): number | undefined {
        return this['data_disk_size'];
    }
}