import { ClientData } from './ClientData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsumerConnectionsForRocketMqResponse extends SdkResponse {
    private 'group_name'?: string;
    public online?: boolean;
    private 'subscription_consistency'?: boolean;
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public clients?: Array<ClientData>;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): ShowConsumerConnectionsForRocketMqResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOnline(online: boolean): ShowConsumerConnectionsForRocketMqResponse {
        this['online'] = online;
        return this;
    }
    public withSubscriptionConsistency(subscriptionConsistency: boolean): ShowConsumerConnectionsForRocketMqResponse {
        this['subscription_consistency'] = subscriptionConsistency;
        return this;
    }
    public set subscriptionConsistency(subscriptionConsistency: boolean  | undefined) {
        this['subscription_consistency'] = subscriptionConsistency;
    }
    public get subscriptionConsistency(): boolean | undefined {
        return this['subscription_consistency'];
    }
    public withTotal(total: number): ShowConsumerConnectionsForRocketMqResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ShowConsumerConnectionsForRocketMqResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowConsumerConnectionsForRocketMqResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withClients(clients: Array<ClientData>): ShowConsumerConnectionsForRocketMqResponse {
        this['clients'] = clients;
        return this;
    }
}