

export class CreateOrUpdateStoragePolicyStatementReq {
    public actions?: Array<string>;
    private 'roam_actions'?: Array<string>;
    public constructor(roamActions?: Array<string>) { 
        this['roam_actions'] = roamActions;
    }
    public withActions(actions: Array<string>): CreateOrUpdateStoragePolicyStatementReq {
        this['actions'] = actions;
        return this;
    }
    public withRoamActions(roamActions: Array<string>): CreateOrUpdateStoragePolicyStatementReq {
        this['roam_actions'] = roamActions;
        return this;
    }
    public set roamActions(roamActions: Array<string>  | undefined) {
        this['roam_actions'] = roamActions;
    }
    public get roamActions(): Array<string> | undefined {
        return this['roam_actions'];
    }
}