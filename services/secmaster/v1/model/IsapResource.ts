import { IsapResourceDisplaySetting } from './IsapResourceDisplaySetting';
import { Schema } from './Schema';
import { StorageSetting } from './StorageSetting';


export class IsapResource {
    public category?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'data_classification'?: string;
    private 'data_layering'?: string;
    private 'delete_time'?: number;
    public description?: string;
    public directory?: string;
    private 'display_setting'?: IsapResourceDisplaySetting;
    public format?: string;
    private 'lock_status'?: string;
    private 'owner_type'?: string;
    private 'pipe_id'?: string;
    private 'process_error'?: string;
    private 'process_status'?: string;
    private 'project_id'?: string;
    private 'rw_type'?: string;
    public schema?: Schema;
    private 'storage_setting'?: StorageSetting;
    private 'store_size_in_bytes'?: number;
    private 'table_alias'?: string;
    private 'table_id'?: string;
    private 'table_name'?: string;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withCategory(category: string): IsapResource {
        this['category'] = category;
        return this;
    }
    public withCreateBy(createBy: string): IsapResource {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): IsapResource {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataClassification(dataClassification: string): IsapResource {
        this['data_classification'] = dataClassification;
        return this;
    }
    public set dataClassification(dataClassification: string  | undefined) {
        this['data_classification'] = dataClassification;
    }
    public get dataClassification(): string | undefined {
        return this['data_classification'];
    }
    public withDataLayering(dataLayering: string): IsapResource {
        this['data_layering'] = dataLayering;
        return this;
    }
    public set dataLayering(dataLayering: string  | undefined) {
        this['data_layering'] = dataLayering;
    }
    public get dataLayering(): string | undefined {
        return this['data_layering'];
    }
    public withDeleteTime(deleteTime: number): IsapResource {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withDescription(description: string): IsapResource {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): IsapResource {
        this['directory'] = directory;
        return this;
    }
    public withDisplaySetting(displaySetting: IsapResourceDisplaySetting): IsapResource {
        this['display_setting'] = displaySetting;
        return this;
    }
    public set displaySetting(displaySetting: IsapResourceDisplaySetting  | undefined) {
        this['display_setting'] = displaySetting;
    }
    public get displaySetting(): IsapResourceDisplaySetting | undefined {
        return this['display_setting'];
    }
    public withFormat(format: string): IsapResource {
        this['format'] = format;
        return this;
    }
    public withLockStatus(lockStatus: string): IsapResource {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withOwnerType(ownerType: string): IsapResource {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: string  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): string | undefined {
        return this['owner_type'];
    }
    public withPipeId(pipeId: string): IsapResource {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withProcessError(processError: string): IsapResource {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: string  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): string | undefined {
        return this['process_error'];
    }
    public withProcessStatus(processStatus: string): IsapResource {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withProjectId(projectId: string): IsapResource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRwType(rwType: string): IsapResource {
        this['rw_type'] = rwType;
        return this;
    }
    public set rwType(rwType: string  | undefined) {
        this['rw_type'] = rwType;
    }
    public get rwType(): string | undefined {
        return this['rw_type'];
    }
    public withSchema(schema: Schema): IsapResource {
        this['schema'] = schema;
        return this;
    }
    public withStorageSetting(storageSetting: StorageSetting): IsapResource {
        this['storage_setting'] = storageSetting;
        return this;
    }
    public set storageSetting(storageSetting: StorageSetting  | undefined) {
        this['storage_setting'] = storageSetting;
    }
    public get storageSetting(): StorageSetting | undefined {
        return this['storage_setting'];
    }
    public withStoreSizeInBytes(storeSizeInBytes: number): IsapResource {
        this['store_size_in_bytes'] = storeSizeInBytes;
        return this;
    }
    public set storeSizeInBytes(storeSizeInBytes: number  | undefined) {
        this['store_size_in_bytes'] = storeSizeInBytes;
    }
    public get storeSizeInBytes(): number | undefined {
        return this['store_size_in_bytes'];
    }
    public withTableAlias(tableAlias: string): IsapResource {
        this['table_alias'] = tableAlias;
        return this;
    }
    public set tableAlias(tableAlias: string  | undefined) {
        this['table_alias'] = tableAlias;
    }
    public get tableAlias(): string | undefined {
        return this['table_alias'];
    }
    public withTableId(tableId: string): IsapResource {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableName(tableName: string): IsapResource {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUpdateBy(updateBy: string): IsapResource {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): IsapResource {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withWorkspaceId(workspaceId: string): IsapResource {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}