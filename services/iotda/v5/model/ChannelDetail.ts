import { AmqpForwarding } from './AmqpForwarding';
import { DisForwarding } from './DisForwarding';
import { DmsKafkaForwarding } from './DmsKafkaForwarding';
import { FunctionGraphForwarding } from './FunctionGraphForwarding';
import { HttpForwarding } from './HttpForwarding';
import { InfluxDBForwarding } from './InfluxDBForwarding';
import { IoTAForwarding } from './IoTAForwarding';
import { LtsForwarding } from './LtsForwarding';
import { MqsForwarding } from './MqsForwarding';
import { MqttForwarding } from './MqttForwarding';
import { MrsKafkaForwarding } from './MrsKafkaForwarding';
import { MysqlForwarding } from './MysqlForwarding';
import { ObsForwarding } from './ObsForwarding';
import { RomaForwarding } from './RomaForwarding';


export class ChannelDetail {
    private 'http_forwarding'?: HttpForwarding | undefined;
    private 'dis_forwarding'?: DisForwarding | undefined;
    private 'obs_forwarding'?: ObsForwarding | undefined;
    private 'amqp_forwarding'?: AmqpForwarding | undefined;
    private 'dms_kafka_forwarding'?: DmsKafkaForwarding | undefined;
    private 'roma_forwarding'?: RomaForwarding | undefined;
    private 'iota_forwarding'?: IoTAForwarding | undefined;
    private 'mqs_forwarding'?: MqsForwarding | undefined;
    private 'mysql_forwarding'?: MysqlForwarding | undefined;
    private 'mqtt_forwarding'?: MqttForwarding | undefined;
    private 'lts_forwarding'?: LtsForwarding | undefined;
    private 'influxdb_forwarding'?: InfluxDBForwarding | undefined;
    private 'functiongraph_forwarding'?: FunctionGraphForwarding | undefined;
    private 'mrs_kafka_forwarding'?: MrsKafkaForwarding | undefined;
    public constructor() { 
    }
    public withHttpForwarding(httpForwarding: HttpForwarding): ChannelDetail {
        this['http_forwarding'] = httpForwarding;
        return this;
    }
    public set httpForwarding(httpForwarding: HttpForwarding | undefined) {
        this['http_forwarding'] = httpForwarding;
    }
    public get httpForwarding() {
        return this['http_forwarding'];
    }
    public withDisForwarding(disForwarding: DisForwarding): ChannelDetail {
        this['dis_forwarding'] = disForwarding;
        return this;
    }
    public set disForwarding(disForwarding: DisForwarding | undefined) {
        this['dis_forwarding'] = disForwarding;
    }
    public get disForwarding() {
        return this['dis_forwarding'];
    }
    public withObsForwarding(obsForwarding: ObsForwarding): ChannelDetail {
        this['obs_forwarding'] = obsForwarding;
        return this;
    }
    public set obsForwarding(obsForwarding: ObsForwarding | undefined) {
        this['obs_forwarding'] = obsForwarding;
    }
    public get obsForwarding() {
        return this['obs_forwarding'];
    }
    public withAmqpForwarding(amqpForwarding: AmqpForwarding): ChannelDetail {
        this['amqp_forwarding'] = amqpForwarding;
        return this;
    }
    public set amqpForwarding(amqpForwarding: AmqpForwarding | undefined) {
        this['amqp_forwarding'] = amqpForwarding;
    }
    public get amqpForwarding() {
        return this['amqp_forwarding'];
    }
    public withDmsKafkaForwarding(dmsKafkaForwarding: DmsKafkaForwarding): ChannelDetail {
        this['dms_kafka_forwarding'] = dmsKafkaForwarding;
        return this;
    }
    public set dmsKafkaForwarding(dmsKafkaForwarding: DmsKafkaForwarding | undefined) {
        this['dms_kafka_forwarding'] = dmsKafkaForwarding;
    }
    public get dmsKafkaForwarding() {
        return this['dms_kafka_forwarding'];
    }
    public withRomaForwarding(romaForwarding: RomaForwarding): ChannelDetail {
        this['roma_forwarding'] = romaForwarding;
        return this;
    }
    public set romaForwarding(romaForwarding: RomaForwarding | undefined) {
        this['roma_forwarding'] = romaForwarding;
    }
    public get romaForwarding() {
        return this['roma_forwarding'];
    }
    public withIotaForwarding(iotaForwarding: IoTAForwarding): ChannelDetail {
        this['iota_forwarding'] = iotaForwarding;
        return this;
    }
    public set iotaForwarding(iotaForwarding: IoTAForwarding | undefined) {
        this['iota_forwarding'] = iotaForwarding;
    }
    public get iotaForwarding() {
        return this['iota_forwarding'];
    }
    public withMqsForwarding(mqsForwarding: MqsForwarding): ChannelDetail {
        this['mqs_forwarding'] = mqsForwarding;
        return this;
    }
    public set mqsForwarding(mqsForwarding: MqsForwarding | undefined) {
        this['mqs_forwarding'] = mqsForwarding;
    }
    public get mqsForwarding() {
        return this['mqs_forwarding'];
    }
    public withMysqlForwarding(mysqlForwarding: MysqlForwarding): ChannelDetail {
        this['mysql_forwarding'] = mysqlForwarding;
        return this;
    }
    public set mysqlForwarding(mysqlForwarding: MysqlForwarding | undefined) {
        this['mysql_forwarding'] = mysqlForwarding;
    }
    public get mysqlForwarding() {
        return this['mysql_forwarding'];
    }
    public withMqttForwarding(mqttForwarding: MqttForwarding): ChannelDetail {
        this['mqtt_forwarding'] = mqttForwarding;
        return this;
    }
    public set mqttForwarding(mqttForwarding: MqttForwarding | undefined) {
        this['mqtt_forwarding'] = mqttForwarding;
    }
    public get mqttForwarding() {
        return this['mqtt_forwarding'];
    }
    public withLtsForwarding(ltsForwarding: LtsForwarding): ChannelDetail {
        this['lts_forwarding'] = ltsForwarding;
        return this;
    }
    public set ltsForwarding(ltsForwarding: LtsForwarding | undefined) {
        this['lts_forwarding'] = ltsForwarding;
    }
    public get ltsForwarding() {
        return this['lts_forwarding'];
    }
    public withInfluxdbForwarding(influxdbForwarding: InfluxDBForwarding): ChannelDetail {
        this['influxdb_forwarding'] = influxdbForwarding;
        return this;
    }
    public set influxdbForwarding(influxdbForwarding: InfluxDBForwarding | undefined) {
        this['influxdb_forwarding'] = influxdbForwarding;
    }
    public get influxdbForwarding() {
        return this['influxdb_forwarding'];
    }
    public withFunctiongraphForwarding(functiongraphForwarding: FunctionGraphForwarding): ChannelDetail {
        this['functiongraph_forwarding'] = functiongraphForwarding;
        return this;
    }
    public set functiongraphForwarding(functiongraphForwarding: FunctionGraphForwarding | undefined) {
        this['functiongraph_forwarding'] = functiongraphForwarding;
    }
    public get functiongraphForwarding() {
        return this['functiongraph_forwarding'];
    }
    public withMrsKafkaForwarding(mrsKafkaForwarding: MrsKafkaForwarding): ChannelDetail {
        this['mrs_kafka_forwarding'] = mrsKafkaForwarding;
        return this;
    }
    public set mrsKafkaForwarding(mrsKafkaForwarding: MrsKafkaForwarding | undefined) {
        this['mrs_kafka_forwarding'] = mrsKafkaForwarding;
    }
    public get mrsKafkaForwarding() {
        return this['mrs_kafka_forwarding'];
    }
}