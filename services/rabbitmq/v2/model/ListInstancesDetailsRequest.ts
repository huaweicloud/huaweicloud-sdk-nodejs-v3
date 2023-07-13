

export class ListInstancesDetailsRequest {
    public engine?: string;
    public name?: string;
    private 'instance_id'?: string | undefined;
    public status?: ListInstancesDetailsRequestStatusEnum;
    private 'include_failure'?: ListInstancesDetailsRequestIncludeFailureEnum | undefined;
    private 'exact_match_name'?: ListInstancesDetailsRequestExactMatchNameEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
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
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withStatus(status: ListInstancesDetailsRequestStatusEnum): ListInstancesDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withIncludeFailure(includeFailure: ListInstancesDetailsRequestIncludeFailureEnum): ListInstancesDetailsRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: ListInstancesDetailsRequestIncludeFailureEnum | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure() {
        return this['include_failure'];
    }
    public withExactMatchName(exactMatchName: ListInstancesDetailsRequestExactMatchNameEnum): ListInstancesDetailsRequest {
        this['exact_match_name'] = exactMatchName;
        return this;
    }
    public set exactMatchName(exactMatchName: ListInstancesDetailsRequestExactMatchNameEnum | undefined) {
        this['exact_match_name'] = exactMatchName;
    }
    public get exactMatchName() {
        return this['exact_match_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstancesDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
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
    CREATEFAILED = 'CREATEFAILED',
    RUNNING = 'RUNNING',
    ERROR = 'ERROR',
    STARTING = 'STARTING',
    RESTARTING = 'RESTARTING',
    CLOSING = 'CLOSING',
    FROZEN = 'FROZEN'
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
