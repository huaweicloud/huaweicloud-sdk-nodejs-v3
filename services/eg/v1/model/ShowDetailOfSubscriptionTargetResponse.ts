import { ApigwTargetDetail } from './ApigwTargetDetail';
import { DeadLetterQueue } from './DeadLetterQueue';
import { EgTargetDetail } from './EgTargetDetail';
import { KafkaTargetDetail } from './KafkaTargetDetail';
import { SmnTargetDetail } from './SmnTargetDetail';
import { TransForm } from './TransForm';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailOfSubscriptionTargetResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'provider_type'?: string;
    private 'connection_id'?: string;
    public detail?: object;
    private 'kafka_detail'?: KafkaTargetDetail;
    private 'smn_detail'?: SmnTargetDetail;
    private 'eg_detail'?: EgTargetDetail;
    private 'apigw_detail'?: ApigwTargetDetail;
    private 'retry_times'?: number;
    public transform?: TransForm;
    private 'dead_letter_queue'?: DeadLetterQueue;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailOfSubscriptionTargetResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailOfSubscriptionTargetResponse {
        this['name'] = name;
        return this;
    }
    public withProviderType(providerType: string): ShowDetailOfSubscriptionTargetResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withConnectionId(connectionId: string): ShowDetailOfSubscriptionTargetResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDetail(detail: object): ShowDetailOfSubscriptionTargetResponse {
        this['detail'] = detail;
        return this;
    }
    public withKafkaDetail(kafkaDetail: KafkaTargetDetail): ShowDetailOfSubscriptionTargetResponse {
        this['kafka_detail'] = kafkaDetail;
        return this;
    }
    public set kafkaDetail(kafkaDetail: KafkaTargetDetail  | undefined) {
        this['kafka_detail'] = kafkaDetail;
    }
    public get kafkaDetail(): KafkaTargetDetail | undefined {
        return this['kafka_detail'];
    }
    public withSmnDetail(smnDetail: SmnTargetDetail): ShowDetailOfSubscriptionTargetResponse {
        this['smn_detail'] = smnDetail;
        return this;
    }
    public set smnDetail(smnDetail: SmnTargetDetail  | undefined) {
        this['smn_detail'] = smnDetail;
    }
    public get smnDetail(): SmnTargetDetail | undefined {
        return this['smn_detail'];
    }
    public withEgDetail(egDetail: EgTargetDetail): ShowDetailOfSubscriptionTargetResponse {
        this['eg_detail'] = egDetail;
        return this;
    }
    public set egDetail(egDetail: EgTargetDetail  | undefined) {
        this['eg_detail'] = egDetail;
    }
    public get egDetail(): EgTargetDetail | undefined {
        return this['eg_detail'];
    }
    public withApigwDetail(apigwDetail: ApigwTargetDetail): ShowDetailOfSubscriptionTargetResponse {
        this['apigw_detail'] = apigwDetail;
        return this;
    }
    public set apigwDetail(apigwDetail: ApigwTargetDetail  | undefined) {
        this['apigw_detail'] = apigwDetail;
    }
    public get apigwDetail(): ApigwTargetDetail | undefined {
        return this['apigw_detail'];
    }
    public withRetryTimes(retryTimes: number): ShowDetailOfSubscriptionTargetResponse {
        this['retry_times'] = retryTimes;
        return this;
    }
    public set retryTimes(retryTimes: number  | undefined) {
        this['retry_times'] = retryTimes;
    }
    public get retryTimes(): number | undefined {
        return this['retry_times'];
    }
    public withTransform(transform: TransForm): ShowDetailOfSubscriptionTargetResponse {
        this['transform'] = transform;
        return this;
    }
    public withDeadLetterQueue(deadLetterQueue: DeadLetterQueue): ShowDetailOfSubscriptionTargetResponse {
        this['dead_letter_queue'] = deadLetterQueue;
        return this;
    }
    public set deadLetterQueue(deadLetterQueue: DeadLetterQueue  | undefined) {
        this['dead_letter_queue'] = deadLetterQueue;
    }
    public get deadLetterQueue(): DeadLetterQueue | undefined {
        return this['dead_letter_queue'];
    }
    public withCreatedTime(createdTime: string): ShowDetailOfSubscriptionTargetResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowDetailOfSubscriptionTargetResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}