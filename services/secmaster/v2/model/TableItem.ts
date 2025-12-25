import { DataClassification } from './DataClassification';
import { DataLayering } from './DataLayering';
import { TableCategory } from './TableCategory';
import { TableEditType } from './TableEditType';
import { TableFormat } from './TableFormat';
import { TableLockStatus } from './TableLockStatus';
import { TableOwnerType } from './TableOwnerType';
import { TableProcessError } from './TableProcessError';
import { TableProcessStatus } from './TableProcessStatus';
import { TableRWType } from './TableRWType';


export class TableItem {
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'table_id'?: string;
    private 'table_name'?: string;
    private 'table_alias'?: string;
    public directory?: string;
    public description?: string;
    public category?: TableCategory;
    private 'lock_status'?: TableLockStatus;
    private 'process_status'?: TableProcessStatus;
    private 'process_error'?: TableProcessError;
    private 'edit_type'?: TableEditType;
    public format?: TableFormat;
    private 'rw_type'?: TableRWType;
    private 'owner_type'?: TableOwnerType;
    private 'data_layering'?: DataLayering;
    private 'data_classification'?: DataClassification;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    private 'store_size_in_bytes'?: number;
    public constructor() { 
    }
    public withProjectId(projectId: string): TableItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): TableItem {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableId(tableId: string): TableItem {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableName(tableName: string): TableItem {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableAlias(tableAlias: string): TableItem {
        this['table_alias'] = tableAlias;
        return this;
    }
    public set tableAlias(tableAlias: string  | undefined) {
        this['table_alias'] = tableAlias;
    }
    public get tableAlias(): string | undefined {
        return this['table_alias'];
    }
    public withDirectory(directory: string): TableItem {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): TableItem {
        this['description'] = description;
        return this;
    }
    public withCategory(category: TableCategory): TableItem {
        this['category'] = category;
        return this;
    }
    public withLockStatus(lockStatus: TableLockStatus): TableItem {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: TableLockStatus  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): TableLockStatus | undefined {
        return this['lock_status'];
    }
    public withProcessStatus(processStatus: TableProcessStatus): TableItem {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: TableProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): TableProcessStatus | undefined {
        return this['process_status'];
    }
    public withProcessError(processError: TableProcessError): TableItem {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: TableProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): TableProcessError | undefined {
        return this['process_error'];
    }
    public withEditType(editType: TableEditType): TableItem {
        this['edit_type'] = editType;
        return this;
    }
    public set editType(editType: TableEditType  | undefined) {
        this['edit_type'] = editType;
    }
    public get editType(): TableEditType | undefined {
        return this['edit_type'];
    }
    public withFormat(format: TableFormat): TableItem {
        this['format'] = format;
        return this;
    }
    public withRwType(rwType: TableRWType): TableItem {
        this['rw_type'] = rwType;
        return this;
    }
    public set rwType(rwType: TableRWType  | undefined) {
        this['rw_type'] = rwType;
    }
    public get rwType(): TableRWType | undefined {
        return this['rw_type'];
    }
    public withOwnerType(ownerType: TableOwnerType): TableItem {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: TableOwnerType  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): TableOwnerType | undefined {
        return this['owner_type'];
    }
    public withDataLayering(dataLayering: DataLayering): TableItem {
        this['data_layering'] = dataLayering;
        return this;
    }
    public set dataLayering(dataLayering: DataLayering  | undefined) {
        this['data_layering'] = dataLayering;
    }
    public get dataLayering(): DataLayering | undefined {
        return this['data_layering'];
    }
    public withDataClassification(dataClassification: DataClassification): TableItem {
        this['data_classification'] = dataClassification;
        return this;
    }
    public set dataClassification(dataClassification: DataClassification  | undefined) {
        this['data_classification'] = dataClassification;
    }
    public get dataClassification(): DataClassification | undefined {
        return this['data_classification'];
    }
    public withCreateTime(createTime: number): TableItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): TableItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): TableItem {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withStoreSizeInBytes(storeSizeInBytes: number): TableItem {
        this['store_size_in_bytes'] = storeSizeInBytes;
        return this;
    }
    public set storeSizeInBytes(storeSizeInBytes: number  | undefined) {
        this['store_size_in_bytes'] = storeSizeInBytes;
    }
    public get storeSizeInBytes(): number | undefined {
        return this['store_size_in_bytes'];
    }
}