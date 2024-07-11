

export class ListEnvironmentHostsRequest {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    private 'key_field'?: string;
    private 'as_proxy'?: boolean;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public constructor(applicationId?: string, environmentId?: string) { 
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
    }
    public withApplicationId(applicationId: string): ListEnvironmentHostsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ListEnvironmentHostsRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withKeyField(keyField: string): ListEnvironmentHostsRequest {
        this['key_field'] = keyField;
        return this;
    }
    public set keyField(keyField: string  | undefined) {
        this['key_field'] = keyField;
    }
    public get keyField(): string | undefined {
        return this['key_field'];
    }
    public withAsProxy(asProxy: boolean): ListEnvironmentHostsRequest {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withPageIndex(pageIndex: number): ListEnvironmentHostsRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListEnvironmentHostsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}