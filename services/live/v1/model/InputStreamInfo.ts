import { FailoverConditions } from './FailoverConditions';
import { InputAudioSelector } from './InputAudioSelector';
import { SecondarySourcesInfo } from './SecondarySourcesInfo';
import { SourcesInfo } from './SourcesInfo';


export class InputStreamInfo {
    private 'input_protocol'?: InputStreamInfoInputProtocolEnum | string;
    public sources?: Array<SourcesInfo>;
    private 'secondary_sources'?: Array<SecondarySourcesInfo>;
    private 'failover_conditions'?: FailoverConditions;
    private 'max_bandwidth_limit'?: number;
    private 'ip_port_mode'?: boolean;
    private 'ip_whitelist'?: string;
    private 'scte35_source'?: string;
    private 'ad_triggers'?: Array<string>;
    private 'audio_selectors'?: Array<InputAudioSelector>;
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
    public withIpWhitelist(ipWhitelist: string): InputStreamInfo {
        this['ip_whitelist'] = ipWhitelist;
        return this;
    }
    public set ipWhitelist(ipWhitelist: string  | undefined) {
        this['ip_whitelist'] = ipWhitelist;
    }
    public get ipWhitelist(): string | undefined {
        return this['ip_whitelist'];
    }
    public withScte35Source(scte35Source: string): InputStreamInfo {
        this['scte35_source'] = scte35Source;
        return this;
    }
    public set scte35Source(scte35Source: string  | undefined) {
        this['scte35_source'] = scte35Source;
    }
    public get scte35Source(): string | undefined {
        return this['scte35_source'];
    }
    public withAdTriggers(adTriggers: Array<string>): InputStreamInfo {
        this['ad_triggers'] = adTriggers;
        return this;
    }
    public set adTriggers(adTriggers: Array<string>  | undefined) {
        this['ad_triggers'] = adTriggers;
    }
    public get adTriggers(): Array<string> | undefined {
        return this['ad_triggers'];
    }
    public withAudioSelectors(audioSelectors: Array<InputAudioSelector>): InputStreamInfo {
        this['audio_selectors'] = audioSelectors;
        return this;
    }
    public set audioSelectors(audioSelectors: Array<InputAudioSelector>  | undefined) {
        this['audio_selectors'] = audioSelectors;
    }
    public get audioSelectors(): Array<InputAudioSelector> | undefined {
        return this['audio_selectors'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InputStreamInfoInputProtocolEnum {
    FLV_PULL = 'FLV_PULL',
    RTMP_PUSH = 'RTMP_PUSH',
    HLS_PULL = 'HLS_PULL',
    SRT_PULL = 'SRT_PULL',
    SRT_PUSH = 'SRT_PUSH'
}
