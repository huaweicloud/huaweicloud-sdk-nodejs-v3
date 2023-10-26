

export class EventModel {
    private 'starts_at'?: number;
    private 'ends_at'?: number;
    public timeout?: number;
    public metadata?: object;
    public annotations?: object;
    private 'attach_rule'?: object;
    public id?: string;
    public constructor() { 
    }
    public withStartsAt(startsAt: number): EventModel {
        this['starts_at'] = startsAt;
        return this;
    }
    public set startsAt(startsAt: number  | undefined) {
        this['starts_at'] = startsAt;
    }
    public get startsAt(): number | undefined {
        return this['starts_at'];
    }
    public withEndsAt(endsAt: number): EventModel {
        this['ends_at'] = endsAt;
        return this;
    }
    public set endsAt(endsAt: number  | undefined) {
        this['ends_at'] = endsAt;
    }
    public get endsAt(): number | undefined {
        return this['ends_at'];
    }
    public withTimeout(timeout: number): EventModel {
        this['timeout'] = timeout;
        return this;
    }
    public withMetadata(metadata: object): EventModel {
        this['metadata'] = metadata;
        return this;
    }
    public withAnnotations(annotations: object): EventModel {
        this['annotations'] = annotations;
        return this;
    }
    public withAttachRule(attachRule: object): EventModel {
        this['attach_rule'] = attachRule;
        return this;
    }
    public set attachRule(attachRule: object  | undefined) {
        this['attach_rule'] = attachRule;
    }
    public get attachRule(): object | undefined {
        return this['attach_rule'];
    }
    public withId(id: string): EventModel {
        this['id'] = id;
        return this;
    }
}