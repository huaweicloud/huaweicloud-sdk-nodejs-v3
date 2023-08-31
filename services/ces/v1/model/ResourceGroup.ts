import { MetricsDimension } from './MetricsDimension';


export class ResourceGroup {
    public namespace?: string;
    public dimensions?: Array<MetricsDimension>;
    public status?: string;
    private 'event_type'?: number;
    public constructor() { 
    }
    public withNamespace(namespace: string): ResourceGroup {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<MetricsDimension>): ResourceGroup {
        this['dimensions'] = dimensions;
        return this;
    }
    public withStatus(status: string): ResourceGroup {
        this['status'] = status;
        return this;
    }
    public withEventType(eventType: number): ResourceGroup {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
}