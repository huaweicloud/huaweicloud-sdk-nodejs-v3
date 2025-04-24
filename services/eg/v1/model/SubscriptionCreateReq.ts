import { SubscriptionSource } from './SubscriptionSource';
import { SubscriptionTarget } from './SubscriptionTarget';


export class SubscriptionCreateReq {
    public name?: string;
    public description?: string;
    private 'channel_id'?: string;
    public sources?: Array<SubscriptionSource>;
    public targets?: Array<SubscriptionTarget>;
    public constructor(name?: string, channelId?: string, sources?: Array<SubscriptionSource>, targets?: Array<SubscriptionTarget>) { 
        this['name'] = name;
        this['channel_id'] = channelId;
        this['sources'] = sources;
        this['targets'] = targets;
    }
    public withName(name: string): SubscriptionCreateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SubscriptionCreateReq {
        this['description'] = description;
        return this;
    }
    public withChannelId(channelId: string): SubscriptionCreateReq {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withSources(sources: Array<SubscriptionSource>): SubscriptionCreateReq {
        this['sources'] = sources;
        return this;
    }
    public withTargets(targets: Array<SubscriptionTarget>): SubscriptionCreateReq {
        this['targets'] = targets;
        return this;
    }
}