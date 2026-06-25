

export class ListInstanceBackupSummaryRequest {
    public engine?: string;
    private 'order_field'?: string;
    private 'order_rule'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: string;
    public constructor() { 
    }
    public withEngine(engine: string): ListInstanceBackupSummaryRequest {
        this['engine'] = engine;
        return this;
    }
    public withOrderField(orderField: string): ListInstanceBackupSummaryRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withOrderRule(orderRule: string): ListInstanceBackupSummaryRequest {
        this['order_rule'] = orderRule;
        return this;
    }
    public set orderRule(orderRule: string  | undefined) {
        this['order_rule'] = orderRule;
    }
    public get orderRule(): string | undefined {
        return this['order_rule'];
    }
    public withInstanceId(instanceId: string): ListInstanceBackupSummaryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListInstanceBackupSummaryRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withOffset(offset: number): ListInstanceBackupSummaryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceBackupSummaryRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: string): ListInstanceBackupSummaryRequest {
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