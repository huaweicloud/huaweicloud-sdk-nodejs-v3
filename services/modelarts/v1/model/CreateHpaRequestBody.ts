import { HpaRules } from './HpaRules';


export class CreateHpaRequestBody {
    public type?: string;
    private 'target_resource_id'?: string;
    private 'target_resource_type'?: string;
    private 'hpa_rules'?: Array<HpaRules>;
    private 'workspace_id'?: string;
    public constructor(type?: string, targetResourceId?: string, targetResourceType?: string, hpaRules?: Array<HpaRules>) { 
        this['type'] = type;
        this['target_resource_id'] = targetResourceId;
        this['target_resource_type'] = targetResourceType;
        this['hpa_rules'] = hpaRules;
    }
    public withType(type: string): CreateHpaRequestBody {
        this['type'] = type;
        return this;
    }
    public withTargetResourceId(targetResourceId: string): CreateHpaRequestBody {
        this['target_resource_id'] = targetResourceId;
        return this;
    }
    public set targetResourceId(targetResourceId: string  | undefined) {
        this['target_resource_id'] = targetResourceId;
    }
    public get targetResourceId(): string | undefined {
        return this['target_resource_id'];
    }
    public withTargetResourceType(targetResourceType: string): CreateHpaRequestBody {
        this['target_resource_type'] = targetResourceType;
        return this;
    }
    public set targetResourceType(targetResourceType: string  | undefined) {
        this['target_resource_type'] = targetResourceType;
    }
    public get targetResourceType(): string | undefined {
        return this['target_resource_type'];
    }
    public withHpaRules(hpaRules: Array<HpaRules>): CreateHpaRequestBody {
        this['hpa_rules'] = hpaRules;
        return this;
    }
    public set hpaRules(hpaRules: Array<HpaRules>  | undefined) {
        this['hpa_rules'] = hpaRules;
    }
    public get hpaRules(): Array<HpaRules> | undefined {
        return this['hpa_rules'];
    }
    public withWorkspaceId(workspaceId: string): CreateHpaRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}