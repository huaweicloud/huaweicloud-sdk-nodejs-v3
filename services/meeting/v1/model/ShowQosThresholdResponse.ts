import { CPUThresholdData } from './CPUThresholdData';
import { PacketThresholdData } from './PacketThresholdData';
import { ThresholdData } from './ThresholdData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQosThresholdResponse extends SdkResponse {
    public latency?: ThresholdData;
    public jitter?: ThresholdData;
    public packetLoss?: PacketThresholdData;
    public clientCpuMax?: CPUThresholdData;
    public systemCpuMax?: CPUThresholdData;
    public constructor() { 
        super();
    }
    public withLatency(latency: ThresholdData): ShowQosThresholdResponse {
        this['latency'] = latency;
        return this;
    }
    public withJitter(jitter: ThresholdData): ShowQosThresholdResponse {
        this['jitter'] = jitter;
        return this;
    }
    public withPacketLoss(packetLoss: PacketThresholdData): ShowQosThresholdResponse {
        this['packetLoss'] = packetLoss;
        return this;
    }
    public withClientCpuMax(clientCpuMax: CPUThresholdData): ShowQosThresholdResponse {
        this['clientCpuMax'] = clientCpuMax;
        return this;
    }
    public withSystemCpuMax(systemCpuMax: CPUThresholdData): ShowQosThresholdResponse {
        this['systemCpuMax'] = systemCpuMax;
        return this;
    }
}