

export class ListInstancesRequest {
    public engine?: string;
    public name?: string;
    private 'instance_id'?: string | undefined;
    public status?: ListInstancesRequestStatusEnum;
    private 'include_failure'?: ListInstancesRequestIncludeFailureEnum | undefined;
    private 'exact_match_name'?: ListInstancesRequestExactMatchNameEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEngine(engine: string): ListInstancesRequest {
        this['engine'] = engine;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withStatus(status: ListInstancesRequestStatusEnum): ListInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withIncludeFailure(includeFailure: ListInstancesRequestIncludeFailureEnum): ListInstancesRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: ListInstancesRequestIncludeFailureEnum | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure() {
        return this['include_failure'];
    }
    public withExactMatchName(exactMatchName: ListInstancesRequestExactMatchNameEnum): ListInstancesRequest {
        this['exact_match_name'] = exactMatchName;
        return this;
    }
    public set exactMatchName(exactMatchName: ListInstancesRequestExactMatchNameEnum | undefined) {
        this['exact_match_name'] = exactMatchName;
    }
    public get exactMatchName() {
        return this['exact_match_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstancesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestStatusEnum {
    CREATING = 'CREATING',
    RUNNING = 'RUNNING',
    FAULTY = 'FAULTY',
    RESTARTING = 'RESTARTING',
    RESIZING = 'RESIZING',
    RESIZING_FAILED = 'RESIZING FAILED',
    FROZEN = 'FROZEN'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestIncludeFailureEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestExactMatchNameEnum {
    TRUE = 'true',
    FALSE = 'false'
}
