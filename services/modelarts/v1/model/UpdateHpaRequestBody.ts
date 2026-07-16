import { HpaRules } from './HpaRules';


export class UpdateHpaRequestBody {
    public id?: string;
    private 'hpa_rules'?: Array<HpaRules>;
    private 'workspace_id'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateHpaRequestBody {
        this['id'] = id;
        return this;
    }
    public withHpaRules(hpaRules: Array<HpaRules>): UpdateHpaRequestBody {
        this['hpa_rules'] = hpaRules;
        return this;
    }
    public set hpaRules(hpaRules: Array<HpaRules>  | undefined) {
        this['hpa_rules'] = hpaRules;
    }
    public get hpaRules(): Array<HpaRules> | undefined {
        return this['hpa_rules'];
    }
    public withWorkspaceId(workspaceId: string): UpdateHpaRequestBody {
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