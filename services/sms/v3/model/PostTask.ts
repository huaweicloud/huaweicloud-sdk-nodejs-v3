import { SourceServerByTask } from './SourceServerByTask';
import { TargetServerByTask } from './TargetServerByTask';


export class PostTask {
    public name: string;
    public type: PostTaskTypeEnum;
    private 'start_target_server'?: boolean | undefined;
    private 'os_type': string | undefined;
    private 'source_server': SourceServerByTask | undefined;
    private 'target_server': TargetServerByTask | undefined;
    private 'migration_ip'?: string | undefined;
    private 'region_name': string | undefined;
    private 'region_id': string | undefined;
    private 'project_name': string | undefined;
    private 'project_id': string | undefined;
    private 'vm_template_id'?: string | undefined;
    private 'use_public_ip'?: boolean | undefined;
    public syncing?: boolean;
    private 'exist_server'?: boolean | undefined;
    public constructor(name?: any, type?: any, osType?: any, sourceServer?: any, targetServer?: any, regionName?: any, regionId?: any, projectName?: any, projectId?: any) { 
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
    public withType(type: PostTaskTypeEnum): PostTask {
        this['type'] = type;
        return this;
    }
    public withStartTargetServer(startTargetServer: boolean): PostTask {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withOsType(osType: string): PostTask {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withSourceServer(sourceServer: SourceServerByTask): PostTask {
        this['source_server'] = sourceServer;
        return this;
    }
    public set sourceServer(sourceServer: SourceServerByTask | undefined) {
        this['source_server'] = sourceServer;
    }
    public get sourceServer() {
        return this['source_server'];
    }
    public withTargetServer(targetServer: TargetServerByTask): PostTask {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServerByTask | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer() {
        return this['target_server'];
    }
    public withMigrationIp(migrationIp: string): PostTask {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp() {
        return this['migration_ip'];
    }
    public withRegionName(regionName: string): PostTask {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withRegionId(regionId: string): PostTask {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withProjectName(projectName: string): PostTask {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withProjectId(projectId: string): PostTask {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withVmTemplateId(vmTemplateId: string): PostTask {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId() {
        return this['vm_template_id'];
    }
    public withUsePublicIp(usePublicIp: boolean): PostTask {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp() {
        return this['use_public_ip'];
    }
    public withSyncing(syncing: boolean): PostTask {
        this['syncing'] = syncing;
        return this;
    }
    public withExistServer(existServer: boolean): PostTask {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer() {
        return this['exist_server'];
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
