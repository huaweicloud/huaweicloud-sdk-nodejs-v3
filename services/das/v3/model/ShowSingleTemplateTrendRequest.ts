

export class ShowSingleTemplateTrendRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'template_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'interval_millis'?: number;
    public constructor(instanceId?: string, templateId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['template_id'] = templateId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ShowSingleTemplateTrendRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowSingleTemplateTrendRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTemplateId(templateId: string): ShowSingleTemplateTrendRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withStartAt(startAt: number): ShowSingleTemplateTrendRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowSingleTemplateTrendRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withIntervalMillis(intervalMillis: number): ShowSingleTemplateTrendRequest {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
}