import { CleanLimitDict } from './CleanLimitDict';
import { ExtendDDoSSet } from './ExtendDDoSSet';
import { TriggerBpsDict } from './TriggerBpsDict';
import { TriggerQpsDict } from './TriggerQpsDict';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNewConfigsResponse extends SdkResponse {
    private 'traffic_limited_list'?: Array<TriggerBpsDict>;
    private 'http_limited_list'?: Array<TriggerQpsDict>;
    private 'connection_limited_list'?: Array<CleanLimitDict>;
    private 'extend_ddos_config'?: Array<ExtendDDoSSet>;
    public constructor() { 
        super();
    }
    public withTrafficLimitedList(trafficLimitedList: Array<TriggerBpsDict>): ListNewConfigsResponse {
        this['traffic_limited_list'] = trafficLimitedList;
        return this;
    }
    public set trafficLimitedList(trafficLimitedList: Array<TriggerBpsDict>  | undefined) {
        this['traffic_limited_list'] = trafficLimitedList;
    }
    public get trafficLimitedList(): Array<TriggerBpsDict> | undefined {
        return this['traffic_limited_list'];
    }
    public withHttpLimitedList(httpLimitedList: Array<TriggerQpsDict>): ListNewConfigsResponse {
        this['http_limited_list'] = httpLimitedList;
        return this;
    }
    public set httpLimitedList(httpLimitedList: Array<TriggerQpsDict>  | undefined) {
        this['http_limited_list'] = httpLimitedList;
    }
    public get httpLimitedList(): Array<TriggerQpsDict> | undefined {
        return this['http_limited_list'];
    }
    public withConnectionLimitedList(connectionLimitedList: Array<CleanLimitDict>): ListNewConfigsResponse {
        this['connection_limited_list'] = connectionLimitedList;
        return this;
    }
    public set connectionLimitedList(connectionLimitedList: Array<CleanLimitDict>  | undefined) {
        this['connection_limited_list'] = connectionLimitedList;
    }
    public get connectionLimitedList(): Array<CleanLimitDict> | undefined {
        return this['connection_limited_list'];
    }
    public withExtendDdosConfig(extendDdosConfig: Array<ExtendDDoSSet>): ListNewConfigsResponse {
        this['extend_ddos_config'] = extendDdosConfig;
        return this;
    }
    public set extendDdosConfig(extendDdosConfig: Array<ExtendDDoSSet>  | undefined) {
        this['extend_ddos_config'] = extendDdosConfig;
    }
    public get extendDdosConfig(): Array<ExtendDDoSSet> | undefined {
        return this['extend_ddos_config'];
    }
}