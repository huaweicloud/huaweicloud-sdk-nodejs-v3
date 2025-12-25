import { CreatePreProcessRulesRequestBodyPreprocessRules } from './CreatePreProcessRulesRequestBodyPreprocessRules';


export class CreatePreProcessRulesRequestBody {
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'mapping_id'?: string;
    private 'preprocess_rules'?: Array<CreatePreProcessRulesRequestBodyPreprocessRules>;
    public constructor(mappingId?: string) { 
        this['mapping_id'] = mappingId;
    }
    public withProjectId(projectId: string): CreatePreProcessRulesRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): CreatePreProcessRulesRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMappingId(mappingId: string): CreatePreProcessRulesRequestBody {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withPreprocessRules(preprocessRules: Array<CreatePreProcessRulesRequestBodyPreprocessRules>): CreatePreProcessRulesRequestBody {
        this['preprocess_rules'] = preprocessRules;
        return this;
    }
    public set preprocessRules(preprocessRules: Array<CreatePreProcessRulesRequestBodyPreprocessRules>  | undefined) {
        this['preprocess_rules'] = preprocessRules;
    }
    public get preprocessRules(): Array<CreatePreProcessRulesRequestBodyPreprocessRules> | undefined {
        return this['preprocess_rules'];
    }
}