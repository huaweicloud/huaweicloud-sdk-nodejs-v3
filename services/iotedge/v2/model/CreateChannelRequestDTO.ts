import { CreateInfluxDB2ChannelDetail } from './CreateInfluxDB2ChannelDetail';
import { CreateIoTDBChannelDetail } from './CreateIoTDBChannelDetail';
import { CreateMqttChannelDetail } from './CreateMqttChannelDetail';
import { CreatePulsarChannelDetail } from './CreatePulsarChannelDetail';


export class CreateChannelRequestDTO {
    private 'channel_id'?: string;
    public channel?: string;
    public name?: string;
    public description?: string;
    public endpoint?: string;
    private 'mqtt_channel_detail'?: CreateMqttChannelDetail;
    private 'iotdb_channel_detail'?: CreateIoTDBChannelDetail;
    private 'influxdb2_channel_detail'?: CreateInfluxDB2ChannelDetail;
    private 'pulsar_channel_detail'?: CreatePulsarChannelDetail;
    public constructor(channel?: string, name?: string, endpoint?: string) { 
        this['channel'] = channel;
        this['name'] = name;
        this['endpoint'] = endpoint;
    }
    public withChannelId(channelId: string): CreateChannelRequestDTO {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannel(channel: string): CreateChannelRequestDTO {
        this['channel'] = channel;
        return this;
    }
    public withName(name: string): CreateChannelRequestDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateChannelRequestDTO {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: string): CreateChannelRequestDTO {
        this['endpoint'] = endpoint;
        return this;
    }
    public withMqttChannelDetail(mqttChannelDetail: CreateMqttChannelDetail): CreateChannelRequestDTO {
        this['mqtt_channel_detail'] = mqttChannelDetail;
        return this;
    }
    public set mqttChannelDetail(mqttChannelDetail: CreateMqttChannelDetail  | undefined) {
        this['mqtt_channel_detail'] = mqttChannelDetail;
    }
    public get mqttChannelDetail(): CreateMqttChannelDetail | undefined {
        return this['mqtt_channel_detail'];
    }
    public withIotdbChannelDetail(iotdbChannelDetail: CreateIoTDBChannelDetail): CreateChannelRequestDTO {
        this['iotdb_channel_detail'] = iotdbChannelDetail;
        return this;
    }
    public set iotdbChannelDetail(iotdbChannelDetail: CreateIoTDBChannelDetail  | undefined) {
        this['iotdb_channel_detail'] = iotdbChannelDetail;
    }
    public get iotdbChannelDetail(): CreateIoTDBChannelDetail | undefined {
        return this['iotdb_channel_detail'];
    }
    public withInfluxdb2ChannelDetail(influxdb2ChannelDetail: CreateInfluxDB2ChannelDetail): CreateChannelRequestDTO {
        this['influxdb2_channel_detail'] = influxdb2ChannelDetail;
        return this;
    }
    public set influxdb2ChannelDetail(influxdb2ChannelDetail: CreateInfluxDB2ChannelDetail  | undefined) {
        this['influxdb2_channel_detail'] = influxdb2ChannelDetail;
    }
    public get influxdb2ChannelDetail(): CreateInfluxDB2ChannelDetail | undefined {
        return this['influxdb2_channel_detail'];
    }
    public withPulsarChannelDetail(pulsarChannelDetail: CreatePulsarChannelDetail): CreateChannelRequestDTO {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
        return this;
    }
    public set pulsarChannelDetail(pulsarChannelDetail: CreatePulsarChannelDetail  | undefined) {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
    }
    public get pulsarChannelDetail(): CreatePulsarChannelDetail | undefined {
        return this['pulsar_channel_detail'];
    }
}