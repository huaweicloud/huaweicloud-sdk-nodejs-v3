import { ScenarioAnnotationDTO } from './ScenarioAnnotationDTO';
import { UserTagDTO } from './UserTagDTO';


export class UpdateBotMTenantPolicyRequestBody {
    private 'user_tag'?: UserTagDTO;
    private 'scenario_annotations'?: Array<ScenarioAnnotationDTO>;
    public constructor() { 
    }
    public withUserTag(userTag: UserTagDTO): UpdateBotMTenantPolicyRequestBody {
        this['user_tag'] = userTag;
        return this;
    }
    public set userTag(userTag: UserTagDTO  | undefined) {
        this['user_tag'] = userTag;
    }
    public get userTag(): UserTagDTO | undefined {
        return this['user_tag'];
    }
    public withScenarioAnnotations(scenarioAnnotations: Array<ScenarioAnnotationDTO>): UpdateBotMTenantPolicyRequestBody {
        this['scenario_annotations'] = scenarioAnnotations;
        return this;
    }
    public set scenarioAnnotations(scenarioAnnotations: Array<ScenarioAnnotationDTO>  | undefined) {
        this['scenario_annotations'] = scenarioAnnotations;
    }
    public get scenarioAnnotations(): Array<ScenarioAnnotationDTO> | undefined {
        return this['scenario_annotations'];
    }
}