import { UpdateMqttNodeChannelDetail } from './UpdateMqttNodeChannelDetail';
import { UpdatePulsarNodeChannelDetail } from './UpdatePulsarNodeChannelDetail';


export class UpdateNodeChannelRequestDTO {
    private 'mqtt_channel_detail'?: UpdateMqttNodeChannelDetail;
    private 'pulsar_channel_detail'?: UpdatePulsarNodeChannelDetail;
    public constructor() { 
    }
    public withMqttChannelDetail(mqttChannelDetail: UpdateMqttNodeChannelDetail): UpdateNodeChannelRequestDTO {
        this['mqtt_channel_detail'] = mqttChannelDetail;
        return this;
    }
    public set mqttChannelDetail(mqttChannelDetail: UpdateMqttNodeChannelDetail  | undefined) {
        this['mqtt_channel_detail'] = mqttChannelDetail;
    }
    public get mqttChannelDetail(): UpdateMqttNodeChannelDetail | undefined {
        return this['mqtt_channel_detail'];
    }
    public withPulsarChannelDetail(pulsarChannelDetail: UpdatePulsarNodeChannelDetail): UpdateNodeChannelRequestDTO {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
        return this;
    }
    public set pulsarChannelDetail(pulsarChannelDetail: UpdatePulsarNodeChannelDetail  | undefined) {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
    }
    public get pulsarChannelDetail(): UpdatePulsarNodeChannelDetail | undefined {
        return this['pulsar_channel_detail'];
    }
}