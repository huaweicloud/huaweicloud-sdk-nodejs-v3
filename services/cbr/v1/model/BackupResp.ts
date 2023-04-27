import { BackupExtendInfo } from './BackupExtendInfo';
import { ReplicationRecordGet } from './ReplicationRecordGet';


export class BackupResp {
    private 'checkpoint_id': string | undefined;
    private 'created_at': Date | undefined;
    public description: string;
    private 'expired_at': Date | undefined;
    private 'extend_info': BackupExtendInfo | undefined;
    public id: string;
    private 'image_type': BackupRespImageTypeEnum | undefined;
    public name: string;
    private 'parent_id': string | undefined;
    private 'project_id': string | undefined;
    private 'protected_at': string | undefined;
    private 'resource_az': string | undefined;
    private 'resource_id': string | undefined;
    private 'resource_name': string | undefined;
    private 'resource_size': number | undefined;
    private 'resource_type': BackupRespResourceTypeEnum | undefined;
    public status: BackupRespStatusEnum;
    private 'updated_at': Date | undefined;
    private 'vault_id': string | undefined;
    private 'replication_records'?: Array<ReplicationRecordGet> | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'provider_id': string | undefined;
    public children?: Array<BackupResp>;
    public constructor(checkpointId?: any, createdAt?: any, description?: any, expiredAt?: any, extendInfo?: any, id?: any, imageType?: any, name?: any, parentId?: any, projectId?: any, protectedAt?: any, resourceAz?: any, resourceId?: any, resourceName?: any, resourceSize?: any, resourceType?: any, status?: any, updatedAt?: any, vaultId?: any, providerId?: any) { 
        this['checkpoint_id'] = checkpointId;
        this['created_at'] = createdAt;
        this['description'] = description;
        this['expired_at'] = expiredAt;
        this['extend_info'] = extendInfo;
        this['id'] = id;
        this['image_type'] = imageType;
        this['name'] = name;
        this['parent_id'] = parentId;
        this['project_id'] = projectId;
        this['protected_at'] = protectedAt;
        this['resource_az'] = resourceAz;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_size'] = resourceSize;
        this['resource_type'] = resourceType;
        this['status'] = status;
        this['updated_at'] = updatedAt;
        this['vault_id'] = vaultId;
        this['provider_id'] = providerId;
    }
    public withCheckpointId(checkpointId: string): BackupResp {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId() {
        return this['checkpoint_id'];
    }
    public withCreatedAt(createdAt: Date): BackupResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withDescription(description: string): BackupResp {
        this['description'] = description;
        return this;
    }
    public withExpiredAt(expiredAt: Date): BackupResp {
        this['expired_at'] = expiredAt;
        return this;
    }
    public set expiredAt(expiredAt: Date | undefined) {
        this['expired_at'] = expiredAt;
    }
    public get expiredAt() {
        return this['expired_at'];
    }
    public withExtendInfo(extendInfo: BackupExtendInfo): BackupResp {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: BackupExtendInfo | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo() {
        return this['extend_info'];
    }
    public withId(id: string): BackupResp {
        this['id'] = id;
        return this;
    }
    public withImageType(imageType: BackupRespImageTypeEnum): BackupResp {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: BackupRespImageTypeEnum | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType() {
        return this['image_type'];
    }
    public withName(name: string): BackupResp {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): BackupResp {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withProjectId(projectId: string): BackupResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProtectedAt(protectedAt: string): BackupResp {
        this['protected_at'] = protectedAt;
        return this;
    }
    public set protectedAt(protectedAt: string | undefined) {
        this['protected_at'] = protectedAt;
    }
    public get protectedAt() {
        return this['protected_at'];
    }
    public withResourceAz(resourceAz: string): BackupResp {
        this['resource_az'] = resourceAz;
        return this;
    }
    public set resourceAz(resourceAz: string | undefined) {
        this['resource_az'] = resourceAz;
    }
    public get resourceAz() {
        return this['resource_az'];
    }
    public withResourceId(resourceId: string): BackupResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): BackupResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceSize(resourceSize: number): BackupResp {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize() {
        return this['resource_size'];
    }
    public withResourceType(resourceType: BackupRespResourceTypeEnum): BackupResp {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BackupRespResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withStatus(status: BackupRespStatusEnum): BackupResp {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): BackupResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withVaultId(vaultId: string): BackupResp {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withReplicationRecords(replicationRecords: Array<ReplicationRecordGet>): BackupResp {
        this['replication_records'] = replicationRecords;
        return this;
    }
    public set replicationRecords(replicationRecords: Array<ReplicationRecordGet> | undefined) {
        this['replication_records'] = replicationRecords;
    }
    public get replicationRecords() {
        return this['replication_records'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BackupResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withProviderId(providerId: string): BackupResp {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId() {
        return this['provider_id'];
    }
    public withChildren(children: Array<BackupResp>): BackupResp {
        this['children'] = children;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupRespImageTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupRespResourceTypeEnum {
    OSNOVASERVER = 'OS::Nova::Server',
    OSCINDERVOLUME = 'OS::Cinder::Volume',
    OSWORKSPACEDESKTOPV2 = 'OS::Workspace::DesktopV2'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupRespStatusEnum {
    AVAILABLE = 'available',
    PROTECTING = 'protecting',
    DELETING = 'deleting',
    RESTORING = 'restoring',
    ERROR = 'error',
    WAITING_PROTECT = 'waiting_protect',
    WAITING_DELETE = 'waiting_delete',
    WAITING_RESTORE = 'waiting_restore'
}
