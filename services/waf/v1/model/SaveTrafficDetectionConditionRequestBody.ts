import { TrafficDetectionConditionDTO } from './TrafficDetectionConditionDTO';


export class SaveTrafficDetectionConditionRequestBody {
    public condition?: TrafficDetectionConditionDTO;
    public constructor() { 
    }
    public withCondition(condition: TrafficDetectionConditionDTO): SaveTrafficDetectionConditionRequestBody {
        this['condition'] = condition;
        return this;
    }
}