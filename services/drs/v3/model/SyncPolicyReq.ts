

export class SyncPolicyReq {
    private 'job_id': string | undefined;
    private 'conflict_policy'?: SyncPolicyReqConflictPolicyEnum | undefined;
    private 'filter_ddl_policy'?: SyncPolicyReqFilterDdlPolicyEnum | undefined;
    private 'ddl_trans'?: boolean | undefined;
    private 'index_trans'?: boolean | undefined;
    private 'topic_policy'?: SyncPolicyReqTopicPolicyEnum | undefined;
    public topic?: string;
    private 'partition_policy'?: SyncPolicyReqPartitionPolicyEnum | undefined;
    private 'kafka_data_format'?: SyncPolicyReqKafkaDataFormatEnum | undefined;
    private 'topic_name_format'?: string | undefined;
    private 'partitions_num'?: string | undefined;
    private 'replication_factor'?: string | undefined;
    private 'is_fill_materialized_view'?: boolean | undefined;
    private 'export_snapshot'?: boolean | undefined;
    private 'slot_name'?: string | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): SyncPolicyReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withConflictPolicy(conflictPolicy: SyncPolicyReqConflictPolicyEnum): SyncPolicyReq {
        this['conflict_policy'] = conflictPolicy;
        return this;
    }
    public set conflictPolicy(conflictPolicy: SyncPolicyReqConflictPolicyEnum | undefined) {
        this['conflict_policy'] = conflictPolicy;
    }
    public get conflictPolicy() {
        return this['conflict_policy'];
    }
    public withFilterDdlPolicy(filterDdlPolicy: SyncPolicyReqFilterDdlPolicyEnum): SyncPolicyReq {
        this['filter_ddl_policy'] = filterDdlPolicy;
        return this;
    }
    public set filterDdlPolicy(filterDdlPolicy: SyncPolicyReqFilterDdlPolicyEnum | undefined) {
        this['filter_ddl_policy'] = filterDdlPolicy;
    }
    public get filterDdlPolicy() {
        return this['filter_ddl_policy'];
    }
    public withDdlTrans(ddlTrans: boolean): SyncPolicyReq {
        this['ddl_trans'] = ddlTrans;
        return this;
    }
    public set ddlTrans(ddlTrans: boolean | undefined) {
        this['ddl_trans'] = ddlTrans;
    }
    public get ddlTrans() {
        return this['ddl_trans'];
    }
    public withIndexTrans(indexTrans: boolean): SyncPolicyReq {
        this['index_trans'] = indexTrans;
        return this;
    }
    public set indexTrans(indexTrans: boolean | undefined) {
        this['index_trans'] = indexTrans;
    }
    public get indexTrans() {
        return this['index_trans'];
    }
    public withTopicPolicy(topicPolicy: SyncPolicyReqTopicPolicyEnum): SyncPolicyReq {
        this['topic_policy'] = topicPolicy;
        return this;
    }
    public set topicPolicy(topicPolicy: SyncPolicyReqTopicPolicyEnum | undefined) {
        this['topic_policy'] = topicPolicy;
    }
    public get topicPolicy() {
        return this['topic_policy'];
    }
    public withTopic(topic: string): SyncPolicyReq {
        this['topic'] = topic;
        return this;
    }
    public withPartitionPolicy(partitionPolicy: SyncPolicyReqPartitionPolicyEnum): SyncPolicyReq {
        this['partition_policy'] = partitionPolicy;
        return this;
    }
    public set partitionPolicy(partitionPolicy: SyncPolicyReqPartitionPolicyEnum | undefined) {
        this['partition_policy'] = partitionPolicy;
    }
    public get partitionPolicy() {
        return this['partition_policy'];
    }
    public withKafkaDataFormat(kafkaDataFormat: SyncPolicyReqKafkaDataFormatEnum): SyncPolicyReq {
        this['kafka_data_format'] = kafkaDataFormat;
        return this;
    }
    public set kafkaDataFormat(kafkaDataFormat: SyncPolicyReqKafkaDataFormatEnum | undefined) {
        this['kafka_data_format'] = kafkaDataFormat;
    }
    public get kafkaDataFormat() {
        return this['kafka_data_format'];
    }
    public withTopicNameFormat(topicNameFormat: string): SyncPolicyReq {
        this['topic_name_format'] = topicNameFormat;
        return this;
    }
    public set topicNameFormat(topicNameFormat: string | undefined) {
        this['topic_name_format'] = topicNameFormat;
    }
    public get topicNameFormat() {
        return this['topic_name_format'];
    }
    public withPartitionsNum(partitionsNum: string): SyncPolicyReq {
        this['partitions_num'] = partitionsNum;
        return this;
    }
    public set partitionsNum(partitionsNum: string | undefined) {
        this['partitions_num'] = partitionsNum;
    }
    public get partitionsNum() {
        return this['partitions_num'];
    }
    public withReplicationFactor(replicationFactor: string): SyncPolicyReq {
        this['replication_factor'] = replicationFactor;
        return this;
    }
    public set replicationFactor(replicationFactor: string | undefined) {
        this['replication_factor'] = replicationFactor;
    }
    public get replicationFactor() {
        return this['replication_factor'];
    }
    public withIsFillMaterializedView(isFillMaterializedView: boolean): SyncPolicyReq {
        this['is_fill_materialized_view'] = isFillMaterializedView;
        return this;
    }
    public set isFillMaterializedView(isFillMaterializedView: boolean | undefined) {
        this['is_fill_materialized_view'] = isFillMaterializedView;
    }
    public get isFillMaterializedView() {
        return this['is_fill_materialized_view'];
    }
    public withExportSnapshot(exportSnapshot: boolean): SyncPolicyReq {
        this['export_snapshot'] = exportSnapshot;
        return this;
    }
    public set exportSnapshot(exportSnapshot: boolean | undefined) {
        this['export_snapshot'] = exportSnapshot;
    }
    public get exportSnapshot() {
        return this['export_snapshot'];
    }
    public withSlotName(slotName: string): SyncPolicyReq {
        this['slot_name'] = slotName;
        return this;
    }
    public set slotName(slotName: string | undefined) {
        this['slot_name'] = slotName;
    }
    public get slotName() {
        return this['slot_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SyncPolicyReqConflictPolicyEnum {
    IGNORE = 'ignore',
    OVERWRITE = 'overwrite',
    STOP = 'stop'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncPolicyReqFilterDdlPolicyEnum {
    DROP_DATABASE = 'drop_database'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncPolicyReqTopicPolicyEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2',
    E_3 = '3'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncPolicyReqPartitionPolicyEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2',
    E_3 = '3'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncPolicyReqKafkaDataFormatEnum {
    JSON = 'json',
    AVRO = 'avro'
}
