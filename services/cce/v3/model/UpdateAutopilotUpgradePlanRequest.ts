import { DelayUpgradePlanRequestBody } from './DelayUpgradePlanRequestBody';


export class UpdateAutopilotUpgradePlanRequest {
    private 'cluster_id'?: string;
    private 'upgrade_plan_id'?: string;
    private 'Content-Type'?: string;
    public body?: DelayUpgradePlanRequestBody;
    public constructor(clusterId?: string, upgradePlanId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['upgrade_plan_id'] = upgradePlanId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpdateAutopilotUpgradePlanRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withUpgradePlanId(upgradePlanId: string): UpdateAutopilotUpgradePlanRequest {
        this['upgrade_plan_id'] = upgradePlanId;
        return this;
    }
    public set upgradePlanId(upgradePlanId: string  | undefined) {
        this['upgrade_plan_id'] = upgradePlanId;
    }
    public get upgradePlanId(): string | undefined {
        return this['upgrade_plan_id'];
    }
    public withContentType(contentType: string): UpdateAutopilotUpgradePlanRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DelayUpgradePlanRequestBody): UpdateAutopilotUpgradePlanRequest {
        this['body'] = body;
        return this;
    }
}