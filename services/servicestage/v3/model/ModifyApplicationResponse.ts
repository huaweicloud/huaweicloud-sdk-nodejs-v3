import { ApplicationLabels } from './ApplicationLabels';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyApplicationResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'component_count'?: number;
    public creator?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public description?: string;
    public labels?: Array<ApplicationLabels>;
    public constructor() { 
        super();
    }
    public withId(id: string): ModifyApplicationResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModifyApplicationResponse {
        this['name'] = name;
        return this;
    }
    public withComponentCount(componentCount: number): ModifyApplicationResponse {
        this['component_count'] = componentCount;
        return this;
    }
    public set componentCount(componentCount: number  | undefined) {
        this['component_count'] = componentCount;
    }
    public get componentCount(): number | undefined {
        return this['component_count'];
    }
    public withCreator(creator: string): ModifyApplicationResponse {
        this['creator'] = creator;
        return this;
    }
    public withProjectId(projectId: string): ModifyApplicationResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyApplicationResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): ModifyApplicationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ModifyApplicationResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): ModifyApplicationResponse {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<ApplicationLabels>): ModifyApplicationResponse {
        this['labels'] = labels;
        return this;
    }
}