

export class ListBackupsRequest {
    private 'checkpoint_id'?: string | undefined;
    public dec?: boolean;
    private 'end_time'?: string | undefined;
    private 'image_type'?: ListBackupsRequestImageTypeEnum | undefined;
    public limit?: number;
    public marker?: string;
    public name?: string;
    public offset?: number;
    private 'resource_az'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'resource_type'?: ListBackupsRequestResourceTypeEnum | undefined;
    public sort?: string;
    private 'start_time'?: string | undefined;
    public status?: ListBackupsRequestStatusEnum;
    private 'vault_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'own_type'?: ListBackupsRequestOwnTypeEnum | undefined;
    private 'member_status'?: ListBackupsRequestMemberStatusEnum | undefined;
    private 'parent_id'?: string | undefined;
    private 'used_percent'?: string | undefined;
    private 'show_replication'?: boolean | undefined;
    public incremental?: boolean;
    public constructor() { 
    }
    public withCheckpointId(checkpointId: string): ListBackupsRequest {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId() {
        return this['checkpoint_id'];
    }
    public withDec(dec: boolean): ListBackupsRequest {
        this['dec'] = dec;
        return this;
    }
    public withEndTime(endTime: string): ListBackupsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withImageType(imageType: ListBackupsRequestImageTypeEnum): ListBackupsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: ListBackupsRequestImageTypeEnum | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType() {
        return this['image_type'];
    }
    public withLimit(limit: number): ListBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBackupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): ListBackupsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withResourceAz(resourceAz: string): ListBackupsRequest {
        this['resource_az'] = resourceAz;
        return this;
    }
    public set resourceAz(resourceAz: string | undefined) {
        this['resource_az'] = resourceAz;
    }
    public get resourceAz() {
        return this['resource_az'];
    }
    public withResourceId(resourceId: string): ListBackupsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListBackupsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceType(resourceType: ListBackupsRequestResourceTypeEnum): ListBackupsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListBackupsRequestResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withSort(sort: string): ListBackupsRequest {
        this['sort'] = sort;
        return this;
    }
    public withStartTime(startTime: string): ListBackupsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStatus(status: ListBackupsRequestStatusEnum): ListBackupsRequest {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): ListBackupsRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBackupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withOwnType(ownType: ListBackupsRequestOwnTypeEnum): ListBackupsRequest {
        this['own_type'] = ownType;
        return this;
    }
    public set ownType(ownType: ListBackupsRequestOwnTypeEnum | undefined) {
        this['own_type'] = ownType;
    }
    public get ownType() {
        return this['own_type'];
    }
    public withMemberStatus(memberStatus: ListBackupsRequestMemberStatusEnum): ListBackupsRequest {
        this['member_status'] = memberStatus;
        return this;
    }
    public set memberStatus(memberStatus: ListBackupsRequestMemberStatusEnum | undefined) {
        this['member_status'] = memberStatus;
    }
    public get memberStatus() {
        return this['member_status'];
    }
    public withParentId(parentId: string): ListBackupsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withUsedPercent(usedPercent: string): ListBackupsRequest {
        this['used_percent'] = usedPercent;
        return this;
    }
    public set usedPercent(usedPercent: string | undefined) {
        this['used_percent'] = usedPercent;
    }
    public get usedPercent() {
        return this['used_percent'];
    }
    public withShowReplication(showReplication: boolean): ListBackupsRequest {
        this['show_replication'] = showReplication;
        return this;
    }
    public set showReplication(showReplication: boolean | undefined) {
        this['show_replication'] = showReplication;
    }
    public get showReplication() {
        return this['show_replication'];
    }
    public withIncremental(incremental: boolean): ListBackupsRequest {
        this['incremental'] = incremental;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestImageTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestResourceTypeEnum {
    OSCINDERVOLUME = 'OS::Cinder::Volume',
    OSNOVASERVER = 'OS::Nova::Server',
    OSWORKSPACEDESKTOPV2 = 'OS::Workspace::DesktopV2'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestStatusEnum {
    AVAILABLE = 'available',
    PROTECTING = 'protecting',
    DELETING = 'deleting',
    RESTORING = 'restoring',
    ERROR = 'error',
    WAITING_PROTECT = 'waiting_protect',
    WAITING_DELETE = 'waiting_delete',
    WAITING_RESTORE = 'waiting_restore'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestOwnTypeEnum {
    ALL_GRANTED = 'all_granted',
    PRIVATE = 'private',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestMemberStatusEnum {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}
