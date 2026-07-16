import { HraRuleResponse } from './HraRuleResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInferHraResponse extends SdkResponse {
    public id?: string;
    private 'workspace_id'?: string;
    private 'hra_rules'?: Array<HraRuleResponse>;
    public disable?: boolean;
    private 'policy_status'?: string;
    private 'min_replicas'?: number;
    private 'max_replicas'?: number;
    private 'scale_window'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowInferHraResponse {
        this['id'] = id;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ShowInferHraResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withHraRules(hraRules: Array<HraRuleResponse>): ShowInferHraResponse {
        this['hra_rules'] = hraRules;
        return this;
    }
    public set hraRules(hraRules: Array<HraRuleResponse>  | undefined) {
        this['hra_rules'] = hraRules;
    }
    public get hraRules(): Array<HraRuleResponse> | undefined {
        return this['hra_rules'];
    }
    public withDisable(disable: boolean): ShowInferHraResponse {
        this['disable'] = disable;
        return this;
    }
    public withPolicyStatus(policyStatus: string): ShowInferHraResponse {
        this['policy_status'] = policyStatus;
        return this;
    }
    public set policyStatus(policyStatus: string  | undefined) {
        this['policy_status'] = policyStatus;
    }
    public get policyStatus(): string | undefined {
        return this['policy_status'];
    }
    public withMinReplicas(minReplicas: number): ShowInferHraResponse {
        this['min_replicas'] = minReplicas;
        return this;
    }
    public set minReplicas(minReplicas: number  | undefined) {
        this['min_replicas'] = minReplicas;
    }
    public get minReplicas(): number | undefined {
        return this['min_replicas'];
    }
    public withMaxReplicas(maxReplicas: number): ShowInferHraResponse {
        this['max_replicas'] = maxReplicas;
        return this;
    }
    public set maxReplicas(maxReplicas: number  | undefined) {
        this['max_replicas'] = maxReplicas;
    }
    public get maxReplicas(): number | undefined {
        return this['max_replicas'];
    }
    public withScaleWindow(scaleWindow: number): ShowInferHraResponse {
        this['scale_window'] = scaleWindow;
        return this;
    }
    public set scaleWindow(scaleWindow: number  | undefined) {
        this['scale_window'] = scaleWindow;
    }
    public get scaleWindow(): number | undefined {
        return this['scale_window'];
    }
}