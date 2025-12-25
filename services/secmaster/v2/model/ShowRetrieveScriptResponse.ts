import { ScriptCategory } from './ScriptCategory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRetrieveScriptResponse extends SdkResponse {
    private 'script_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'script_name'?: string;
    private 'table_id'?: string;
    public category?: ScriptCategory;
    public directory?: string;
    public description?: string;
    public script?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withScriptId(scriptId: string): ShowRetrieveScriptResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withProjectId(projectId: string): ShowRetrieveScriptResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowRetrieveScriptResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withScriptName(scriptName: string): ShowRetrieveScriptResponse {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withTableId(tableId: string): ShowRetrieveScriptResponse {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withCategory(category: ScriptCategory): ShowRetrieveScriptResponse {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): ShowRetrieveScriptResponse {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): ShowRetrieveScriptResponse {
        this['description'] = description;
        return this;
    }
    public withScript(script: string): ShowRetrieveScriptResponse {
        this['script'] = script;
        return this;
    }
    public withCreateBy(createBy: string): ShowRetrieveScriptResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): ShowRetrieveScriptResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): ShowRetrieveScriptResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): ShowRetrieveScriptResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}