

export class PluginDetailInfo {
    public name?: string;
    public id?: string;
    public version?: string;
    private 'agent_version'?: string;
    public arch?: string;
    private 'os_type'?: string;
    private 'version_description'?: string;
    public size?: string;
    private 'cpu_limit'?: number;
    private 'memory_limit'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withName(name: string): PluginDetailInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): PluginDetailInfo {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): PluginDetailInfo {
        this['version'] = version;
        return this;
    }
    public withAgentVersion(agentVersion: string): PluginDetailInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withArch(arch: string): PluginDetailInfo {
        this['arch'] = arch;
        return this;
    }
    public withOsType(osType: string): PluginDetailInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withVersionDescription(versionDescription: string): PluginDetailInfo {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withSize(size: string): PluginDetailInfo {
        this['size'] = size;
        return this;
    }
    public withCpuLimit(cpuLimit: number): PluginDetailInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: number  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): number | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: number): PluginDetailInfo {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: number  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): number | undefined {
        return this['memory_limit'];
    }
    public withUpdateTime(updateTime: number): PluginDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}