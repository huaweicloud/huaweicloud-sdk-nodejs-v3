
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationDetailResponse extends SdkResponse {
    private 'component_count'?: number;
    private 'unified_model'?: string;
    public id?: string;
    public name?: string;
    public description?: string;
    public creator?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withComponentCount(componentCount: number): ShowApplicationDetailResponse {
        this['component_count'] = componentCount;
        return this;
    }
    public set componentCount(componentCount: number  | undefined) {
        this['component_count'] = componentCount;
    }
    public get componentCount(): number | undefined {
        return this['component_count'];
    }
    public withUnifiedModel(unifiedModel: string): ShowApplicationDetailResponse {
        this['unified_model'] = unifiedModel;
        return this;
    }
    public set unifiedModel(unifiedModel: string  | undefined) {
        this['unified_model'] = unifiedModel;
    }
    public get unifiedModel(): string | undefined {
        return this['unified_model'];
    }
    public withId(id: string): ShowApplicationDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowApplicationDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowApplicationDetailResponse {
        this['description'] = description;
        return this;
    }
    public withCreator(creator: string): ShowApplicationDetailResponse {
        this['creator'] = creator;
        return this;
    }
    public withProjectId(projectId: string): ShowApplicationDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowApplicationDetailResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): ShowApplicationDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowApplicationDetailResponse {
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