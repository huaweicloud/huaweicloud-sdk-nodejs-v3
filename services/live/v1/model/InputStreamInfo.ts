import { FailoverConditions } from './FailoverConditions';
import { SecondarySourcesInfo } from './SecondarySourcesInfo';
import { SourcesInfo } from './SourcesInfo';


export class InputStreamInfo {
    private 'input_protocol'?: InputStreamInfoInputProtocolEnum | string;
    public sources?: Array<SourcesInfo>;
    private 'secondary_sources'?: Array<SecondarySourcesInfo>;
    private 'failover_conditions'?: FailoverConditions;
    private 'max_bandwidth_limit'?: number;
    private 'ip_port_mode'?: boolean;
    public constructor(inputProtocol?: string) { 
        this['input_protocol'] = inputProtocol;
    }
    public withInputProtocol(inputProtocol: InputStreamInfoInputProtocolEnum | string): InputStreamInfo {
        this['input_protocol'] = inputProtocol;
        return this;
    }
    public set inputProtocol(inputProtocol: InputStreamInfoInputProtocolEnum | string  | undefined) {
        this['input_protocol'] = inputProtocol;
    }
    public get inputProtocol(): InputStreamInfoInputProtocolEnum | string | undefined {
        return this['input_protocol'];
    }
    public withSources(sources: Array<SourcesInfo>): InputStreamInfo {
        this['sources'] = sources;
        return this;
    }
    public withSecondarySources(secondarySources: Array<SecondarySourcesInfo>): InputStreamInfo {
        this['secondary_sources'] = secondarySources;
        return this;
    }
    public set secondarySources(secondarySources: Array<SecondarySourcesInfo>  | undefined) {
        this['secondary_sources'] = secondarySources;
    }
    public get secondarySources(): Array<SecondarySourcesInfo> | undefined {
        return this['secondary_sources'];
    }
    public withFailoverConditions(failoverConditions: FailoverConditions): InputStreamInfo {
        this['failover_conditions'] = failoverConditions;
        return this;
    }
    public set failoverConditions(failoverConditions: FailoverConditions  | undefined) {
        this['failover_conditions'] = failoverConditions;
    }
    public get failoverConditions(): FailoverConditions | undefined {
        return this['failover_conditions'];
    }
    public withMaxBandwidthLimit(maxBandwidthLimit: number): InputStreamInfo {
        this['max_bandwidth_limit'] = maxBandwidthLimit;
        return this;
    }
    public set maxBandwidthLimit(maxBandwidthLimit: number  | undefined) {
        this['max_bandwidth_limit'] = maxBandwidthLimit;
    }
    public get maxBandwidthLimit(): number | undefined {
        return this['max_bandwidth_limit'];
    }
    public withIpPortMode(ipPortMode: boolean): InputStreamInfo {
        this['ip_port_mode'] = ipPortMode;
        return this;
    }
    public set ipPortMode(ipPortMode: boolean  | undefined) {
        this['ip_port_mode'] = ipPortMode;
    }
    public get ipPortMode(): boolean | undefined {
        return this['ip_port_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InputStreamInfoInputProtocolEnum {
    FLV_PULL = 'FLV_PULL',
    RTMP_PUSH = 'RTMP_PUSH',
    RTMP_PULL = 'RTMP_PULL',
    HLS_PULL = 'HLS_PULL',
    SRT_PULL = 'SRT_PULL',
    SRT_PUSH = 'SRT_PUSH'
}
