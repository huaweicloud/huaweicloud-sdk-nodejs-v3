import { SourceCommunityMQParameters } from './SourceCommunityMQParameters';
import { SourceDMSMQParameters } from './SourceDMSMQParameters';
import { SourceKafkaMQParameters } from './SourceKafkaMQParameters';
import { SourceMobileMQParameters } from './SourceMobileMQParameters';


export class EventStreamingSource {
    private 'source_kafka'?: SourceKafkaMQParameters;
    private 'source_mobile_rocketmq'?: SourceMobileMQParameters;
    private 'source_community_rocketmq'?: SourceCommunityMQParameters;
    private 'source_dms_rocketmq'?: SourceDMSMQParameters;
    public name?: EventStreamingSourceNameEnum | string;
    public constructor() { 
    }
    public withSourceKafka(sourceKafka: SourceKafkaMQParameters): EventStreamingSource {
        this['source_kafka'] = sourceKafka;
        return this;
    }
    public set sourceKafka(sourceKafka: SourceKafkaMQParameters  | undefined) {
        this['source_kafka'] = sourceKafka;
    }
    public get sourceKafka(): SourceKafkaMQParameters | undefined {
        return this['source_kafka'];
    }
    public withSourceMobileRocketmq(sourceMobileRocketmq: SourceMobileMQParameters): EventStreamingSource {
        this['source_mobile_rocketmq'] = sourceMobileRocketmq;
        return this;
    }
    public set sourceMobileRocketmq(sourceMobileRocketmq: SourceMobileMQParameters  | undefined) {
        this['source_mobile_rocketmq'] = sourceMobileRocketmq;
    }
    public get sourceMobileRocketmq(): SourceMobileMQParameters | undefined {
        return this['source_mobile_rocketmq'];
    }
    public withSourceCommunityRocketmq(sourceCommunityRocketmq: SourceCommunityMQParameters): EventStreamingSource {
        this['source_community_rocketmq'] = sourceCommunityRocketmq;
        return this;
    }
    public set sourceCommunityRocketmq(sourceCommunityRocketmq: SourceCommunityMQParameters  | undefined) {
        this['source_community_rocketmq'] = sourceCommunityRocketmq;
    }
    public get sourceCommunityRocketmq(): SourceCommunityMQParameters | undefined {
        return this['source_community_rocketmq'];
    }
    public withSourceDmsRocketmq(sourceDmsRocketmq: SourceDMSMQParameters): EventStreamingSource {
        this['source_dms_rocketmq'] = sourceDmsRocketmq;
        return this;
    }
    public set sourceDmsRocketmq(sourceDmsRocketmq: SourceDMSMQParameters  | undefined) {
        this['source_dms_rocketmq'] = sourceDmsRocketmq;
    }
    public get sourceDmsRocketmq(): SourceDMSMQParameters | undefined {
        return this['source_dms_rocketmq'];
    }
    public withName(name: EventStreamingSourceNameEnum | string): EventStreamingSource {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventStreamingSourceNameEnum {
    HC_DMS_ROCKETMQ = 'HC.DMS_ROCKETMQ',
    HC_COMMUNITY_ROCKETMQ = 'HC.COMMUNITY_ROCKETMQ',
    HC_KAFKA = 'HC.Kafka'
}
