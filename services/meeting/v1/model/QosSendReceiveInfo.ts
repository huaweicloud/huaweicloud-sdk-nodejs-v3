import { QosDataElement } from './QosDataElement';
import { QosDataNoThrElement } from './QosDataNoThrElement';


export class QosSendReceiveInfo {
    public bitrate?: Array<QosDataNoThrElement>;
    public latency?: Array<QosDataElement>;
    public jitter?: Array<QosDataElement>;
    private 'packet_loss_max'?: Array<QosDataElement> | undefined;
    public resolution?: Array<QosDataNoThrElement>;
    public frame?: Array<QosDataNoThrElement>;
    public constructor() { 
    }
    public withBitrate(bitrate: Array<QosDataNoThrElement>): QosSendReceiveInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withLatency(latency: Array<QosDataElement>): QosSendReceiveInfo {
        this['latency'] = latency;
        return this;
    }
    public withJitter(jitter: Array<QosDataElement>): QosSendReceiveInfo {
        this['jitter'] = jitter;
        return this;
    }
    public withPacketLossMax(packetLossMax: Array<QosDataElement>): QosSendReceiveInfo {
        this['packet_loss_max'] = packetLossMax;
        return this;
    }
    public set packetLossMax(packetLossMax: Array<QosDataElement> | undefined) {
        this['packet_loss_max'] = packetLossMax;
    }
    public get packetLossMax() {
        return this['packet_loss_max'];
    }
    public withResolution(resolution: Array<QosDataNoThrElement>): QosSendReceiveInfo {
        this['resolution'] = resolution;
        return this;
    }
    public withFrame(frame: Array<QosDataNoThrElement>): QosSendReceiveInfo {
        this['frame'] = frame;
        return this;
    }
}