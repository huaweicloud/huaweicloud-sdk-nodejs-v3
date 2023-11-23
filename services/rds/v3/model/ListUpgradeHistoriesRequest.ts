

export class ListUpgradeHistoriesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public order?: string;
    private 'sort_field'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListUpgradeHistoriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListUpgradeHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUpgradeHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: string): ListUpgradeHistoriesRequest {
        this['order'] = order;
        return this;
    }
    public withSortField(sortField: string): ListUpgradeHistoriesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withXLanguage(xLanguage: string): ListUpgradeHistoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}