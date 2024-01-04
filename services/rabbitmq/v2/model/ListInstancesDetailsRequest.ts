

export class ListInstancesDetailsRequest {
    public engine?: string;
    public name?: string;
    private 'instance_id'?: string;
    public status?: ListInstancesDetailsRequestStatusEnum | string;
    private 'include_failure'?: ListInstancesDetailsRequestIncludeFailureEnum | string;
    private 'exact_match_name'?: ListInstancesDetailsRequestExactMatchNameEnum | string;
    private 'enterprise_project_id'?: string;
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withEngine(engine: string): ListInstancesDetailsRequest {
        this['engine'] = engine;
        return this;
    }
    public withName(name: string): ListInstancesDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstancesDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: ListInstancesDetailsRequestStatusEnum | string): ListInstancesDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withIncludeFailure(includeFailure: ListInstancesDetailsRequestIncludeFailureEnum | string): ListInstancesDetailsRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: ListInstancesDetailsRequestIncludeFailureEnum | string  | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure(): ListInstancesDetailsRequestIncludeFailureEnum | string | undefined {
        return this['include_failure'];
    }
    public withExactMatchName(exactMatchName: ListInstancesDetailsRequestExactMatchNameEnum | string): ListInstancesDetailsRequest {
        this['exact_match_name'] = exactMatchName;
        return this;
    }
    public set exactMatchName(exactMatchName: ListInstancesDetailsRequestExactMatchNameEnum | string  | undefined) {
        this['exact_match_name'] = exactMatchName;
    }
    public get exactMatchName(): ListInstancesDetailsRequestExactMatchNameEnum | string | undefined {
        return this['exact_match_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstancesDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: string): ListInstancesDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstancesDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesDetailsRequestStatusEnum {
    CREATING = 'CREATING',
    RUNNING = 'RUNNING',
    RESTARTING = 'RESTARTING',
    DELETING = 'DELETING',
    ERROR = 'ERROR',
    CREATEFAILED = 'CREATEFAILED',
    FREEZING = 'FREEZING',
    FROZEN = 'FROZEN',
    EXTENDING = 'EXTENDING',
    SHRINKING = 'SHRINKING',
    EXTENDEDFAILED = 'EXTENDEDFAILED',
    CONFIGURING = 'CONFIGURING',
    ROLLBACK = 'ROLLBACK',
    ROLLBACKFAILED = 'ROLLBACKFAILED',
    VOLUMETYPECHANGING = 'VOLUMETYPECHANGING'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesDetailsRequestIncludeFailureEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesDetailsRequestExactMatchNameEnum {
    TRUE = 'true',
    FALSE = 'false'
}
