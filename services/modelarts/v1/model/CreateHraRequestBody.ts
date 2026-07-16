import { HraRuleCreateRequest } from './HraRuleCreateRequest';


export class CreateHraRequestBody {
    private 'workspace_id'?: string;
    private 'hra_rules'?: Array<HraRuleCreateRequest>;
    public disable?: boolean;
    private 'min_replicas'?: number;
    private 'max_replicas'?: number;
    private 'scale_window'?: number;
    public constructor(workspaceId?: string, hraRules?: Array<HraRuleCreateRequest>) { 
        this['workspace_id'] = workspaceId;
        this['hra_rules'] = hraRules;
    }
    public withWorkspaceId(workspaceId: string): CreateHraRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withHraRules(hraRules: Array<HraRuleCreateRequest>): CreateHraRequestBody {
        this['hra_rules'] = hraRules;
        return this;
    }
    public set hraRules(hraRules: Array<HraRuleCreateRequest>  | undefined) {
        this['hra_rules'] = hraRules;
    }
    public get hraRules(): Array<HraRuleCreateRequest> | undefined {
        return this['hra_rules'];
    }
    public withDisable(disable: boolean): CreateHraRequestBody {
        this['disable'] = disable;
        return this;
    }
    public withMinReplicas(minReplicas: number): CreateHraRequestBody {
        this['min_replicas'] = minReplicas;
        return this;
    }
    public set minReplicas(minReplicas: number  | undefined) {
        this['min_replicas'] = minReplicas;
    }
    public get minReplicas(): number | undefined {
        return this['min_replicas'];
    }
    public withMaxReplicas(maxReplicas: number): CreateHraRequestBody {
        this['max_replicas'] = maxReplicas;
        return this;
    }
    public set maxReplicas(maxReplicas: number  | undefined) {
        this['max_replicas'] = maxReplicas;
    }
    public get maxReplicas(): number | undefined {
        return this['max_replicas'];
    }
    public withScaleWindow(scaleWindow: number): CreateHraRequestBody {
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