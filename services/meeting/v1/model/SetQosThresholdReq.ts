import { SetCPUThresholdData } from './SetCPUThresholdData';
import { SetPacketThresholdData } from './SetPacketThresholdData';
import { SetThresholdData } from './SetThresholdData';


export class SetQosThresholdReq {
    public latency?: SetThresholdData;
    public jitter?: SetThresholdData;
    public packetLoss?: SetPacketThresholdData;
    public clientCpuMax?: SetCPUThresholdData;
    public systemCpuMax?: SetCPUThresholdData;
    public constructor() { 
    }
    public withLatency(latency: SetThresholdData): SetQosThresholdReq {
        this['latency'] = latency;
        return this;
    }
    public withJitter(jitter: SetThresholdData): SetQosThresholdReq {
        this['jitter'] = jitter;
        return this;
    }
    public withPacketLoss(packetLoss: SetPacketThresholdData): SetQosThresholdReq {
        this['packetLoss'] = packetLoss;
        return this;
    }
    public withClientCpuMax(clientCpuMax: SetCPUThresholdData): SetQosThresholdReq {
        this['clientCpuMax'] = clientCpuMax;
        return this;
    }
    public withSystemCpuMax(systemCpuMax: SetCPUThresholdData): SetQosThresholdReq {
        this['systemCpuMax'] = systemCpuMax;
        return this;
    }
}