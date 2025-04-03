import { AggregationLogicTableAttributeVO } from './AggregationLogicTableAttributeVO';
import { ApplyBgEnum } from './ApplyBgEnum';
import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { EnvTypeEnum } from './EnvTypeEnum';
import { SecretTypeEnum } from './SecretTypeEnum';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { SyncStatusEnum } from './SyncStatusEnum';
import { WorkspaceVO } from './WorkspaceVO';


export class AggregationLogicTableVO {
    public id?: string;
    private 'tb_name'?: string;
    private 'tb_logic_name'?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    public description?: string;
    public owner?: string;
    private 'secret_type'?: SecretTypeEnum;
    private 'apply_bg'?: ApplyBgEnum;
    private 'create_by'?: string;
    private 'queue_name'?: string;
    private 'dw_id'?: string;
    private 'db_name'?: string;
    private 'tb_id'?: string;
    public schema?: string;
    private 'dw_name'?: string;
    public status?: BizStatusEnum;
    private 'tb_guid'?: string;
    private 'tb_logic_guid'?: string;
    private 'dw_type'?: string;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    private 'dimension_group'?: string;
    private 'group_name'?: string;
    private 'group_code'?: string;
    private 'time_period'?: AggregationLogicTableAttributeVO;
    private 'table_attributes'?: Array<AggregationLogicTableAttributeVO>;
    private 'physical_table'?: SyncStatusEnum;
    private 'dev_physical_table'?: SyncStatusEnum;
    private 'technical_asset'?: SyncStatusEnum;
    private 'business_asset'?: SyncStatusEnum;
    private 'meta_data_link'?: SyncStatusEnum;
    private 'data_quality'?: SyncStatusEnum;
    private 'dlf_task'?: SyncStatusEnum;
    private 'publish_to_dlm'?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    public distribute?: AggregationLogicTableVODistributeEnum | string;
    private 'distribute_column'?: string;
    public compression?: AggregationLogicTableVOCompressionEnum | string;
    private 'obs_location'?: string;
    private 'pre_combine_field'?: string;
    private 'table_type'?: string;
    private 'dlf_task_id'?: string;
    private 'quality_id'?: string;
    public reversed?: boolean;
    private 'table_version'?: number;
    private 'partition_conf'?: string;
    private 'dirty_out_switch'?: boolean;
    private 'dirty_out_database'?: string;
    private 'dirty_out_prefix'?: string;
    private 'dirty_out_suffix'?: string;
    public alias?: string;
    public configs?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    private 'api_id'?: string;
    public sql?: string;
    private 'dev_version'?: string;
    private 'prod_version'?: string;
    private 'dev_version_name'?: string;
    private 'prod_version_name'?: string;
    private 'env_type'?: EnvTypeEnum;
    private 'model_id'?: string;
    public model?: WorkspaceVO;
    public constructor(tbName?: string, tbLogicName?: string, l3Id?: string, owner?: string, dwId?: string, dbName?: string, dwType?: string) { 
        this['tb_name'] = tbName;
        this['tb_logic_name'] = tbLogicName;
        this['l3_id'] = l3Id;
        this['owner'] = owner;
        this['dw_id'] = dwId;
        this['db_name'] = dbName;
        this['dw_type'] = dwType;
    }
    public withId(id: string): AggregationLogicTableVO {
        this['id'] = id;
        return this;
    }
    public withTbName(tbName: string): AggregationLogicTableVO {
        this['tb_name'] = tbName;
        return this;
    }
    public set tbName(tbName: string  | undefined) {
        this['tb_name'] = tbName;
    }
    public get tbName(): string | undefined {
        return this['tb_name'];
    }
    public withTbLogicName(tbLogicName: string): AggregationLogicTableVO {
        this['tb_logic_name'] = tbLogicName;
        return this;
    }
    public set tbLogicName(tbLogicName: string  | undefined) {
        this['tb_logic_name'] = tbLogicName;
    }
    public get tbLogicName(): string | undefined {
        return this['tb_logic_name'];
    }
    public withL1Id(l1Id: string): AggregationLogicTableVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): AggregationLogicTableVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): AggregationLogicTableVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withDescription(description: string): AggregationLogicTableVO {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): AggregationLogicTableVO {
        this['owner'] = owner;
        return this;
    }
    public withSecretType(secretType: SecretTypeEnum): AggregationLogicTableVO {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: SecretTypeEnum  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): SecretTypeEnum | undefined {
        return this['secret_type'];
    }
    public withApplyBg(applyBg: ApplyBgEnum): AggregationLogicTableVO {
        this['apply_bg'] = applyBg;
        return this;
    }
    public set applyBg(applyBg: ApplyBgEnum  | undefined) {
        this['apply_bg'] = applyBg;
    }
    public get applyBg(): ApplyBgEnum | undefined {
        return this['apply_bg'];
    }
    public withCreateBy(createBy: string): AggregationLogicTableVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withQueueName(queueName: string): AggregationLogicTableVO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withDwId(dwId: string): AggregationLogicTableVO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDbName(dbName: string): AggregationLogicTableVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTbId(tbId: string): AggregationLogicTableVO {
        this['tb_id'] = tbId;
        return this;
    }
    public set tbId(tbId: string  | undefined) {
        this['tb_id'] = tbId;
    }
    public get tbId(): string | undefined {
        return this['tb_id'];
    }
    public withSchema(schema: string): AggregationLogicTableVO {
        this['schema'] = schema;
        return this;
    }
    public withDwName(dwName: string): AggregationLogicTableVO {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withStatus(status: BizStatusEnum): AggregationLogicTableVO {
        this['status'] = status;
        return this;
    }
    public withTbGuid(tbGuid: string): AggregationLogicTableVO {
        this['tb_guid'] = tbGuid;
        return this;
    }
    public set tbGuid(tbGuid: string  | undefined) {
        this['tb_guid'] = tbGuid;
    }
    public get tbGuid(): string | undefined {
        return this['tb_guid'];
    }
    public withTbLogicGuid(tbLogicGuid: string): AggregationLogicTableVO {
        this['tb_logic_guid'] = tbLogicGuid;
        return this;
    }
    public set tbLogicGuid(tbLogicGuid: string  | undefined) {
        this['tb_logic_guid'] = tbLogicGuid;
    }
    public get tbLogicGuid(): string | undefined {
        return this['tb_logic_guid'];
    }
    public withDwType(dwType: string): AggregationLogicTableVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withL1(l1: string): AggregationLogicTableVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): AggregationLogicTableVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): AggregationLogicTableVO {
        this['l3'] = l3;
        return this;
    }
    public withCreateTime(createTime: Date): AggregationLogicTableVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AggregationLogicTableVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): AggregationLogicTableVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): AggregationLogicTableVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withDimensionGroup(dimensionGroup: string): AggregationLogicTableVO {
        this['dimension_group'] = dimensionGroup;
        return this;
    }
    public set dimensionGroup(dimensionGroup: string  | undefined) {
        this['dimension_group'] = dimensionGroup;
    }
    public get dimensionGroup(): string | undefined {
        return this['dimension_group'];
    }
    public withGroupName(groupName: string): AggregationLogicTableVO {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupCode(groupCode: string): AggregationLogicTableVO {
        this['group_code'] = groupCode;
        return this;
    }
    public set groupCode(groupCode: string  | undefined) {
        this['group_code'] = groupCode;
    }
    public get groupCode(): string | undefined {
        return this['group_code'];
    }
    public withTimePeriod(timePeriod: AggregationLogicTableAttributeVO): AggregationLogicTableVO {
        this['time_period'] = timePeriod;
        return this;
    }
    public set timePeriod(timePeriod: AggregationLogicTableAttributeVO  | undefined) {
        this['time_period'] = timePeriod;
    }
    public get timePeriod(): AggregationLogicTableAttributeVO | undefined {
        return this['time_period'];
    }
    public withTableAttributes(tableAttributes: Array<AggregationLogicTableAttributeVO>): AggregationLogicTableVO {
        this['table_attributes'] = tableAttributes;
        return this;
    }
    public set tableAttributes(tableAttributes: Array<AggregationLogicTableAttributeVO>  | undefined) {
        this['table_attributes'] = tableAttributes;
    }
    public get tableAttributes(): Array<AggregationLogicTableAttributeVO> | undefined {
        return this['table_attributes'];
    }
    public withPhysicalTable(physicalTable: SyncStatusEnum): AggregationLogicTableVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusEnum  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusEnum | undefined {
        return this['physical_table'];
    }
    public withDevPhysicalTable(devPhysicalTable: SyncStatusEnum): AggregationLogicTableVO {
        this['dev_physical_table'] = devPhysicalTable;
        return this;
    }
    public set devPhysicalTable(devPhysicalTable: SyncStatusEnum  | undefined) {
        this['dev_physical_table'] = devPhysicalTable;
    }
    public get devPhysicalTable(): SyncStatusEnum | undefined {
        return this['dev_physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusEnum): AggregationLogicTableVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusEnum  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusEnum | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusEnum): AggregationLogicTableVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusEnum  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusEnum | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusEnum): AggregationLogicTableVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusEnum  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusEnum | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusEnum): AggregationLogicTableVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusEnum  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusEnum | undefined {
        return this['data_quality'];
    }
    public withDlfTask(dlfTask: SyncStatusEnum): AggregationLogicTableVO {
        this['dlf_task'] = dlfTask;
        return this;
    }
    public set dlfTask(dlfTask: SyncStatusEnum  | undefined) {
        this['dlf_task'] = dlfTask;
    }
    public get dlfTask(): SyncStatusEnum | undefined {
        return this['dlf_task'];
    }
    public withPublishToDlm(publishToDlm: SyncStatusEnum): AggregationLogicTableVO {
        this['publish_to_dlm'] = publishToDlm;
        return this;
    }
    public set publishToDlm(publishToDlm: SyncStatusEnum  | undefined) {
        this['publish_to_dlm'] = publishToDlm;
    }
    public get publishToDlm(): SyncStatusEnum | undefined {
        return this['publish_to_dlm'];
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): AggregationLogicTableVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withDistribute(distribute: AggregationLogicTableVODistributeEnum | string): AggregationLogicTableVO {
        this['distribute'] = distribute;
        return this;
    }
    public withDistributeColumn(distributeColumn: string): AggregationLogicTableVO {
        this['distribute_column'] = distributeColumn;
        return this;
    }
    public set distributeColumn(distributeColumn: string  | undefined) {
        this['distribute_column'] = distributeColumn;
    }
    public get distributeColumn(): string | undefined {
        return this['distribute_column'];
    }
    public withCompression(compression: AggregationLogicTableVOCompressionEnum | string): AggregationLogicTableVO {
        this['compression'] = compression;
        return this;
    }
    public withObsLocation(obsLocation: string): AggregationLogicTableVO {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: string  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): string | undefined {
        return this['obs_location'];
    }
    public withPreCombineField(preCombineField: string): AggregationLogicTableVO {
        this['pre_combine_field'] = preCombineField;
        return this;
    }
    public set preCombineField(preCombineField: string  | undefined) {
        this['pre_combine_field'] = preCombineField;
    }
    public get preCombineField(): string | undefined {
        return this['pre_combine_field'];
    }
    public withTableType(tableType: string): AggregationLogicTableVO {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withDlfTaskId(dlfTaskId: string): AggregationLogicTableVO {
        this['dlf_task_id'] = dlfTaskId;
        return this;
    }
    public set dlfTaskId(dlfTaskId: string  | undefined) {
        this['dlf_task_id'] = dlfTaskId;
    }
    public get dlfTaskId(): string | undefined {
        return this['dlf_task_id'];
    }
    public withQualityId(qualityId: string): AggregationLogicTableVO {
        this['quality_id'] = qualityId;
        return this;
    }
    public set qualityId(qualityId: string  | undefined) {
        this['quality_id'] = qualityId;
    }
    public get qualityId(): string | undefined {
        return this['quality_id'];
    }
    public withReversed(reversed: boolean): AggregationLogicTableVO {
        this['reversed'] = reversed;
        return this;
    }
    public withTableVersion(tableVersion: number): AggregationLogicTableVO {
        this['table_version'] = tableVersion;
        return this;
    }
    public set tableVersion(tableVersion: number  | undefined) {
        this['table_version'] = tableVersion;
    }
    public get tableVersion(): number | undefined {
        return this['table_version'];
    }
    public withPartitionConf(partitionConf: string): AggregationLogicTableVO {
        this['partition_conf'] = partitionConf;
        return this;
    }
    public set partitionConf(partitionConf: string  | undefined) {
        this['partition_conf'] = partitionConf;
    }
    public get partitionConf(): string | undefined {
        return this['partition_conf'];
    }
    public withDirtyOutSwitch(dirtyOutSwitch: boolean): AggregationLogicTableVO {
        this['dirty_out_switch'] = dirtyOutSwitch;
        return this;
    }
    public set dirtyOutSwitch(dirtyOutSwitch: boolean  | undefined) {
        this['dirty_out_switch'] = dirtyOutSwitch;
    }
    public get dirtyOutSwitch(): boolean | undefined {
        return this['dirty_out_switch'];
    }
    public withDirtyOutDatabase(dirtyOutDatabase: string): AggregationLogicTableVO {
        this['dirty_out_database'] = dirtyOutDatabase;
        return this;
    }
    public set dirtyOutDatabase(dirtyOutDatabase: string  | undefined) {
        this['dirty_out_database'] = dirtyOutDatabase;
    }
    public get dirtyOutDatabase(): string | undefined {
        return this['dirty_out_database'];
    }
    public withDirtyOutPrefix(dirtyOutPrefix: string): AggregationLogicTableVO {
        this['dirty_out_prefix'] = dirtyOutPrefix;
        return this;
    }
    public set dirtyOutPrefix(dirtyOutPrefix: string  | undefined) {
        this['dirty_out_prefix'] = dirtyOutPrefix;
    }
    public get dirtyOutPrefix(): string | undefined {
        return this['dirty_out_prefix'];
    }
    public withDirtyOutSuffix(dirtyOutSuffix: string): AggregationLogicTableVO {
        this['dirty_out_suffix'] = dirtyOutSuffix;
        return this;
    }
    public set dirtyOutSuffix(dirtyOutSuffix: string  | undefined) {
        this['dirty_out_suffix'] = dirtyOutSuffix;
    }
    public get dirtyOutSuffix(): string | undefined {
        return this['dirty_out_suffix'];
    }
    public withAlias(alias: string): AggregationLogicTableVO {
        this['alias'] = alias;
        return this;
    }
    public withConfigs(configs: string): AggregationLogicTableVO {
        this['configs'] = configs;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): AggregationLogicTableVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
    public withApiId(apiId: string): AggregationLogicTableVO {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withSql(sql: string): AggregationLogicTableVO {
        this['sql'] = sql;
        return this;
    }
    public withDevVersion(devVersion: string): AggregationLogicTableVO {
        this['dev_version'] = devVersion;
        return this;
    }
    public set devVersion(devVersion: string  | undefined) {
        this['dev_version'] = devVersion;
    }
    public get devVersion(): string | undefined {
        return this['dev_version'];
    }
    public withProdVersion(prodVersion: string): AggregationLogicTableVO {
        this['prod_version'] = prodVersion;
        return this;
    }
    public set prodVersion(prodVersion: string  | undefined) {
        this['prod_version'] = prodVersion;
    }
    public get prodVersion(): string | undefined {
        return this['prod_version'];
    }
    public withDevVersionName(devVersionName: string): AggregationLogicTableVO {
        this['dev_version_name'] = devVersionName;
        return this;
    }
    public set devVersionName(devVersionName: string  | undefined) {
        this['dev_version_name'] = devVersionName;
    }
    public get devVersionName(): string | undefined {
        return this['dev_version_name'];
    }
    public withProdVersionName(prodVersionName: string): AggregationLogicTableVO {
        this['prod_version_name'] = prodVersionName;
        return this;
    }
    public set prodVersionName(prodVersionName: string  | undefined) {
        this['prod_version_name'] = prodVersionName;
    }
    public get prodVersionName(): string | undefined {
        return this['prod_version_name'];
    }
    public withEnvType(envType: EnvTypeEnum): AggregationLogicTableVO {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: EnvTypeEnum  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): EnvTypeEnum | undefined {
        return this['env_type'];
    }
    public withModelId(modelId: string): AggregationLogicTableVO {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withModel(model: WorkspaceVO): AggregationLogicTableVO {
        this['model'] = model;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AggregationLogicTableVODistributeEnum {
    HASH = 'HASH',
    REPLICATION = 'REPLICATION'
}
/**
    * @export
    * @enum {string}
    */
export enum AggregationLogicTableVOCompressionEnum {
    NO = 'NO',
    YES = 'YES',
    LOW = 'LOW',
    MIDDLE = 'MIDDLE',
    HIGH = 'HIGH'
}
