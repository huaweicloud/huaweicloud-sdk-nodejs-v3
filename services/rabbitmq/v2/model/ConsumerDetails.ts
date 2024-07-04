import { ChannelDetails } from './ChannelDetails';


export class ConsumerDetails {
    private 'consumer_tag'?: string;
    private 'channel_details'?: ChannelDetails;
    private 'ack_required'?: boolean;
    private 'prefetch_count'?: number;
    public constructor() { 
    }
    public withConsumerTag(consumerTag: string): ConsumerDetails {
        this['consumer_tag'] = consumerTag;
        return this;
    }
    public set consumerTag(consumerTag: string  | undefined) {
        this['consumer_tag'] = consumerTag;
    }
    public get consumerTag(): string | undefined {
        return this['consumer_tag'];
    }
    public withChannelDetails(channelDetails: ChannelDetails): ConsumerDetails {
        this['channel_details'] = channelDetails;
        return this;
    }
    public set channelDetails(channelDetails: ChannelDetails  | undefined) {
        this['channel_details'] = channelDetails;
    }
    public get channelDetails(): ChannelDetails | undefined {
        return this['channel_details'];
    }
    public withAckRequired(ackRequired: boolean): ConsumerDetails {
        this['ack_required'] = ackRequired;
        return this;
    }
    public set ackRequired(ackRequired: boolean  | undefined) {
        this['ack_required'] = ackRequired;
    }
    public get ackRequired(): boolean | undefined {
        return this['ack_required'];
    }
    public withPrefetchCount(prefetchCount: number): ConsumerDetails {
        this['prefetch_count'] = prefetchCount;
        return this;
    }
    public set prefetchCount(prefetchCount: number  | undefined) {
        this['prefetch_count'] = prefetchCount;
    }
    public get prefetchCount(): number | undefined {
        return this['prefetch_count'];
    }
}