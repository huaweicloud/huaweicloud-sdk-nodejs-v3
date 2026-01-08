import { PolicyLabel } from './PolicyLabel';


export class TopologyLabels {
    public l7policies?: Array<PolicyLabel>;
    public constructor() { 
    }
    public withL7policies(l7policies: Array<PolicyLabel>): TopologyLabels {
        this['l7policies'] = l7policies;
        return this;
    }
}