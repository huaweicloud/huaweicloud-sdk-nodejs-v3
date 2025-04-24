import { SinkFGParameters } from './SinkFGParameters';
import { SinkKafkaParameters } from './SinkKafkaParameters';
import { SinkObsParameters } from './SinkObsParameters';


export class EventStreamingSink {
    private 'sink_fg'?: SinkFGParameters;
    private 'sink_kafka'?: SinkKafkaParameters;
    private 'sink_obs'?: SinkObsParameters;
    public name?: EventStreamingSinkNameEnum | string;
    public constructor() { 
    }
    public withSinkFg(sinkFg: SinkFGParameters): EventStreamingSink {
        this['sink_fg'] = sinkFg;
        return this;
    }
    public set sinkFg(sinkFg: SinkFGParameters  | undefined) {
        this['sink_fg'] = sinkFg;
    }
    public get sinkFg(): SinkFGParameters | undefined {
        return this['sink_fg'];
    }
    public withSinkKafka(sinkKafka: SinkKafkaParameters): EventStreamingSink {
        this['sink_kafka'] = sinkKafka;
        return this;
    }
    public set sinkKafka(sinkKafka: SinkKafkaParameters  | undefined) {
        this['sink_kafka'] = sinkKafka;
    }
    public get sinkKafka(): SinkKafkaParameters | undefined {
        return this['sink_kafka'];
    }
    public withSinkObs(sinkObs: SinkObsParameters): EventStreamingSink {
        this['sink_obs'] = sinkObs;
        return this;
    }
    public set sinkObs(sinkObs: SinkObsParameters  | undefined) {
        this['sink_obs'] = sinkObs;
    }
    public get sinkObs(): SinkObsParameters | undefined {
        return this['sink_obs'];
    }
    public withName(name: EventStreamingSinkNameEnum | string): EventStreamingSink {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventStreamingSinkNameEnum {
    HC_FUNCTIONGRAPH = 'HC.FunctionGraph',
    HC_KAFKA = 'HC.Kafka'
}
