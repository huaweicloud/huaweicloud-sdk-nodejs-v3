

export class ListEventModel {
    private 'starts_at'?: number;
    private 'ends_at'?: number;
    public timeout?: number;
    public metadata?: { [key: string]: string; };
    public annotations?: { [key: string]: object; };
    private 'attach_rule'?: { [key: string]: object; };
    public id?: string;
    private 'event_sn'?: string;
    private 'arrives_at'?: number;
    private 'enterprise_project_id'?: string;
    public policy?: { [key: string]: object; };
    public constructor() { 
    }
    public withStartsAt(startsAt: number): ListEventModel {
        this['starts_at'] = startsAt;
        return this;
    }
    public set startsAt(startsAt: number  | undefined) {
        this['starts_at'] = startsAt;
    }
    public get startsAt(): number | undefined {
        return this['starts_at'];
    }
    public withEndsAt(endsAt: number): ListEventModel {
        this['ends_at'] = endsAt;
        return this;
    }
    public set endsAt(endsAt: number  | undefined) {
        this['ends_at'] = endsAt;
    }
    public get endsAt(): number | undefined {
        return this['ends_at'];
    }
    public withTimeout(timeout: number): ListEventModel {
        this['timeout'] = timeout;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): ListEventModel {
        this['metadata'] = metadata;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: object; }): ListEventModel {
        this['annotations'] = annotations;
        return this;
    }
    public withAttachRule(attachRule: { [key: string]: object; }): ListEventModel {
        this['attach_rule'] = attachRule;
        return this;
    }
    public set attachRule(attachRule: { [key: string]: object; }  | undefined) {
        this['attach_rule'] = attachRule;
    }
    public get attachRule(): { [key: string]: object; } | undefined {
        return this['attach_rule'];
    }
    public withId(id: string): ListEventModel {
        this['id'] = id;
        return this;
    }
    public withEventSn(eventSn: string): ListEventModel {
        this['event_sn'] = eventSn;
        return this;
    }
    public set eventSn(eventSn: string  | undefined) {
        this['event_sn'] = eventSn;
    }
    public get eventSn(): string | undefined {
        return this['event_sn'];
    }
    public withArrivesAt(arrivesAt: number): ListEventModel {
        this['arrives_at'] = arrivesAt;
        return this;
    }
    public set arrivesAt(arrivesAt: number  | undefined) {
        this['arrives_at'] = arrivesAt;
    }
    public get arrivesAt(): number | undefined {
        return this['arrives_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicy(policy: { [key: string]: object; }): ListEventModel {
        this['policy'] = policy;
        return this;
    }
}