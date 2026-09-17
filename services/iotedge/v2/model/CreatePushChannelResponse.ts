import { CreateInfluxDB2ChannelDetail } from './CreateInfluxDB2ChannelDetail';
import { IoTDBChannelDetailDTO } from './IoTDBChannelDetailDTO';
import { MqttChannelDetailDTO } from './MqttChannelDetailDTO';
import { PulsarChannelDetailDTO } from './PulsarChannelDetailDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePushChannelResponse extends SdkResponse {
    private 'channel_id'?: string;
    public name?: string;
    public channel?: string;
    public description?: string;
    public endpoint?: string;
    private 'mqtt_channel_detail'?: MqttChannelDetailDTO;
    private 'iotdb_channel_detail'?: IoTDBChannelDetailDTO;
    private 'influxdb2_channel_detail'?: CreateInfluxDB2ChannelDetail;
    private 'pulsar_channel_detail'?: PulsarChannelDetailDTO;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withChannelId(channelId: string): CreatePushChannelResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withName(name: string): CreatePushChannelResponse {
        this['name'] = name;
        return this;
    }
    public withChannel(channel: string): CreatePushChannelResponse {
        this['channel'] = channel;
        return this;
    }
    public withDescription(description: string): CreatePushChannelResponse {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: string): CreatePushChannelResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withMqttChannelDetail(mqttChannelDetail: MqttChannelDetailDTO): CreatePushChannelResponse {
        this['mqtt_channel_detail'] = mqttChannelDetail;
        return this;
    }
    public set mqttChannelDetail(mqttChannelDetail: MqttChannelDetailDTO  | undefined) {
        this['mqtt_channel_detail'] = mqttChannelDetail;
    }
    public get mqttChannelDetail(): MqttChannelDetailDTO | undefined {
        return this['mqtt_channel_detail'];
    }
    public withIotdbChannelDetail(iotdbChannelDetail: IoTDBChannelDetailDTO): CreatePushChannelResponse {
        this['iotdb_channel_detail'] = iotdbChannelDetail;
        return this;
    }
    public set iotdbChannelDetail(iotdbChannelDetail: IoTDBChannelDetailDTO  | undefined) {
        this['iotdb_channel_detail'] = iotdbChannelDetail;
    }
    public get iotdbChannelDetail(): IoTDBChannelDetailDTO | undefined {
        return this['iotdb_channel_detail'];
    }
    public withInfluxdb2ChannelDetail(influxdb2ChannelDetail: CreateInfluxDB2ChannelDetail): CreatePushChannelResponse {
        this['influxdb2_channel_detail'] = influxdb2ChannelDetail;
        return this;
    }
    public set influxdb2ChannelDetail(influxdb2ChannelDetail: CreateInfluxDB2ChannelDetail  | undefined) {
        this['influxdb2_channel_detail'] = influxdb2ChannelDetail;
    }
    public get influxdb2ChannelDetail(): CreateInfluxDB2ChannelDetail | undefined {
        return this['influxdb2_channel_detail'];
    }
    public withPulsarChannelDetail(pulsarChannelDetail: PulsarChannelDetailDTO): CreatePushChannelResponse {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
        return this;
    }
    public set pulsarChannelDetail(pulsarChannelDetail: PulsarChannelDetailDTO  | undefined) {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
    }
    public get pulsarChannelDetail(): PulsarChannelDetailDTO | undefined {
        return this['pulsar_channel_detail'];
    }
    public withCreateTime(createTime: string): CreatePushChannelResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreatePushChannelResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}