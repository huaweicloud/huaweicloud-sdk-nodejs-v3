
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCodeSegmentResponse extends SdkResponse {
    private 'code_segment_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'code_segment_name'?: string;
    public description?: string;
    public code?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withCodeSegmentId(codeSegmentId: string): UpdateCodeSegmentResponse {
        this['code_segment_id'] = codeSegmentId;
        return this;
    }
    public set codeSegmentId(codeSegmentId: string  | undefined) {
        this['code_segment_id'] = codeSegmentId;
    }
    public get codeSegmentId(): string | undefined {
        return this['code_segment_id'];
    }
    public withProjectId(projectId: string): UpdateCodeSegmentResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): UpdateCodeSegmentResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCodeSegmentName(codeSegmentName: string): UpdateCodeSegmentResponse {
        this['code_segment_name'] = codeSegmentName;
        return this;
    }
    public set codeSegmentName(codeSegmentName: string  | undefined) {
        this['code_segment_name'] = codeSegmentName;
    }
    public get codeSegmentName(): string | undefined {
        return this['code_segment_name'];
    }
    public withDescription(description: string): UpdateCodeSegmentResponse {
        this['description'] = description;
        return this;
    }
    public withCode(code: string): UpdateCodeSegmentResponse {
        this['code'] = code;
        return this;
    }
    public withCreateBy(createBy: string): UpdateCodeSegmentResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): UpdateCodeSegmentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): UpdateCodeSegmentResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): UpdateCodeSegmentResponse {
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