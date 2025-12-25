import { AnalysisScriptParam } from './AnalysisScriptParam';
import { AnalysisScriptType } from './AnalysisScriptType';
import { ScriptCategory } from './ScriptCategory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAnalysisScriptResponse extends SdkResponse {
    private 'script_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'script_name'?: string;
    public category?: ScriptCategory;
    public directory?: string;
    public description?: string;
    private 'script_type'?: AnalysisScriptType;
    private 'retrieve_table_id'?: string;
    public script?: string;
    public owner?: string;
    private 'script_params'?: Array<AnalysisScriptParam>;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withScriptId(scriptId: string): UpdateAnalysisScriptResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withProjectId(projectId: string): UpdateAnalysisScriptResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): UpdateAnalysisScriptResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withScriptName(scriptName: string): UpdateAnalysisScriptResponse {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withCategory(category: ScriptCategory): UpdateAnalysisScriptResponse {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): UpdateAnalysisScriptResponse {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): UpdateAnalysisScriptResponse {
        this['description'] = description;
        return this;
    }
    public withScriptType(scriptType: AnalysisScriptType): UpdateAnalysisScriptResponse {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: AnalysisScriptType  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): AnalysisScriptType | undefined {
        return this['script_type'];
    }
    public withRetrieveTableId(retrieveTableId: string): UpdateAnalysisScriptResponse {
        this['retrieve_table_id'] = retrieveTableId;
        return this;
    }
    public set retrieveTableId(retrieveTableId: string  | undefined) {
        this['retrieve_table_id'] = retrieveTableId;
    }
    public get retrieveTableId(): string | undefined {
        return this['retrieve_table_id'];
    }
    public withScript(script: string): UpdateAnalysisScriptResponse {
        this['script'] = script;
        return this;
    }
    public withOwner(owner: string): UpdateAnalysisScriptResponse {
        this['owner'] = owner;
        return this;
    }
    public withScriptParams(scriptParams: Array<AnalysisScriptParam>): UpdateAnalysisScriptResponse {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<AnalysisScriptParam>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<AnalysisScriptParam> | undefined {
        return this['script_params'];
    }
    public withCreateBy(createBy: string): UpdateAnalysisScriptResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): UpdateAnalysisScriptResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): UpdateAnalysisScriptResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): UpdateAnalysisScriptResponse {
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