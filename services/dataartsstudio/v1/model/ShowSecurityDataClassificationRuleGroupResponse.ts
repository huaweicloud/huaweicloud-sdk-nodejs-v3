import { DataClassificationRuleQueryDTO } from './DataClassificationRuleQueryDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityDataClassificationRuleGroupResponse extends SdkResponse {
    public uuid?: string;
    public name?: string;
    public rules?: Array<DataClassificationRuleQueryDTO>;
    public description?: string;
    private 'created_by'?: string;
    private 'created_at'?: number;
    private 'updated_by'?: string;
    private 'updated_at'?: number;
    private 'project_id'?: string;
    public constructor() { 
        super();
    }
    public withUuid(uuid: string): ShowSecurityDataClassificationRuleGroupResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): ShowSecurityDataClassificationRuleGroupResponse {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<DataClassificationRuleQueryDTO>): ShowSecurityDataClassificationRuleGroupResponse {
        this['rules'] = rules;
        return this;
    }
    public withDescription(description: string): ShowSecurityDataClassificationRuleGroupResponse {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): ShowSecurityDataClassificationRuleGroupResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedAt(createdAt: number): ShowSecurityDataClassificationRuleGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedBy(updatedBy: string): ShowSecurityDataClassificationRuleGroupResponse {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withUpdatedAt(updatedAt: number): ShowSecurityDataClassificationRuleGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ShowSecurityDataClassificationRuleGroupResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}