import { KafkaMessageDiagnosisConclusionEntity } from './KafkaMessageDiagnosisConclusionEntity';


export class KafkaMessageDiagnosisItemEntity {
    public name?: string;
    public result?: string;
    private 'cause_ids'?: Array<KafkaMessageDiagnosisConclusionEntity>;
    private 'advice_ids'?: Array<KafkaMessageDiagnosisConclusionEntity>;
    public partitions?: Array<number>;
    private 'failed_partitions'?: Array<number>;
    private 'broker_ids'?: Array<number>;
    public constructor(name?: string, result?: string) { 
        this['name'] = name;
        this['result'] = result;
    }
    public withName(name: string): KafkaMessageDiagnosisItemEntity {
        this['name'] = name;
        return this;
    }
    public withResult(result: string): KafkaMessageDiagnosisItemEntity {
        this['result'] = result;
        return this;
    }
    public withCauseIds(causeIds: Array<KafkaMessageDiagnosisConclusionEntity>): KafkaMessageDiagnosisItemEntity {
        this['cause_ids'] = causeIds;
        return this;
    }
    public set causeIds(causeIds: Array<KafkaMessageDiagnosisConclusionEntity>  | undefined) {
        this['cause_ids'] = causeIds;
    }
    public get causeIds(): Array<KafkaMessageDiagnosisConclusionEntity> | undefined {
        return this['cause_ids'];
    }
    public withAdviceIds(adviceIds: Array<KafkaMessageDiagnosisConclusionEntity>): KafkaMessageDiagnosisItemEntity {
        this['advice_ids'] = adviceIds;
        return this;
    }
    public set adviceIds(adviceIds: Array<KafkaMessageDiagnosisConclusionEntity>  | undefined) {
        this['advice_ids'] = adviceIds;
    }
    public get adviceIds(): Array<KafkaMessageDiagnosisConclusionEntity> | undefined {
        return this['advice_ids'];
    }
    public withPartitions(partitions: Array<number>): KafkaMessageDiagnosisItemEntity {
        this['partitions'] = partitions;
        return this;
    }
    public withFailedPartitions(failedPartitions: Array<number>): KafkaMessageDiagnosisItemEntity {
        this['failed_partitions'] = failedPartitions;
        return this;
    }
    public set failedPartitions(failedPartitions: Array<number>  | undefined) {
        this['failed_partitions'] = failedPartitions;
    }
    public get failedPartitions(): Array<number> | undefined {
        return this['failed_partitions'];
    }
    public withBrokerIds(brokerIds: Array<number>): KafkaMessageDiagnosisItemEntity {
        this['broker_ids'] = brokerIds;
        return this;
    }
    public set brokerIds(brokerIds: Array<number>  | undefined) {
        this['broker_ids'] = brokerIds;
    }
    public get brokerIds(): Array<number> | undefined {
        return this['broker_ids'];
    }
}