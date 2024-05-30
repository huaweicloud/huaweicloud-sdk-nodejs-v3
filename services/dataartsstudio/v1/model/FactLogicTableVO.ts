import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { EnvTypeEnum } from './EnvTypeEnum';
import { FactTableAttributeVO } from './FactTableAttributeVO';
import { SecrecyLevelVO } from './SecrecyLevelVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { SyncStatusEnum } from './SyncStatusEnum';
import { TableMappingVO } from './TableMappingVO';


export class FactLogicTableVO {
    public id?: string;
    private 'tb_name'?: string;
    private 'tb_logic_name'?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    public description?: string;
    private 'dw_name'?: string;
    public owner?: string;
    private 'create_by'?: string;
    private 'queue_name'?: string;
    private 'dw_id'?: string;
    private 'db_name'?: string;
    private 'tb_id'?: string;
    private 'dim_table_ids'?: Array<string>;
    public reversed?: boolean;
    private 'partition_conf'?: string;
    private 'dirty_out_switch'?: boolean;
    private 'dirty_out_database'?: string;
    private 'dirty_out_prefix'?: string;
    private 'dirty_out_suffix'?: string;
    public schema?: string;
    public distribute?: FactLogicTableVODistributeEnum | string;
    private 'distribute_column'?: string;
    private 'table_type'?: string;
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
    public dimensions?: Array<FactTableAttributeVO>;
    public attributes?: Array<FactTableAttributeVO>;
    public mappings?: Array<TableMappingVO>;
    public measures?: Array<FactTableAttributeVO>;
    private 'table_attributes'?: Array<FactTableAttributeVO>;
    public configs?: string;
    private 'physical_table'?: SyncStatusEnum;
    private 'dev_physical_table'?: SyncStatusEnum;
    private 'technical_asset'?: SyncStatusEnum;
    private 'business_asset'?: SyncStatusEnum;
    private 'meta_data_link'?: SyncStatusEnum;
    private 'data_quality'?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    private 'quality_id'?: string;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    private 'obs_location'?: string;
    private 'dev_version'?: string;
    private 'prod_version'?: string;
    private 'dev_version_name'?: string;
    private 'prod_version_name'?: string;
    private 'env_type'?: EnvTypeEnum;
    private 'secrecy_levels'?: Array<SecrecyLevelVO>;
    public constructor(tbName?: string, tbLogicName?: string, l3Id?: string, owner?: string, dwId?: string, dbName?: string, dwType?: string) { 
        this['tb_name'] = tbName;
        this['tb_logic_name'] = tbLogicName;
        this['l3_id'] = l3Id;
        this['owner'] = owner;
        this['dw_id'] = dwId;
        this['db_name'] = dbName;
        this['dw_type'] = dwType;
    }
    public withId(id: string): FactLogicTableVO {
        this['id'] = id;
        return this;
    }
    public withTbName(tbName: string): FactLogicTableVO {
        this['tb_name'] = tbName;
        return this;
    }
    public set tbName(tbName: string  | undefined) {
        this['tb_name'] = tbName;
    }
    public get tbName(): string | undefined {
        return this['tb_name'];
    }
    public withTbLogicName(tbLogicName: string): FactLogicTableVO {
        this['tb_logic_name'] = tbLogicName;
        return this;
    }
    public set tbLogicName(tbLogicName: string  | undefined) {
        this['tb_logic_name'] = tbLogicName;
    }
    public get tbLogicName(): string | undefined {
        return this['tb_logic_name'];
    }
    public withL1Id(l1Id: string): FactLogicTableVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): FactLogicTableVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): FactLogicTableVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withDescription(description: string): FactLogicTableVO {
        this['description'] = description;
        return this;
    }
    public withDwName(dwName: string): FactLogicTableVO {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withOwner(owner: string): FactLogicTableVO {
        this['owner'] = owner;
        return this;
    }
    public withCreateBy(createBy: string): FactLogicTableVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withQueueName(queueName: string): FactLogicTableVO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withDwId(dwId: string): FactLogicTableVO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDbName(dbName: string): FactLogicTableVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTbId(tbId: string): FactLogicTableVO {
        this['tb_id'] = tbId;
        return this;
    }
    public set tbId(tbId: string  | undefined) {
        this['tb_id'] = tbId;
    }
    public get tbId(): string | undefined {
        return this['tb_id'];
    }
    public withDimTableIds(dimTableIds: Array<string>): FactLogicTableVO {
        this['dim_table_ids'] = dimTableIds;
        return this;
    }
    public set dimTableIds(dimTableIds: Array<string>  | undefined) {
        this['dim_table_ids'] = dimTableIds;
    }
    public get dimTableIds(): Array<string> | undefined {
        return this['dim_table_ids'];
    }
    public withReversed(reversed: boolean): FactLogicTableVO {
        this['reversed'] = reversed;
        return this;
    }
    public withPartitionConf(partitionConf: string): FactLogicTableVO {
        this['partition_conf'] = partitionConf;
        return this;
    }
    public set partitionConf(partitionConf: string  | undefined) {
        this['partition_conf'] = partitionConf;
    }
    public get partitionConf(): string | undefined {
        return this['partition_conf'];
    }
    public withDirtyOutSwitch(dirtyOutSwitch: boolean): FactLogicTableVO {
        this['dirty_out_switch'] = dirtyOutSwitch;
        return this;
    }
    public set dirtyOutSwitch(dirtyOutSwitch: boolean  | undefined) {
        this['dirty_out_switch'] = dirtyOutSwitch;
    }
    public get dirtyOutSwitch(): boolean | undefined {
        return this['dirty_out_switch'];
    }
    public withDirtyOutDatabase(dirtyOutDatabase: string): FactLogicTableVO {
        this['dirty_out_database'] = dirtyOutDatabase;
        return this;
    }
    public set dirtyOutDatabase(dirtyOutDatabase: string  | undefined) {
        this['dirty_out_database'] = dirtyOutDatabase;
    }
    public get dirtyOutDatabase(): string | undefined {
        return this['dirty_out_database'];
    }
    public withDirtyOutPrefix(dirtyOutPrefix: string): FactLogicTableVO {
        this['dirty_out_prefix'] = dirtyOutPrefix;
        return this;
    }
    public set dirtyOutPrefix(dirtyOutPrefix: string  | undefined) {
        this['dirty_out_prefix'] = dirtyOutPrefix;
    }
    public get dirtyOutPrefix(): string | undefined {
        return this['dirty_out_prefix'];
    }
    public withDirtyOutSuffix(dirtyOutSuffix: string): FactLogicTableVO {
        this['dirty_out_suffix'] = dirtyOutSuffix;
        return this;
    }
    public set dirtyOutSuffix(dirtyOutSuffix: string  | undefined) {
        this['dirty_out_suffix'] = dirtyOutSuffix;
    }
    public get dirtyOutSuffix(): string | undefined {
        return this['dirty_out_suffix'];
    }
    public withSchema(schema: string): FactLogicTableVO {
        this['schema'] = schema;
        return this;
    }
    public withDistribute(distribute: FactLogicTableVODistributeEnum | string): FactLogicTableVO {
        this['distribute'] = distribute;
        return this;
    }
    public withDistributeColumn(distributeColumn: string): FactLogicTableVO {
        this['distribute_column'] = distributeColumn;
        return this;
    }
    public set distributeColumn(distributeColumn: string  | undefined) {
        this['distribute_column'] = distributeColumn;
    }
    public get distributeColumn(): string | undefined {
        return this['distribute_column'];
    }
    public withTableType(tableType: string): FactLogicTableVO {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withStatus(status: BizStatusEnum): FactLogicTableVO {
        this['status'] = status;
        return this;
    }
    public withTbGuid(tbGuid: string): FactLogicTableVO {
        this['tb_guid'] = tbGuid;
        return this;
    }
    public set tbGuid(tbGuid: string  | undefined) {
        this['tb_guid'] = tbGuid;
    }
    public get tbGuid(): string | undefined {
        return this['tb_guid'];
    }
    public withTbLogicGuid(tbLogicGuid: string): FactLogicTableVO {
        this['tb_logic_guid'] = tbLogicGuid;
        return this;
    }
    public set tbLogicGuid(tbLogicGuid: string  | undefined) {
        this['tb_logic_guid'] = tbLogicGuid;
    }
    public get tbLogicGuid(): string | undefined {
        return this['tb_logic_guid'];
    }
    public withDwType(dwType: string): FactLogicTableVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withL1(l1: string): FactLogicTableVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): FactLogicTableVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): FactLogicTableVO {
        this['l3'] = l3;
        return this;
    }
    public withCreateTime(createTime: Date): FactLogicTableVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): FactLogicTableVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): FactLogicTableVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): FactLogicTableVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withDimensions(dimensions: Array<FactTableAttributeVO>): FactLogicTableVO {
        this['dimensions'] = dimensions;
        return this;
    }
    public withAttributes(attributes: Array<FactTableAttributeVO>): FactLogicTableVO {
        this['attributes'] = attributes;
        return this;
    }
    public withMappings(mappings: Array<TableMappingVO>): FactLogicTableVO {
        this['mappings'] = mappings;
        return this;
    }
    public withMeasures(measures: Array<FactTableAttributeVO>): FactLogicTableVO {
        this['measures'] = measures;
        return this;
    }
    public withTableAttributes(tableAttributes: Array<FactTableAttributeVO>): FactLogicTableVO {
        this['table_attributes'] = tableAttributes;
        return this;
    }
    public set tableAttributes(tableAttributes: Array<FactTableAttributeVO>  | undefined) {
        this['table_attributes'] = tableAttributes;
    }
    public get tableAttributes(): Array<FactTableAttributeVO> | undefined {
        return this['table_attributes'];
    }
    public withConfigs(configs: string): FactLogicTableVO {
        this['configs'] = configs;
        return this;
    }
    public withPhysicalTable(physicalTable: SyncStatusEnum): FactLogicTableVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusEnum  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusEnum | undefined {
        return this['physical_table'];
    }
    public withDevPhysicalTable(devPhysicalTable: SyncStatusEnum): FactLogicTableVO {
        this['dev_physical_table'] = devPhysicalTable;
        return this;
    }
    public set devPhysicalTable(devPhysicalTable: SyncStatusEnum  | undefined) {
        this['dev_physical_table'] = devPhysicalTable;
    }
    public get devPhysicalTable(): SyncStatusEnum | undefined {
        return this['dev_physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusEnum): FactLogicTableVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusEnum  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusEnum | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusEnum): FactLogicTableVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusEnum  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusEnum | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusEnum): FactLogicTableVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusEnum  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusEnum | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusEnum): FactLogicTableVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusEnum  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusEnum | undefined {
        return this['data_quality'];
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): FactLogicTableVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withQualityId(qualityId: string): FactLogicTableVO {
        this['quality_id'] = qualityId;
        return this;
    }
    public set qualityId(qualityId: string  | undefined) {
        this['quality_id'] = qualityId;
    }
    public get qualityId(): string | undefined {
        return this['quality_id'];
    }
    public withAlias(alias: string): FactLogicTableVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): FactLogicTableVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
    public withObsLocation(obsLocation: string): FactLogicTableVO {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: string  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): string | undefined {
        return this['obs_location'];
    }
    public withDevVersion(devVersion: string): FactLogicTableVO {
        this['dev_version'] = devVersion;
        return this;
    }
    public set devVersion(devVersion: string  | undefined) {
        this['dev_version'] = devVersion;
    }
    public get devVersion(): string | undefined {
        return this['dev_version'];
    }
    public withProdVersion(prodVersion: string): FactLogicTableVO {
        this['prod_version'] = prodVersion;
        return this;
    }
    public set prodVersion(prodVersion: string  | undefined) {
        this['prod_version'] = prodVersion;
    }
    public get prodVersion(): string | undefined {
        return this['prod_version'];
    }
    public withDevVersionName(devVersionName: string): FactLogicTableVO {
        this['dev_version_name'] = devVersionName;
        return this;
    }
    public set devVersionName(devVersionName: string  | undefined) {
        this['dev_version_name'] = devVersionName;
    }
    public get devVersionName(): string | undefined {
        return this['dev_version_name'];
    }
    public withProdVersionName(prodVersionName: string): FactLogicTableVO {
        this['prod_version_name'] = prodVersionName;
        return this;
    }
    public set prodVersionName(prodVersionName: string  | undefined) {
        this['prod_version_name'] = prodVersionName;
    }
    public get prodVersionName(): string | undefined {
        return this['prod_version_name'];
    }
    public withEnvType(envType: EnvTypeEnum): FactLogicTableVO {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: EnvTypeEnum  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): EnvTypeEnum | undefined {
        return this['env_type'];
    }
    public withSecrecyLevels(secrecyLevels: Array<SecrecyLevelVO>): FactLogicTableVO {
        this['secrecy_levels'] = secrecyLevels;
        return this;
    }
    public set secrecyLevels(secrecyLevels: Array<SecrecyLevelVO>  | undefined) {
        this['secrecy_levels'] = secrecyLevels;
    }
    public get secrecyLevels(): Array<SecrecyLevelVO> | undefined {
        return this['secrecy_levels'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FactLogicTableVODistributeEnum {
    HASH = 'HASH',
    REPLICATION = 'REPLICATION'
}
