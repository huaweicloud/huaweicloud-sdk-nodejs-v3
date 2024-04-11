

export class ListInstancesRequest {
    public engine?: ListInstancesRequestEngineEnum | string;
    public name?: string;
    private 'instance_id'?: string;
    public status?: ListInstancesRequestStatusEnum | string;
    private 'include_failure'?: ListInstancesRequestIncludeFailureEnum | string;
    private 'exact_match_name'?: ListInstancesRequestExactMatchNameEnum | string;
    private 'enterprise_project_id'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListInstancesRequestEngineEnum | string): ListInstancesRequest {
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
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: ListInstancesRequestStatusEnum | string): ListInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withIncludeFailure(includeFailure: ListInstancesRequestIncludeFailureEnum | string): ListInstancesRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: ListInstancesRequestIncludeFailureEnum | string  | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure(): ListInstancesRequestIncludeFailureEnum | string | undefined {
        return this['include_failure'];
    }
    public withExactMatchName(exactMatchName: ListInstancesRequestExactMatchNameEnum | string): ListInstancesRequest {
        this['exact_match_name'] = exactMatchName;
        return this;
    }
    public set exactMatchName(exactMatchName: ListInstancesRequestExactMatchNameEnum | string  | undefined) {
        this['exact_match_name'] = exactMatchName;
    }
    public get exactMatchName(): ListInstancesRequestExactMatchNameEnum | string | undefined {
        return this['exact_match_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstancesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: string): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestEngineEnum {
    KAFKA = 'kafka'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestStatusEnum {
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
