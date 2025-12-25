import { PipeCategory } from './PipeCategory';
import { PipeOwnerType } from './PipeOwnerType';
import { PipeProcessError } from './PipeProcessError';
import { PipeProcessStatus } from './PipeProcessStatus';


export class PipeItem {
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'pipe_alias'?: string;
    public category?: PipeCategory;
    public directory?: string;
    public description?: string;
    private 'process_status'?: PipeProcessStatus;
    private 'process_error'?: PipeProcessError;
    private 'owner_type'?: PipeOwnerType;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    public constructor(projectId?: string, workspaceId?: string, pipeId?: string, pipeName?: string, pipeAlias?: string, category?: PipeCategory, directory?: string, description?: string, processStatus?: PipeProcessStatus, processError?: PipeProcessError, createTime?: number, updateTime?: number, deleteTime?: number) { 
        this['project_id'] = projectId;
        this['workspace_id'] = workspaceId;
        this['pipe_id'] = pipeId;
        this['pipe_name'] = pipeName;
        this['pipe_alias'] = pipeAlias;
        this['category'] = category;
        this['directory'] = directory;
        this['description'] = description;
        this['process_status'] = processStatus;
        this['process_error'] = processError;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['delete_time'] = deleteTime;
    }
    public withProjectId(projectId: string): PipeItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): PipeItem {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPipeId(pipeId: string): PipeItem {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): PipeItem {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withPipeAlias(pipeAlias: string): PipeItem {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
    public withCategory(category: PipeCategory): PipeItem {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): PipeItem {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): PipeItem {
        this['description'] = description;
        return this;
    }
    public withProcessStatus(processStatus: PipeProcessStatus): PipeItem {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: PipeProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): PipeProcessStatus | undefined {
        return this['process_status'];
    }
    public withProcessError(processError: PipeProcessError): PipeItem {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: PipeProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): PipeProcessError | undefined {
        return this['process_error'];
    }
    public withOwnerType(ownerType: PipeOwnerType): PipeItem {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: PipeOwnerType  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): PipeOwnerType | undefined {
        return this['owner_type'];
    }
    public withCreateTime(createTime: number): PipeItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): PipeItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): PipeItem {
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