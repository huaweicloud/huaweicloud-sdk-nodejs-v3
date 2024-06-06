import { VolumeInfo } from './VolumeInfo';


export class ServerInfo {
    private 'server_id'?: string;
    private 'server_name'?: string;
    private 'server_type'?: string;
    private 'data_volumes'?: Array<VolumeInfo>;
    private 'root_volume'?: VolumeInfo;
    private 'cpu_type'?: string;
    public cpu?: string;
    public mem?: string;
    private 'internal_ip'?: string;
    public constructor(serverId?: string, serverName?: string, serverType?: string) { 
        this['server_id'] = serverId;
        this['server_name'] = serverName;
        this['server_type'] = serverType;
    }
    public withServerId(serverId: string): ServerInfo {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerName(serverName: string): ServerInfo {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerType(serverType: string): ServerInfo {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeInfo>): ServerInfo {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeInfo>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeInfo> | undefined {
        return this['data_volumes'];
    }
    public withRootVolume(rootVolume: VolumeInfo): ServerInfo {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: VolumeInfo  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): VolumeInfo | undefined {
        return this['root_volume'];
    }
    public withCpuType(cpuType: string): ServerInfo {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: string  | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType(): string | undefined {
        return this['cpu_type'];
    }
    public withCpu(cpu: string): ServerInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): ServerInfo {
        this['mem'] = mem;
        return this;
    }
    public withInternalIp(internalIp: string): ServerInfo {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
}