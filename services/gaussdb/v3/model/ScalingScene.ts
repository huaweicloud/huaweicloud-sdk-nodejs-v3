import { ScalingCondition } from './ScalingCondition';


export class ScalingScene {
    public conditions?: Array<ScalingCondition>;
    public constructor() { 
    }
    public withConditions(conditions: Array<ScalingCondition>): ScalingScene {
        this['conditions'] = conditions;
        return this;
    }
}