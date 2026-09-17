import { InfluxDB2NodeChannelDetailDTO } from './InfluxDB2NodeChannelDetailDTO';
import { IoTDBNodeChannelDetailDTO } from './IoTDBNodeChannelDetailDTO';
import { MqttNodeChannelDetailDTO } from './MqttNodeChannelDetailDTO';
import { PulsarNodeChannelDetailDTO } from './PulsarNodeChannelDetailDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClientNodeResponse extends SdkResponse {
    public channel?: string;
    public description?: string;
    public endpoint?: string;
    private 'mqtt_channel_detail'?: MqttNodeChannelDetailDTO;
    private 'iotdb_channel_detail'?: IoTDBNodeChannelDetailDTO;
    private 'influxdb2_channel_detail'?: InfluxDB2NodeChannelDetailDTO;
    private 'pulsar_channel_detail'?: PulsarNodeChannelDetailDTO;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'synchronized_time'?: string;
    private 'synchronized_status'?: boolean;
    public constructor() { 
        super();
    }
    public withChannel(channel: string): UpdateClientNodeResponse {
        this['channel'] = channel;
        return this;
    }
    public withDescription(description: string): UpdateClientNodeResponse {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: string): UpdateClientNodeResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withMqttChannelDetail(mqttChannelDetail: MqttNodeChannelDetailDTO): UpdateClientNodeResponse {
        this['mqtt_channel_detail'] = mqttChannelDetail;
        return this;
    }
    public set mqttChannelDetail(mqttChannelDetail: MqttNodeChannelDetailDTO  | undefined) {
        this['mqtt_channel_detail'] = mqttChannelDetail;
    }
    public get mqttChannelDetail(): MqttNodeChannelDetailDTO | undefined {
        return this['mqtt_channel_detail'];
    }
    public withIotdbChannelDetail(iotdbChannelDetail: IoTDBNodeChannelDetailDTO): UpdateClientNodeResponse {
        this['iotdb_channel_detail'] = iotdbChannelDetail;
        return this;
    }
    public set iotdbChannelDetail(iotdbChannelDetail: IoTDBNodeChannelDetailDTO  | undefined) {
        this['iotdb_channel_detail'] = iotdbChannelDetail;
    }
    public get iotdbChannelDetail(): IoTDBNodeChannelDetailDTO | undefined {
        return this['iotdb_channel_detail'];
    }
    public withInfluxdb2ChannelDetail(influxdb2ChannelDetail: InfluxDB2NodeChannelDetailDTO): UpdateClientNodeResponse {
        this['influxdb2_channel_detail'] = influxdb2ChannelDetail;
        return this;
    }
    public set influxdb2ChannelDetail(influxdb2ChannelDetail: InfluxDB2NodeChannelDetailDTO  | undefined) {
        this['influxdb2_channel_detail'] = influxdb2ChannelDetail;
    }
    public get influxdb2ChannelDetail(): InfluxDB2NodeChannelDetailDTO | undefined {
        return this['influxdb2_channel_detail'];
    }
    public withPulsarChannelDetail(pulsarChannelDetail: PulsarNodeChannelDetailDTO): UpdateClientNodeResponse {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
        return this;
    }
    public set pulsarChannelDetail(pulsarChannelDetail: PulsarNodeChannelDetailDTO  | undefined) {
        this['pulsar_channel_detail'] = pulsarChannelDetail;
    }
    public get pulsarChannelDetail(): PulsarNodeChannelDetailDTO | undefined {
        return this['pulsar_channel_detail'];
    }
    public withCreateTime(createTime: string): UpdateClientNodeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateClientNodeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withSynchronizedTime(synchronizedTime: string): UpdateClientNodeResponse {
        this['synchronized_time'] = synchronizedTime;
        return this;
    }
    public set synchronizedTime(synchronizedTime: string  | undefined) {
        this['synchronized_time'] = synchronizedTime;
    }
    public get synchronizedTime(): string | undefined {
        return this['synchronized_time'];
    }
    public withSynchronizedStatus(synchronizedStatus: boolean): UpdateClientNodeResponse {
        this['synchronized_status'] = synchronizedStatus;
        return this;
    }
    public set synchronizedStatus(synchronizedStatus: boolean  | undefined) {
        this['synchronized_status'] = synchronizedStatus;
    }
    public get synchronizedStatus(): boolean | undefined {
        return this['synchronized_status'];
    }
}