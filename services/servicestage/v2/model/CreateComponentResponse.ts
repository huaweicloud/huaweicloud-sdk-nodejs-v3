import { BuildInfo } from './BuildInfo';
import { ComponentCategory } from './ComponentCategory';
import { ComponentSubCategory } from './ComponentSubCategory';
import { RuntimeType } from './RuntimeType';
import { SourceObject } from './SourceObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateComponentResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: number;
    public runtime?: RuntimeType;
    public category?: ComponentCategory;
    private 'sub_category'?: ComponentSubCategory;
    public description?: string;
    private 'project_id'?: string;
    private 'application_id'?: string;
    public source?: SourceObject;
    public build?: BuildInfo;
    private 'pipeline_ids'?: Array<string>;
    private 'create_time'?: number;
    public creator?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateComponentResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateComponentResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: number): CreateComponentResponse {
        this['status'] = status;
        return this;
    }
    public withRuntime(runtime: RuntimeType): CreateComponentResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withCategory(category: ComponentCategory): CreateComponentResponse {
        this['category'] = category;
        return this;
    }
    public withSubCategory(subCategory: ComponentSubCategory): CreateComponentResponse {
        this['sub_category'] = subCategory;
        return this;
    }
    public set subCategory(subCategory: ComponentSubCategory  | undefined) {
        this['sub_category'] = subCategory;
    }
    public get subCategory(): ComponentSubCategory | undefined {
        return this['sub_category'];
    }
    public withDescription(description: string): CreateComponentResponse {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): CreateComponentResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withApplicationId(applicationId: string): CreateComponentResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withSource(source: SourceObject): CreateComponentResponse {
        this['source'] = source;
        return this;
    }
    public withBuild(build: BuildInfo): CreateComponentResponse {
        this['build'] = build;
        return this;
    }
    public withPipelineIds(pipelineIds: Array<string>): CreateComponentResponse {
        this['pipeline_ids'] = pipelineIds;
        return this;
    }
    public set pipelineIds(pipelineIds: Array<string>  | undefined) {
        this['pipeline_ids'] = pipelineIds;
    }
    public get pipelineIds(): Array<string> | undefined {
        return this['pipeline_ids'];
    }
    public withCreateTime(createTime: number): CreateComponentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): CreateComponentResponse {
        this['creator'] = creator;
        return this;
    }
    public withUpdateTime(updateTime: number): CreateComponentResponse {
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