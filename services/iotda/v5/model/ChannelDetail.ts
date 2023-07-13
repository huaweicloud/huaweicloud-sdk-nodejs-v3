import { AmqpForwarding } from './AmqpForwarding';
import { DisForwarding } from './DisForwarding';
import { DmsKafkaForwarding } from './DmsKafkaForwarding';
import { DmsRocketMQForwarding } from './DmsRocketMQForwarding';
import { FunctionGraphForwarding } from './FunctionGraphForwarding';
import { HttpForwarding } from './HttpForwarding';
import { InfluxDBForwarding } from './InfluxDBForwarding';
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
    private 'mysql_forwarding'?: MysqlForwarding | undefined;
    private 'influxdb_forwarding'?: InfluxDBForwarding | undefined;
    private 'functiongraph_forwarding'?: FunctionGraphForwarding | undefined;
    private 'mrs_kafka_forwarding'?: MrsKafkaForwarding | undefined;
    private 'dms_rocketmq_forwarding'?: DmsRocketMQForwarding | undefined;
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
    public withDmsRocketmqForwarding(dmsRocketmqForwarding: DmsRocketMQForwarding): ChannelDetail {
        this['dms_rocketmq_forwarding'] = dmsRocketmqForwarding;
        return this;
    }
    public set dmsRocketmqForwarding(dmsRocketmqForwarding: DmsRocketMQForwarding | undefined) {
        this['dms_rocketmq_forwarding'] = dmsRocketmqForwarding;
    }
    public get dmsRocketmqForwarding() {
        return this['dms_rocketmq_forwarding'];
    }
}