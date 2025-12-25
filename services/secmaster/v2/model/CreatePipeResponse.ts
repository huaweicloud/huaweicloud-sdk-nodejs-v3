import { PipeCategory } from './PipeCategory';
import { PipeOwnerType } from './PipeOwnerType';
import { PipeProcessError } from './PipeProcessError';
import { PipeProcessStatus } from './PipeProcessStatus';
import { PipeResource } from './PipeResource';
import { PipeSchema } from './PipeSchema';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePipeResponse extends SdkResponse {
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
    public resources?: Array<PipeResource>;
    public schema?: PipeSchema;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): CreatePipeResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): CreatePipeResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPipeId(pipeId: string): CreatePipeResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): CreatePipeResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withPipeAlias(pipeAlias: string): CreatePipeResponse {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
    public withCategory(category: PipeCategory): CreatePipeResponse {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): CreatePipeResponse {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): CreatePipeResponse {
        this['description'] = description;
        return this;
    }
    public withProcessStatus(processStatus: PipeProcessStatus): CreatePipeResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: PipeProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): PipeProcessStatus | undefined {
        return this['process_status'];
    }
    public withProcessError(processError: PipeProcessError): CreatePipeResponse {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: PipeProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): PipeProcessError | undefined {
        return this['process_error'];
    }
    public withOwnerType(ownerType: PipeOwnerType): CreatePipeResponse {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: PipeOwnerType  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): PipeOwnerType | undefined {
        return this['owner_type'];
    }
    public withResources(resources: Array<PipeResource>): CreatePipeResponse {
        this['resources'] = resources;
        return this;
    }
    public withSchema(schema: PipeSchema): CreatePipeResponse {
        this['schema'] = schema;
        return this;
    }
    public withCreateTime(createTime: number): CreatePipeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CreatePipeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): CreatePipeResponse {
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