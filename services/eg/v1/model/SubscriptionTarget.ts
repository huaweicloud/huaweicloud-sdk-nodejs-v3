import { ApigwTargetDetail } from './ApigwTargetDetail';
import { DeadLetterQueue } from './DeadLetterQueue';
import { EgTargetDetail } from './EgTargetDetail';
import { KafkaTargetDetail } from './KafkaTargetDetail';
import { SmnTargetDetail } from './SmnTargetDetail';
import { TransForm } from './TransForm';


export class SubscriptionTarget {
    public id?: string;
    public name?: string;
    private 'provider_type'?: SubscriptionTargetProviderTypeEnum | string;
    private 'connection_id'?: string;
    public detail?: object;
    private 'kafka_detail'?: KafkaTargetDetail;
    private 'smn_detail'?: SmnTargetDetail;
    private 'eg_detail'?: EgTargetDetail;
    private 'apigw_detail'?: ApigwTargetDetail;
    private 'retry_times'?: number;
    public transform?: TransForm;
    private 'dead_letter_queue'?: DeadLetterQueue;
    public constructor(name?: string, providerType?: string, transform?: TransForm) { 
        this['name'] = name;
        this['provider_type'] = providerType;
        this['transform'] = transform;
    }
    public withId(id: string): SubscriptionTarget {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubscriptionTarget {
        this['name'] = name;
        return this;
    }
    public withProviderType(providerType: SubscriptionTargetProviderTypeEnum | string): SubscriptionTarget {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: SubscriptionTargetProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): SubscriptionTargetProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withConnectionId(connectionId: string): SubscriptionTarget {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDetail(detail: object): SubscriptionTarget {
        this['detail'] = detail;
        return this;
    }
    public withKafkaDetail(kafkaDetail: KafkaTargetDetail): SubscriptionTarget {
        this['kafka_detail'] = kafkaDetail;
        return this;
    }
    public set kafkaDetail(kafkaDetail: KafkaTargetDetail  | undefined) {
        this['kafka_detail'] = kafkaDetail;
    }
    public get kafkaDetail(): KafkaTargetDetail | undefined {
        return this['kafka_detail'];
    }
    public withSmnDetail(smnDetail: SmnTargetDetail): SubscriptionTarget {
        this['smn_detail'] = smnDetail;
        return this;
    }
    public set smnDetail(smnDetail: SmnTargetDetail  | undefined) {
        this['smn_detail'] = smnDetail;
    }
    public get smnDetail(): SmnTargetDetail | undefined {
        return this['smn_detail'];
    }
    public withEgDetail(egDetail: EgTargetDetail): SubscriptionTarget {
        this['eg_detail'] = egDetail;
        return this;
    }
    public set egDetail(egDetail: EgTargetDetail  | undefined) {
        this['eg_detail'] = egDetail;
    }
    public get egDetail(): EgTargetDetail | undefined {
        return this['eg_detail'];
    }
    public withApigwDetail(apigwDetail: ApigwTargetDetail): SubscriptionTarget {
        this['apigw_detail'] = apigwDetail;
        return this;
    }
    public set apigwDetail(apigwDetail: ApigwTargetDetail  | undefined) {
        this['apigw_detail'] = apigwDetail;
    }
    public get apigwDetail(): ApigwTargetDetail | undefined {
        return this['apigw_detail'];
    }
    public withRetryTimes(retryTimes: number): SubscriptionTarget {
        this['retry_times'] = retryTimes;
        return this;
    }
    public set retryTimes(retryTimes: number  | undefined) {
        this['retry_times'] = retryTimes;
    }
    public get retryTimes(): number | undefined {
        return this['retry_times'];
    }
    public withTransform(transform: TransForm): SubscriptionTarget {
        this['transform'] = transform;
        return this;
    }
    public withDeadLetterQueue(deadLetterQueue: DeadLetterQueue): SubscriptionTarget {
        this['dead_letter_queue'] = deadLetterQueue;
        return this;
    }
    public set deadLetterQueue(deadLetterQueue: DeadLetterQueue  | undefined) {
        this['dead_letter_queue'] = deadLetterQueue;
    }
    public get deadLetterQueue(): DeadLetterQueue | undefined {
        return this['dead_letter_queue'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionTargetProviderTypeEnum {
    CUSTOM = 'CUSTOM',
    OFFICIAL = 'OFFICIAL',
    APIGW = 'APIGW'
}
