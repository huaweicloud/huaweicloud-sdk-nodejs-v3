import { MetricsDimension } from './MetricsDimension';
import { StatusSchema } from './StatusSchema';


export class ResourceGroup {
    public namespace?: string;
    public dimensions?: Array<MetricsDimension>;
    public status?: StatusSchema;
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
    public withStatus(status: StatusSchema): ResourceGroup {
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