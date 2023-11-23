

export class ListInspectionHistoriesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public order?: string;
    private 'sort_field'?: string;
    private 'target_version'?: string;
    private 'is_available'?: boolean;
    private 'X-Language'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInspectionHistoriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListInspectionHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInspectionHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: string): ListInspectionHistoriesRequest {
        this['order'] = order;
        return this;
    }
    public withSortField(sortField: string): ListInspectionHistoriesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withTargetVersion(targetVersion: string): ListInspectionHistoriesRequest {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withIsAvailable(isAvailable: boolean): ListInspectionHistoriesRequest {
        this['is_available'] = isAvailable;
        return this;
    }
    public set isAvailable(isAvailable: boolean  | undefined) {
        this['is_available'] = isAvailable;
    }
    public get isAvailable(): boolean | undefined {
        return this['is_available'];
    }
    public withXLanguage(xLanguage: string): ListInspectionHistoriesRequest {
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