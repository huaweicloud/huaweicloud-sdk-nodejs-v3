import { QosCpuInfo } from './QosCpuInfo';
import { QosSendReceiveInfo } from './QosSendReceiveInfo';


export class QosInfo {
    public type?: string;
    public send?: QosSendReceiveInfo;
    public receive?: QosSendReceiveInfo;
    public cpu?: QosCpuInfo;
    public constructor() { 
    }
    public withType(type: string): QosInfo {
        this['type'] = type;
        return this;
    }
    public withSend(send: QosSendReceiveInfo): QosInfo {
        this['send'] = send;
        return this;
    }
    public withReceive(receive: QosSendReceiveInfo): QosInfo {
        this['receive'] = receive;
        return this;
    }
    public withCpu(cpu: QosCpuInfo): QosInfo {
        this['cpu'] = cpu;
        return this;
    }
}