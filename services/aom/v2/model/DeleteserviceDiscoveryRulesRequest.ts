

export class DeleteserviceDiscoveryRulesRequest {
    public appRulesIds?: Array<string>;
    public constructor(appRulesIds?: Array<string>) { 
        this['appRulesIds'] = appRulesIds;
    }
    public withAppRulesIds(appRulesIds: Array<string>): DeleteserviceDiscoveryRulesRequest {
        this['appRulesIds'] = appRulesIds;
        return this;
    }
}