import { Metadata } from './Metadata';


export class Event {
    public metadata: Metadata;
    private 'starts_at': number | undefined;
    public constructor(metadata?: any, startsAt?: any) { 
        this['metadata'] = metadata;
        this['starts_at'] = startsAt;
    }
    public withMetadata(metadata: Metadata): Event {
        this['metadata'] = metadata;
        return this;
    }
    public withStartsAt(startsAt: number): Event {
        this['starts_at'] = startsAt;
        return this;
    }
    public set startsAt(startsAt: number | undefined) {
        this['starts_at'] = startsAt;
    }
    public get startsAt() {
        return this['starts_at'];
    }
}