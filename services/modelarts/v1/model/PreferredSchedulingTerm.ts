import { NodeSelectorTerm } from './NodeSelectorTerm';


export class PreferredSchedulingTerm {
    public weight?: number;
    public preference?: NodeSelectorTerm;
    public constructor() { 
    }
    public withWeight(weight: number): PreferredSchedulingTerm {
        this['weight'] = weight;
        return this;
    }
    public withPreference(preference: NodeSelectorTerm): PreferredSchedulingTerm {
        this['preference'] = preference;
        return this;
    }
}