

export class CinderListQuotasRequest {
    private 'target_project_id': string | undefined;
    public usage: CinderListQuotasRequestUsageEnum;
    public constructor(targetProjectId?: any, usage?: any) { 
        this['target_project_id'] = targetProjectId;
        this['usage'] = usage;
    }
    public withTargetProjectId(targetProjectId: string): CinderListQuotasRequest {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId() {
        return this['target_project_id'];
    }
    public withUsage(usage: CinderListQuotasRequestUsageEnum): CinderListQuotasRequest {
        this['usage'] = usage;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CinderListQuotasRequestUsageEnum {
    TRUE = 'True'
}
