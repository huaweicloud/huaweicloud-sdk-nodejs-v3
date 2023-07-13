import { ClientData } from './ClientData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsumerConnectionsResponse extends SdkResponse {
    private 'group_name'?: string | undefined;
    public online?: boolean;
    private 'subscription_consistency'?: boolean | undefined;
    public total?: number;
    private 'next_offset'?: number | undefined;
    private 'previous_offset'?: number | undefined;
    public clients?: Array<ClientData>;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): ShowConsumerConnectionsResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withOnline(online: boolean): ShowConsumerConnectionsResponse {
        this['online'] = online;
        return this;
    }
    public withSubscriptionConsistency(subscriptionConsistency: boolean): ShowConsumerConnectionsResponse {
        this['subscription_consistency'] = subscriptionConsistency;
        return this;
    }
    public set subscriptionConsistency(subscriptionConsistency: boolean | undefined) {
        this['subscription_consistency'] = subscriptionConsistency;
    }
    public get subscriptionConsistency() {
        return this['subscription_consistency'];
    }
    public withTotal(total: number): ShowConsumerConnectionsResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ShowConsumerConnectionsResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset() {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowConsumerConnectionsResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset() {
        return this['previous_offset'];
    }
    public withClients(clients: Array<ClientData>): ShowConsumerConnectionsResponse {
        this['clients'] = clients;
        return this;
    }
}