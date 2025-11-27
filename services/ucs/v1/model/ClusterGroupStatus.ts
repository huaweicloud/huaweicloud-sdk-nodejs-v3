import { ClusterGroupCondition } from './ClusterGroupCondition';


export class ClusterGroupStatus {
    public conditions?: Array<ClusterGroupCondition>;
    public constructor() { 
    }
    public withConditions(conditions: Array<ClusterGroupCondition>): ClusterGroupStatus {
        this['conditions'] = conditions;
        return this;
    }
}