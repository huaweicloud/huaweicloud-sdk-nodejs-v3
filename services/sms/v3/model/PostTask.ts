import { SourceServerByTask } from './SourceServerByTask';
import { TargetServerByTask } from './TargetServerByTask';


export class PostTask {
    public name?: string;
    public type?: PostTaskTypeEnum | string;
    private 'start_target_server'?: boolean;
    private 'auto_start'?: boolean;
    private 'os_type'?: string;
    private 'source_server'?: SourceServerByTask;
    private 'target_server'?: TargetServerByTask;
    private 'migration_ip'?: string;
    private 'region_name'?: string;
    private 'region_id'?: string;
    private 'project_name'?: string;
    private 'project_id'?: string;
    public priority?: number;
    private 'vm_template_id'?: string;
    private 'use_public_ip'?: boolean;
    private 'use_ipv6'?: boolean;
    public syncing?: boolean;
    private 'exist_server'?: boolean;
    private 'start_network_check'?: boolean;
    public constructor(name?: string, type?: string, osType?: string, sourceServer?: SourceServerByTask, targetServer?: TargetServerByTask, regionName?: string, regionId?: string, projectName?: string, projectId?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['os_type'] = osType;
        this['source_server'] = sourceServer;
        this['target_server'] = targetServer;
        this['region_name'] = regionName;
        this['region_id'] = regionId;
        this['project_name'] = projectName;
        this['project_id'] = projectId;
    }
    public withName(name: string): PostTask {
        this['name'] = name;
        return this;
    }
    public withType(type: PostTaskTypeEnum | string): PostTask {
        this['type'] = type;
        return this;
    }
    public withStartTargetServer(startTargetServer: boolean): PostTask {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean  | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer(): boolean | undefined {
        return this['start_target_server'];
    }
    public withAutoStart(autoStart: boolean): PostTask {
        this['auto_start'] = autoStart;
        return this;
    }
    public set autoStart(autoStart: boolean  | undefined) {
        this['auto_start'] = autoStart;
    }
    public get autoStart(): boolean | undefined {
        return this['auto_start'];
    }
    public withOsType(osType: string): PostTask {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withSourceServer(sourceServer: SourceServerByTask): PostTask {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: SourceServerByTask  | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer(): SourceServerByTask | undefined {
        return this['source_server'];
    }
    public withTargetServer(targetServer: TargetServerByTask): PostTask {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServerByTask  | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer(): TargetServerByTask | undefined {
        return this['target_server'];
    }
    public withMigrationIp(migrationIp: string): PostTask {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string  | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp(): string | undefined {
        return this['migration_ip'];
    }
    public withRegionName(regionName: string): PostTask {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withRegionId(regionId: string): PostTask {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectName(projectName: string): PostTask {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): PostTask {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPriority(priority: number): PostTask {
        this['priority'] = priority;
        return this;
    }
    public withVmTemplateId(vmTemplateId: string): PostTask {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string  | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId(): string | undefined {
        return this['vm_template_id'];
    }
    public withUsePublicIp(usePublicIp: boolean): PostTask {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean  | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp(): boolean | undefined {
        return this['use_public_ip'];
    }
    public withUseIpv6(useIpv6: boolean): PostTask {
        this['use_ipv6'] = useIpv6;
        return this;
    }
    public set useIpv6(useIpv6: boolean  | undefined) {
        this['use_ipv6'] = useIpv6;
    }
    public get useIpv6(): boolean | undefined {
        return this['use_ipv6'];
    }
    public withSyncing(syncing: boolean): PostTask {
        this['syncing'] = syncing;
        return this;
    }
    public withExistServer(existServer: boolean): PostTask {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean  | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer(): boolean | undefined {
        return this['exist_server'];
    }
    public withStartNetworkCheck(startNetworkCheck: boolean): PostTask {
        this['start_network_check'] = startNetworkCheck;
        return this;
    }
    public set startNetworkCheck(startNetworkCheck: boolean  | undefined) {
        this['start_network_check'] = startNetworkCheck;
    }
    public get startNetworkCheck(): boolean | undefined {
        return this['start_network_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostTaskTypeEnum {
    MIGRATE_FILE = 'MIGRATE_FILE',
    MIGRATE_BLOCK = 'MIGRATE_BLOCK'
}
