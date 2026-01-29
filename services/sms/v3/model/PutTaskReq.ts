import { CloneServer } from './CloneServer';
import { TargetServer } from './TargetServer';


export class PutTaskReq {
    public name?: string;
    public type?: PutTaskReqTypeEnum | string;
    private 'region_id'?: string;
    private 'region_name'?: string;
    private 'exist_server'?: boolean;
    private 'migration_ip'?: string;
    private 'use_ipv6'?: boolean;
    private 'use_public_ip'?: boolean;
    private 'speed_limit'?: number;
    private 'project_name'?: string;
    private 'project_id'?: string;
    private 'enterprise_project'?: string;
    private 'image_disk_id'?: string;
    private 'vm_template_id'?: string;
    private 'target_disk_ids'?: string;
    private 'snapshot_ids'?: string;
    private 'cutovered_snapshot_ids'?: string;
    private 'target_server'?: TargetServer;
    private 'clone_server'?: CloneServer;
    public constructor() { 
    }
    public withName(name: string): PutTaskReq {
        this['name'] = name;
        return this;
    }
    public withType(type: PutTaskReqTypeEnum | string): PutTaskReq {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): PutTaskReq {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRegionName(regionName: string): PutTaskReq {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withExistServer(existServer: boolean): PutTaskReq {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean  | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer(): boolean | undefined {
        return this['exist_server'];
    }
    public withMigrationIp(migrationIp: string): PutTaskReq {
        this['migration_ip'] = migrationIp;
        return this;
    }
    public set migrationIp(migrationIp: string  | undefined) {
        this['migration_ip'] = migrationIp;
    }
    public get migrationIp(): string | undefined {
        return this['migration_ip'];
    }
    public withUseIpv6(useIpv6: boolean): PutTaskReq {
        this['use_ipv6'] = useIpv6;
        return this;
    }
    public set useIpv6(useIpv6: boolean  | undefined) {
        this['use_ipv6'] = useIpv6;
    }
    public get useIpv6(): boolean | undefined {
        return this['use_ipv6'];
    }
    public withUsePublicIp(usePublicIp: boolean): PutTaskReq {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean  | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp(): boolean | undefined {
        return this['use_public_ip'];
    }
    public withSpeedLimit(speedLimit: number): PutTaskReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): number | undefined {
        return this['speed_limit'];
    }
    public withProjectName(projectName: string): PutTaskReq {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): PutTaskReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProject(enterpriseProject: string): PutTaskReq {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): string | undefined {
        return this['enterprise_project'];
    }
    public withImageDiskId(imageDiskId: string): PutTaskReq {
        this['image_disk_id'] = imageDiskId;
        return this;
    }
    public set imageDiskId(imageDiskId: string  | undefined) {
        this['image_disk_id'] = imageDiskId;
    }
    public get imageDiskId(): string | undefined {
        return this['image_disk_id'];
    }
    public withVmTemplateId(vmTemplateId: string): PutTaskReq {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string  | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId(): string | undefined {
        return this['vm_template_id'];
    }
    public withTargetDiskIds(targetDiskIds: string): PutTaskReq {
        this['target_disk_ids'] = targetDiskIds;
        return this;
    }
    public set targetDiskIds(targetDiskIds: string  | undefined) {
        this['target_disk_ids'] = targetDiskIds;
    }
    public get targetDiskIds(): string | undefined {
        return this['target_disk_ids'];
    }
    public withSnapshotIds(snapshotIds: string): PutTaskReq {
        this['snapshot_ids'] = snapshotIds;
        return this;
    }
    public set snapshotIds(snapshotIds: string  | undefined) {
        this['snapshot_ids'] = snapshotIds;
    }
    public get snapshotIds(): string | undefined {
        return this['snapshot_ids'];
    }
    public withCutoveredSnapshotIds(cutoveredSnapshotIds: string): PutTaskReq {
        this['cutovered_snapshot_ids'] = cutoveredSnapshotIds;
        return this;
    }
    public set cutoveredSnapshotIds(cutoveredSnapshotIds: string  | undefined) {
        this['cutovered_snapshot_ids'] = cutoveredSnapshotIds;
    }
    public get cutoveredSnapshotIds(): string | undefined {
        return this['cutovered_snapshot_ids'];
    }
    public withTargetServer(targetServer: TargetServer): PutTaskReq {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServer  | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer(): TargetServer | undefined {
        return this['target_server'];
    }
    public withCloneServer(cloneServer: CloneServer): PutTaskReq {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServer  | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer(): CloneServer | undefined {
        return this['clone_server'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PutTaskReqTypeEnum {
    MIGRATE_FILE = 'MIGRATE_FILE',
    MIGRATE_BLOCK = 'MIGRATE_BLOCK'
}
