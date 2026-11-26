import { CedarPolicy } from './CedarPolicy';


export class PolicyDefinition {
    public cedar?: CedarPolicy;
    public constructor(cedar?: CedarPolicy) { 
        this['cedar'] = cedar;
    }
    public withCedar(cedar: CedarPolicy): PolicyDefinition {
        this['cedar'] = cedar;
        return this;
    }
}