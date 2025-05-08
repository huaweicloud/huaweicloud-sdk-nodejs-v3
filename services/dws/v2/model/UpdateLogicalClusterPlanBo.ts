import { UpdateLogicalClusterPlanActions } from './UpdateLogicalClusterPlanActions';


export class UpdateLogicalClusterPlanBo {
    public actions?: Array<UpdateLogicalClusterPlanActions>;
    public constructor(actions?: Array<UpdateLogicalClusterPlanActions>) { 
        this['actions'] = actions;
    }
    public withActions(actions: Array<UpdateLogicalClusterPlanActions>): UpdateLogicalClusterPlanBo {
        this['actions'] = actions;
        return this;
    }
}