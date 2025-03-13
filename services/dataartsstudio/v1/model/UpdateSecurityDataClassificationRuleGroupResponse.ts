import { DataClassificationRuleQueryDTO } from './DataClassificationRuleQueryDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecurityDataClassificationRuleGroupResponse extends SdkResponse {
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
    public withUuid(uuid: string): UpdateSecurityDataClassificationRuleGroupResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): UpdateSecurityDataClassificationRuleGroupResponse {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<DataClassificationRuleQueryDTO>): UpdateSecurityDataClassificationRuleGroupResponse {
        this['rules'] = rules;
        return this;
    }
    public withDescription(description: string): UpdateSecurityDataClassificationRuleGroupResponse {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): UpdateSecurityDataClassificationRuleGroupResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedAt(createdAt: number): UpdateSecurityDataClassificationRuleGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedBy(updatedBy: string): UpdateSecurityDataClassificationRuleGroupResponse {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withUpdatedAt(updatedAt: number): UpdateSecurityDataClassificationRuleGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): UpdateSecurityDataClassificationRuleGroupResponse {
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