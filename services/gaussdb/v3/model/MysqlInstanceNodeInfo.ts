import { MysqlInstanceNodeVolumeInfo } from './MysqlInstanceNodeVolumeInfo';


export class MysqlInstanceNodeInfo {
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    public port?: number;
    private 'private_read_ips'?: Array<string>;
    public volume?: MysqlInstanceNodeVolumeInfo;
    private 'az_code'?: string;
    private 'region_code'?: string;
    public created?: string;
    public updated?: string;
    private 'flavor_id'?: string;
    private 'flavor_ref'?: string;
    private 'max_connections'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'need_restart'?: boolean;
    public priority?: number;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): MysqlInstanceNodeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MysqlInstanceNodeInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): MysqlInstanceNodeInfo {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): MysqlInstanceNodeInfo {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): MysqlInstanceNodeInfo {
        this['port'] = port;
        return this;
    }
    public withPrivateReadIps(privateReadIps: Array<string>): MysqlInstanceNodeInfo {
        this['private_read_ips'] = privateReadIps;
        return this;
    }
    public set privateReadIps(privateReadIps: Array<string>  | undefined) {
        this['private_read_ips'] = privateReadIps;
    }
    public get privateReadIps(): Array<string> | undefined {
        return this['private_read_ips'];
    }
    public withVolume(volume: MysqlInstanceNodeVolumeInfo): MysqlInstanceNodeInfo {
        this['volume'] = volume;
        return this;
    }
    public withAzCode(azCode: string): MysqlInstanceNodeInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withRegionCode(regionCode: string): MysqlInstanceNodeInfo {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string  | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode(): string | undefined {
        return this['region_code'];
    }
    public withCreated(created: string): MysqlInstanceNodeInfo {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): MysqlInstanceNodeInfo {
        this['updated'] = updated;
        return this;
    }
    public withFlavorId(flavorId: string): MysqlInstanceNodeInfo {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorRef(flavorRef: string): MysqlInstanceNodeInfo {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withMaxConnections(maxConnections: string): MysqlInstanceNodeInfo {
        this['max_connections'] = maxConnections;
        return this;
    }
    public set maxConnections(maxConnections: string  | undefined) {
        this['max_connections'] = maxConnections;
    }
    public get maxConnections(): string | undefined {
        return this['max_connections'];
    }
    public withVcpus(vcpus: string): MysqlInstanceNodeInfo {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): MysqlInstanceNodeInfo {
        this['ram'] = ram;
        return this;
    }
    public withNeedRestart(needRestart: boolean): MysqlInstanceNodeInfo {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): boolean | undefined {
        return this['need_restart'];
    }
    public withPriority(priority: number): MysqlInstanceNodeInfo {
        this['priority'] = priority;
        return this;
    }
}