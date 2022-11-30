import { AmqpForwarding } from './AmqpForwarding';
import { DisForwarding } from './DisForwarding';
import { DmsKafkaForwarding } from './DmsKafkaForwarding';
import { HttpForwarding } from './HttpForwarding';
import { ObsForwarding } from './ObsForwarding';


export class ChannelDetail {
    private 'http_forwarding'?: HttpForwarding | undefined;
    private 'dis_forwarding'?: DisForwarding | undefined;
    private 'obs_forwarding'?: ObsForwarding | undefined;
    private 'amqp_forwarding'?: AmqpForwarding | undefined;
    private 'dms_kafka_forwarding'?: DmsKafkaForwarding | undefined;
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
}