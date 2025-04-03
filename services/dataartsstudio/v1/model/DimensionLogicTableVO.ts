import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { CodeTableVO } from './CodeTableVO';
import { DimensionLogicTableAttributeVO } from './DimensionLogicTableAttributeVO';
import { EnvTypeEnum } from './EnvTypeEnum';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { SyncStatusEnum } from './SyncStatusEnum';
import { WorkspaceVO } from './WorkspaceVO';


export class DimensionLogicTableVO {
    public id?: string;
    private 'tb_name'?: string;
    private 'tb_logic_name'?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    private 'create_by'?: string;
    public description?: string;
    private 'dimension_id'?: string;
    public owner?: string;
    private 'dimension_type'?: DimensionLogicTableVODimensionTypeEnum | string;
    private 'code_table_id'?: string;
    private 'code_table'?: CodeTableVO;
    private 'queue_name'?: string;
    private 'dw_id'?: string;
    public reversed?: boolean;
    private 'partition_conf'?: string;
    private 'dirty_out_switch'?: boolean;
    private 'dirty_out_database'?: string;
    private 'dirty_out_prefix'?: string;
    private 'dirty_out_suffix'?: string;
    private 'db_name'?: string;
    private 'tb_id'?: string;
    public schema?: string;
    private 'table_type'?: string;
    public status?: BizStatusEnum;
    private 'tb_guid'?: string;
    private 'tb_logic_guid'?: string;
    private 'dimension_name'?: string;
    public attributes?: Array<DimensionLogicTableAttributeVO>;
    private 'dw_type'?: string;
    private 'dw_name'?: string;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    private 'physical_table'?: SyncStatusEnum;
    private 'dev_physical_table'?: SyncStatusEnum;
    private 'technical_asset'?: SyncStatusEnum;
    private 'business_asset'?: SyncStatusEnum;
    private 'meta_data_link'?: SyncStatusEnum;
    private 'data_quality'?: SyncStatusEnum;
    public materialization?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    public distribute?: DimensionLogicTableVODistributeEnum | string;
    private 'distribute_column'?: string;
    private 'quality_id'?: string;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    private 'obs_location'?: string;
    public configs?: string;
    private 'dev_version'?: string;
    private 'prod_version'?: string;
    private 'dev_version_name'?: string;
    private 'prod_version_name'?: string;
    private 'env_type'?: EnvTypeEnum;
    private 'model_id'?: string;
    public model?: WorkspaceVO;
    public constructor() { 
    }
    public withId(id: string): DimensionLogicTableVO {
        this['id'] = id;
        return this;
    }
    public withTbName(tbName: string): DimensionLogicTableVO {
        this['tb_name'] = tbName;
        return this;
    }
    public set tbName(tbName: string  | undefined) {
        this['tb_name'] = tbName;
    }
    public get tbName(): string | undefined {
        return this['tb_name'];
    }
    public withTbLogicName(tbLogicName: string): DimensionLogicTableVO {
        this['tb_logic_name'] = tbLogicName;
        return this;
    }
    public set tbLogicName(tbLogicName: string  | undefined) {
        this['tb_logic_name'] = tbLogicName;
    }
    public get tbLogicName(): string | undefined {
        return this['tb_logic_name'];
    }
    public withL1Id(l1Id: string): DimensionLogicTableVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): DimensionLogicTableVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): DimensionLogicTableVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withCreateBy(createBy: string): DimensionLogicTableVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withDescription(description: string): DimensionLogicTableVO {
        this['description'] = description;
        return this;
    }
    public withDimensionId(dimensionId: string): DimensionLogicTableVO {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: string  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): string | undefined {
        return this['dimension_id'];
    }
    public withOwner(owner: string): DimensionLogicTableVO {
        this['owner'] = owner;
        return this;
    }
    public withDimensionType(dimensionType: DimensionLogicTableVODimensionTypeEnum | string): DimensionLogicTableVO {
        this['dimension_type'] = dimensionType;
        return this;
    }
    public set dimensionType(dimensionType: DimensionLogicTableVODimensionTypeEnum | string  | undefined) {
        this['dimension_type'] = dimensionType;
    }
    public get dimensionType(): DimensionLogicTableVODimensionTypeEnum | string | undefined {
        return this['dimension_type'];
    }
    public withCodeTableId(codeTableId: string): DimensionLogicTableVO {
        this['code_table_id'] = codeTableId;
        return this;
    }
    public set codeTableId(codeTableId: string  | undefined) {
        this['code_table_id'] = codeTableId;
    }
    public get codeTableId(): string | undefined {
        return this['code_table_id'];
    }
    public withCodeTable(codeTable: CodeTableVO): DimensionLogicTableVO {
        this['code_table'] = codeTable;
        return this;
    }
    public set codeTable(codeTable: CodeTableVO  | undefined) {
        this['code_table'] = codeTable;
    }
    public get codeTable(): CodeTableVO | undefined {
        return this['code_table'];
    }
    public withQueueName(queueName: string): DimensionLogicTableVO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withDwId(dwId: string): DimensionLogicTableVO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withReversed(reversed: boolean): DimensionLogicTableVO {
        this['reversed'] = reversed;
        return this;
    }
    public withPartitionConf(partitionConf: string): DimensionLogicTableVO {
        this['partition_conf'] = partitionConf;
        return this;
    }
    public set partitionConf(partitionConf: string  | undefined) {
        this['partition_conf'] = partitionConf;
    }
    public get partitionConf(): string | undefined {
        return this['partition_conf'];
    }
    public withDirtyOutSwitch(dirtyOutSwitch: boolean): DimensionLogicTableVO {
        this['dirty_out_switch'] = dirtyOutSwitch;
        return this;
    }
    public set dirtyOutSwitch(dirtyOutSwitch: boolean  | undefined) {
        this['dirty_out_switch'] = dirtyOutSwitch;
    }
    public get dirtyOutSwitch(): boolean | undefined {
        return this['dirty_out_switch'];
    }
    public withDirtyOutDatabase(dirtyOutDatabase: string): DimensionLogicTableVO {
        this['dirty_out_database'] = dirtyOutDatabase;
        return this;
    }
    public set dirtyOutDatabase(dirtyOutDatabase: string  | undefined) {
        this['dirty_out_database'] = dirtyOutDatabase;
    }
    public get dirtyOutDatabase(): string | undefined {
        return this['dirty_out_database'];
    }
    public withDirtyOutPrefix(dirtyOutPrefix: string): DimensionLogicTableVO {
        this['dirty_out_prefix'] = dirtyOutPrefix;
        return this;
    }
    public set dirtyOutPrefix(dirtyOutPrefix: string  | undefined) {
        this['dirty_out_prefix'] = dirtyOutPrefix;
    }
    public get dirtyOutPrefix(): string | undefined {
        return this['dirty_out_prefix'];
    }
    public withDirtyOutSuffix(dirtyOutSuffix: string): DimensionLogicTableVO {
        this['dirty_out_suffix'] = dirtyOutSuffix;
        return this;
    }
    public set dirtyOutSuffix(dirtyOutSuffix: string  | undefined) {
        this['dirty_out_suffix'] = dirtyOutSuffix;
    }
    public get dirtyOutSuffix(): string | undefined {
        return this['dirty_out_suffix'];
    }
    public withDbName(dbName: string): DimensionLogicTableVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTbId(tbId: string): DimensionLogicTableVO {
        this['tb_id'] = tbId;
        return this;
    }
    public set tbId(tbId: string  | undefined) {
        this['tb_id'] = tbId;
    }
    public get tbId(): string | undefined {
        return this['tb_id'];
    }
    public withSchema(schema: string): DimensionLogicTableVO {
        this['schema'] = schema;
        return this;
    }
    public withTableType(tableType: string): DimensionLogicTableVO {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withStatus(status: BizStatusEnum): DimensionLogicTableVO {
        this['status'] = status;
        return this;
    }
    public withTbGuid(tbGuid: string): DimensionLogicTableVO {
        this['tb_guid'] = tbGuid;
        return this;
    }
    public set tbGuid(tbGuid: string  | undefined) {
        this['tb_guid'] = tbGuid;
    }
    public get tbGuid(): string | undefined {
        return this['tb_guid'];
    }
    public withTbLogicGuid(tbLogicGuid: string): DimensionLogicTableVO {
        this['tb_logic_guid'] = tbLogicGuid;
        return this;
    }
    public set tbLogicGuid(tbLogicGuid: string  | undefined) {
        this['tb_logic_guid'] = tbLogicGuid;
    }
    public get tbLogicGuid(): string | undefined {
        return this['tb_logic_guid'];
    }
    public withDimensionName(dimensionName: string): DimensionLogicTableVO {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withAttributes(attributes: Array<DimensionLogicTableAttributeVO>): DimensionLogicTableVO {
        this['attributes'] = attributes;
        return this;
    }
    public withDwType(dwType: string): DimensionLogicTableVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withDwName(dwName: string): DimensionLogicTableVO {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withL1(l1: string): DimensionLogicTableVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): DimensionLogicTableVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): DimensionLogicTableVO {
        this['l3'] = l3;
        return this;
    }
    public withCreateTime(createTime: Date): DimensionLogicTableVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DimensionLogicTableVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): DimensionLogicTableVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): DimensionLogicTableVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withPhysicalTable(physicalTable: SyncStatusEnum): DimensionLogicTableVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusEnum  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusEnum | undefined {
        return this['physical_table'];
    }
    public withDevPhysicalTable(devPhysicalTable: SyncStatusEnum): DimensionLogicTableVO {
        this['dev_physical_table'] = devPhysicalTable;
        return this;
    }
    public set devPhysicalTable(devPhysicalTable: SyncStatusEnum  | undefined) {
        this['dev_physical_table'] = devPhysicalTable;
    }
    public get devPhysicalTable(): SyncStatusEnum | undefined {
        return this['dev_physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusEnum): DimensionLogicTableVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusEnum  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusEnum | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusEnum): DimensionLogicTableVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusEnum  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusEnum | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusEnum): DimensionLogicTableVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusEnum  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusEnum | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusEnum): DimensionLogicTableVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusEnum  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusEnum | undefined {
        return this['data_quality'];
    }
    public withMaterialization(materialization: SyncStatusEnum): DimensionLogicTableVO {
        this['materialization'] = materialization;
        return this;
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): DimensionLogicTableVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withDistribute(distribute: DimensionLogicTableVODistributeEnum | string): DimensionLogicTableVO {
        this['distribute'] = distribute;
        return this;
    }
    public withDistributeColumn(distributeColumn: string): DimensionLogicTableVO {
        this['distribute_column'] = distributeColumn;
        return this;
    }
    public set distributeColumn(distributeColumn: string  | undefined) {
        this['distribute_column'] = distributeColumn;
    }
    public get distributeColumn(): string | undefined {
        return this['distribute_column'];
    }
    public withQualityId(qualityId: string): DimensionLogicTableVO {
        this['quality_id'] = qualityId;
        return this;
    }
    public set qualityId(qualityId: string  | undefined) {
        this['quality_id'] = qualityId;
    }
    public get qualityId(): string | undefined {
        return this['quality_id'];
    }
    public withAlias(alias: string): DimensionLogicTableVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): DimensionLogicTableVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
    public withObsLocation(obsLocation: string): DimensionLogicTableVO {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: string  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): string | undefined {
        return this['obs_location'];
    }
    public withConfigs(configs: string): DimensionLogicTableVO {
        this['configs'] = configs;
        return this;
    }
    public withDevVersion(devVersion: string): DimensionLogicTableVO {
        this['dev_version'] = devVersion;
        return this;
    }
    public set devVersion(devVersion: string  | undefined) {
        this['dev_version'] = devVersion;
    }
    public get devVersion(): string | undefined {
        return this['dev_version'];
    }
    public withProdVersion(prodVersion: string): DimensionLogicTableVO {
        this['prod_version'] = prodVersion;
        return this;
    }
    public set prodVersion(prodVersion: string  | undefined) {
        this['prod_version'] = prodVersion;
    }
    public get prodVersion(): string | undefined {
        return this['prod_version'];
    }
    public withDevVersionName(devVersionName: string): DimensionLogicTableVO {
        this['dev_version_name'] = devVersionName;
        return this;
    }
    public set devVersionName(devVersionName: string  | undefined) {
        this['dev_version_name'] = devVersionName;
    }
    public get devVersionName(): string | undefined {
        return this['dev_version_name'];
    }
    public withProdVersionName(prodVersionName: string): DimensionLogicTableVO {
        this['prod_version_name'] = prodVersionName;
        return this;
    }
    public set prodVersionName(prodVersionName: string  | undefined) {
        this['prod_version_name'] = prodVersionName;
    }
    public get prodVersionName(): string | undefined {
        return this['prod_version_name'];
    }
    public withEnvType(envType: EnvTypeEnum): DimensionLogicTableVO {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: EnvTypeEnum  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): EnvTypeEnum | undefined {
        return this['env_type'];
    }
    public withModelId(modelId: string): DimensionLogicTableVO {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withModel(model: WorkspaceVO): DimensionLogicTableVO {
        this['model'] = model;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DimensionLogicTableVODimensionTypeEnum {
    COMMON = 'COMMON',
    LOOKUP = 'LOOKUP',
    HIERARCHIES = 'HIERARCHIES'
}
/**
    * @export
    * @enum {string}
    */
export enum DimensionLogicTableVODistributeEnum {
    HASH = 'HASH',
    REPLICATION = 'REPLICATION'
}
