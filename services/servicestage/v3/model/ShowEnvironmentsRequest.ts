

export class ShowEnvironmentsRequest {
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ShowEnvironmentsRequestOrderEnum | string;
    public name?: string;
    private 'environment_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowEnvironmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowEnvironmentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ShowEnvironmentsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ShowEnvironmentsRequestOrderEnum | string): ShowEnvironmentsRequest {
        this['order'] = order;
        return this;
    }
    public withName(name: string): ShowEnvironmentsRequest {
        this['name'] = name;
        return this;
    }
    public withEnvironmentId(environmentId: string): ShowEnvironmentsRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowEnvironmentsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEnvironmentsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
