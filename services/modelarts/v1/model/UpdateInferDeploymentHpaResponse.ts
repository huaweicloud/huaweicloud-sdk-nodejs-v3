import { HpaRule } from './HpaRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInferDeploymentHpaResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'target_resource_id'?: string;
    private 'target_resource_type'?: string;
    private 'min_replicas'?: number;
    private 'max_replicas'?: number;
    public status?: string;
    private 'workspace_id'?: string;
    private 'hpa_rules'?: Array<HpaRule>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateInferDeploymentHpaResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateInferDeploymentHpaResponse {
        this['name'] = name;
        return this;
    }
    public withTargetResourceId(targetResourceId: string): UpdateInferDeploymentHpaResponse {
        this['target_resource_id'] = targetResourceId;
        return this;
    }
    public set targetResourceId(targetResourceId: string  | undefined) {
        this['target_resource_id'] = targetResourceId;
    }
    public get targetResourceId(): string | undefined {
        return this['target_resource_id'];
    }
    public withTargetResourceType(targetResourceType: string): UpdateInferDeploymentHpaResponse {
        this['target_resource_type'] = targetResourceType;
        return this;
    }
    public set targetResourceType(targetResourceType: string  | undefined) {
        this['target_resource_type'] = targetResourceType;
    }
    public get targetResourceType(): string | undefined {
        return this['target_resource_type'];
    }
    public withMinReplicas(minReplicas: number): UpdateInferDeploymentHpaResponse {
        this['min_replicas'] = minReplicas;
        return this;
    }
    public set minReplicas(minReplicas: number  | undefined) {
        this['min_replicas'] = minReplicas;
    }
    public get minReplicas(): number | undefined {
        return this['min_replicas'];
    }
    public withMaxReplicas(maxReplicas: number): UpdateInferDeploymentHpaResponse {
        this['max_replicas'] = maxReplicas;
        return this;
    }
    public set maxReplicas(maxReplicas: number  | undefined) {
        this['max_replicas'] = maxReplicas;
    }
    public get maxReplicas(): number | undefined {
        return this['max_replicas'];
    }
    public withStatus(status: string): UpdateInferDeploymentHpaResponse {
        this['status'] = status;
        return this;
    }
    public withWorkspaceId(workspaceId: string): UpdateInferDeploymentHpaResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withHpaRules(hpaRules: Array<HpaRule>): UpdateInferDeploymentHpaResponse {
        this['hpa_rules'] = hpaRules;
        return this;
    }
    public set hpaRules(hpaRules: Array<HpaRule>  | undefined) {
        this['hpa_rules'] = hpaRules;
    }
    public get hpaRules(): Array<HpaRule> | undefined {
        return this['hpa_rules'];
    }
}