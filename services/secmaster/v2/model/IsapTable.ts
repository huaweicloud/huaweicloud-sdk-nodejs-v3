import { DataClassification } from './DataClassification';
import { DataLayering } from './DataLayering';
import { IsapTableCategory } from './IsapTableCategory';
import { IsapTableProcessError } from './IsapTableProcessError';
import { IsapTableProcessStatus } from './IsapTableProcessStatus';
import { IsapTableSchema } from './IsapTableSchema';
import { TableDisplaySetting } from './TableDisplaySetting';
import { TableFormat } from './TableFormat';
import { TableLockStatus } from './TableLockStatus';
import { TableOwnerType } from './TableOwnerType';
import { TableRWType } from './TableRWType';
import { TableStorageSetting } from './TableStorageSetting';


export class IsapTable {
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'table_id'?: string;
    private 'pipe_id'?: string;
    private 'table_name'?: string;
    private 'table_alias'?: string;
    public description?: string;
    public directory?: string;
    public category?: IsapTableCategory;
    private 'lock_status'?: TableLockStatus;
    private 'process_status'?: IsapTableProcessStatus;
    private 'process_error'?: IsapTableProcessError;
    public format?: TableFormat;
    private 'rw_type'?: TableRWType;
    private 'owner_type'?: TableOwnerType;
    private 'data_layering'?: DataLayering;
    private 'data_classification'?: DataClassification;
    public schema?: IsapTableSchema;
    private 'storage_setting'?: TableStorageSetting;
    private 'display_setting'?: TableDisplaySetting;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    public constructor() { 
    }
    public withProjectId(projectId: string): IsapTable {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): IsapTable {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableId(tableId: string): IsapTable {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withPipeId(pipeId: string): IsapTable {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withTableName(tableName: string): IsapTable {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableAlias(tableAlias: string): IsapTable {
        this['table_alias'] = tableAlias;
        return this;
    }
    public set tableAlias(tableAlias: string  | undefined) {
        this['table_alias'] = tableAlias;
    }
    public get tableAlias(): string | undefined {
        return this['table_alias'];
    }
    public withDescription(description: string): IsapTable {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): IsapTable {
        this['directory'] = directory;
        return this;
    }
    public withCategory(category: IsapTableCategory): IsapTable {
        this['category'] = category;
        return this;
    }
    public withLockStatus(lockStatus: TableLockStatus): IsapTable {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: TableLockStatus  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): TableLockStatus | undefined {
        return this['lock_status'];
    }
    public withProcessStatus(processStatus: IsapTableProcessStatus): IsapTable {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: IsapTableProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): IsapTableProcessStatus | undefined {
        return this['process_status'];
    }
    public withProcessError(processError: IsapTableProcessError): IsapTable {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: IsapTableProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): IsapTableProcessError | undefined {
        return this['process_error'];
    }
    public withFormat(format: TableFormat): IsapTable {
        this['format'] = format;
        return this;
    }
    public withRwType(rwType: TableRWType): IsapTable {
        this['rw_type'] = rwType;
        return this;
    }
    public set rwType(rwType: TableRWType  | undefined) {
        this['rw_type'] = rwType;
    }
    public get rwType(): TableRWType | undefined {
        return this['rw_type'];
    }
    public withOwnerType(ownerType: TableOwnerType): IsapTable {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: TableOwnerType  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): TableOwnerType | undefined {
        return this['owner_type'];
    }
    public withDataLayering(dataLayering: DataLayering): IsapTable {
        this['data_layering'] = dataLayering;
        return this;
    }
    public set dataLayering(dataLayering: DataLayering  | undefined) {
        this['data_layering'] = dataLayering;
    }
    public get dataLayering(): DataLayering | undefined {
        return this['data_layering'];
    }
    public withDataClassification(dataClassification: DataClassification): IsapTable {
        this['data_classification'] = dataClassification;
        return this;
    }
    public set dataClassification(dataClassification: DataClassification  | undefined) {
        this['data_classification'] = dataClassification;
    }
    public get dataClassification(): DataClassification | undefined {
        return this['data_classification'];
    }
    public withSchema(schema: IsapTableSchema): IsapTable {
        this['schema'] = schema;
        return this;
    }
    public withStorageSetting(storageSetting: TableStorageSetting): IsapTable {
        this['storage_setting'] = storageSetting;
        return this;
    }
    public set storageSetting(storageSetting: TableStorageSetting  | undefined) {
        this['storage_setting'] = storageSetting;
    }
    public get storageSetting(): TableStorageSetting | undefined {
        return this['storage_setting'];
    }
    public withDisplaySetting(displaySetting: TableDisplaySetting): IsapTable {
        this['display_setting'] = displaySetting;
        return this;
    }
    public set displaySetting(displaySetting: TableDisplaySetting  | undefined) {
        this['display_setting'] = displaySetting;
    }
    public get displaySetting(): TableDisplaySetting | undefined {
        return this['display_setting'];
    }
    public withCreateTime(createTime: number): IsapTable {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): IsapTable {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): IsapTable {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}