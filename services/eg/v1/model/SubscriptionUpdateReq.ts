import { SubscriptionSource } from './SubscriptionSource';
import { SubscriptionTarget } from './SubscriptionTarget';


export class SubscriptionUpdateReq {
    public description?: string;
    public sources?: Array<SubscriptionSource>;
    public targets?: Array<SubscriptionTarget>;
    public constructor() { 
    }
    public withDescription(description: string): SubscriptionUpdateReq {
        this['description'] = description;
        return this;
    }
    public withSources(sources: Array<SubscriptionSource>): SubscriptionUpdateReq {
        this['sources'] = sources;
        return this;
    }
    public withTargets(targets: Array<SubscriptionTarget>): SubscriptionUpdateReq {
        this['targets'] = targets;
        return this;
    }
}