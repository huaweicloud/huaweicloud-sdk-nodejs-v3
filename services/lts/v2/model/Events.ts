import { Annotations } from './Annotations';
import { Metadata } from './Metadata';


export class Events {
    public annotations?: Annotations;
    public metadata?: Metadata;
    private 'arrives_at'?: number;
    private 'ends_at'?: number;
    public id?: string;
    private 'starts_at'?: number;
    public timeout?: number;
    public type?: string;
    public constructor(annotations?: Annotations, metadata?: Metadata, arrivesAt?: number, endsAt?: number, id?: string, startsAt?: number, timeout?: number, type?: string) { 
        this['annotations'] = annotations;
        this['metadata'] = metadata;
        this['arrives_at'] = arrivesAt;
        this['ends_at'] = endsAt;
        this['id'] = id;
        this['starts_at'] = startsAt;
        this['timeout'] = timeout;
        this['type'] = type;
    }
    public withAnnotations(annotations: Annotations): Events {
        this['annotations'] = annotations;
        return this;
    }
    public withMetadata(metadata: Metadata): Events {
        this['metadata'] = metadata;
        return this;
    }
    public withArrivesAt(arrivesAt: number): Events {
        this['arrives_at'] = arrivesAt;
        return this;
    }
    public set arrivesAt(arrivesAt: number  | undefined) {
        this['arrives_at'] = arrivesAt;
    }
    public get arrivesAt(): number | undefined {
        return this['arrives_at'];
    }
    public withEndsAt(endsAt: number): Events {
        this['ends_at'] = endsAt;
        return this;
    }
    public set endsAt(endsAt: number  | undefined) {
        this['ends_at'] = endsAt;
    }
    public get endsAt(): number | undefined {
        return this['ends_at'];
    }
    public withId(id: string): Events {
        this['id'] = id;
        return this;
    }
    public withStartsAt(startsAt: number): Events {
        this['starts_at'] = startsAt;
        return this;
    }
    public set startsAt(startsAt: number  | undefined) {
        this['starts_at'] = startsAt;
    }
    public get startsAt(): number | undefined {
        return this['starts_at'];
    }
    public withTimeout(timeout: number): Events {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: string): Events {
        this['type'] = type;
        return this;
    }
}