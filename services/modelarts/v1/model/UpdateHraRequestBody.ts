import { HraRuleUpdateRequest } from './HraRuleUpdateRequest';


export class UpdateHraRequestBody {
    private 'workspace_id'?: string;
    private 'hra_rules'?: Array<HraRuleUpdateRequest>;
    public disable?: boolean;
    private 'min_replicas'?: number;
    private 'max_replicas'?: number;
    private 'scale_window'?: number;
    public constructor(workspaceId?: string, hraRules?: Array<HraRuleUpdateRequest>) { 
        this['workspace_id'] = workspaceId;
        this['hra_rules'] = hraRules;
    }
    public withWorkspaceId(workspaceId: string): UpdateHraRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withHraRules(hraRules: Array<HraRuleUpdateRequest>): UpdateHraRequestBody {
        this['hra_rules'] = hraRules;
        return this;
    }
    public set hraRules(hraRules: Array<HraRuleUpdateRequest>  | undefined) {
        this['hra_rules'] = hraRules;
    }
    public get hraRules(): Array<HraRuleUpdateRequest> | undefined {
        return this['hra_rules'];
    }
    public withDisable(disable: boolean): UpdateHraRequestBody {
        this['disable'] = disable;
        return this;
    }
    public withMinReplicas(minReplicas: number): UpdateHraRequestBody {
        this['min_replicas'] = minReplicas;
        return this;
    }
    public set minReplicas(minReplicas: number  | undefined) {
        this['min_replicas'] = minReplicas;
    }
    public get minReplicas(): number | undefined {
        return this['min_replicas'];
    }
    public withMaxReplicas(maxReplicas: number): UpdateHraRequestBody {
        this['max_replicas'] = maxReplicas;
        return this;
    }
    public set maxReplicas(maxReplicas: number  | undefined) {
        this['max_replicas'] = maxReplicas;
    }
    public get maxReplicas(): number | undefined {
        return this['max_replicas'];
    }
    public withScaleWindow(scaleWindow: number): UpdateHraRequestBody {
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