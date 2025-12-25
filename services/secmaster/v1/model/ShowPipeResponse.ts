import { IsapResource } from './IsapResource';
import { Schema } from './Schema';
import { StorageSetting } from './StorageSetting';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipeResponse extends SdkResponse {
    public category?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'delete_time'?: number;
    public description?: string;
    public directory?: string;
    private 'owner_type'?: string;
    private 'pipe_alias'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'process_error'?: string;
    private 'process_status'?: string;
    private 'project_id'?: string;
    public resources?: Array<IsapResource>;
    public schema?: Schema;
    private 'storage_setting'?: StorageSetting;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'workspace_id'?: string;
    public constructor() { 
        super();
    }
    public withCategory(category: string): ShowPipeResponse {
        this['category'] = category;
        return this;
    }
    public withCreateBy(createBy: string): ShowPipeResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): ShowPipeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDeleteTime(deleteTime: number): ShowPipeResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withDescription(description: string): ShowPipeResponse {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): ShowPipeResponse {
        this['directory'] = directory;
        return this;
    }
    public withOwnerType(ownerType: string): ShowPipeResponse {
        this['owner_type'] = ownerType;
        return this;
    }
    public set ownerType(ownerType: string  | undefined) {
        this['owner_type'] = ownerType;
    }
    public get ownerType(): string | undefined {
        return this['owner_type'];
    }
    public withPipeAlias(pipeAlias: string): ShowPipeResponse {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
    public withPipeId(pipeId: string): ShowPipeResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): ShowPipeResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withProcessError(processError: string): ShowPipeResponse {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: string  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): string | undefined {
        return this['process_error'];
    }
    public withProcessStatus(processStatus: string): ShowPipeResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withProjectId(projectId: string): ShowPipeResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResources(resources: Array<IsapResource>): ShowPipeResponse {
        this['resources'] = resources;
        return this;
    }
    public withSchema(schema: Schema): ShowPipeResponse {
        this['schema'] = schema;
        return this;
    }
    public withStorageSetting(storageSetting: StorageSetting): ShowPipeResponse {
        this['storage_setting'] = storageSetting;
        return this;
    }
    public set storageSetting(storageSetting: StorageSetting  | undefined) {
        this['storage_setting'] = storageSetting;
    }
    public get storageSetting(): StorageSetting | undefined {
        return this['storage_setting'];
    }
    public withUpdateBy(updateBy: string): ShowPipeResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): ShowPipeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withWorkspaceId(workspaceId: string): ShowPipeResponse {
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