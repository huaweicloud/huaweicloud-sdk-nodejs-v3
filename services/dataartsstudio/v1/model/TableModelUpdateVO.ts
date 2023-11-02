import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { RelationVO } from './RelationVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { SyncStatusEnum } from './SyncStatusEnum';
import { TableMappingVO } from './TableMappingVO';
import { TableModelAttributeVO } from './TableModelAttributeVO';
import { TagVO } from './TagVO';
import { WorkspaceVO } from './WorkspaceVO';


export class TableModelUpdateVO {
    public id?: number;
    private 'model_id'?: number;
    private 'parent_table_id'?: number;
    private 'parent_table_name'?: string;
    private 'parent_table_code'?: string;
    public model?: WorkspaceVO;
    private 'data_format'?: string;
    private 'obs_bucket'?: string;
    private 'obs_location'?: string;
    public configs?: string;
    private 'table_type'?: string;
    public owner?: string;
    private 'tb_name'?: string;
    private 'dw_id'?: string;
    private 'db_name'?: string;
    private 'queue_name'?: string;
    public schema?: string;
    private 'extend_info'?: string;
    private 'tb_guid'?: string;
    private 'tb_id'?: string;
    private 'logic_tb_name'?: string;
    private 'logic_tb_guid'?: string;
    public description?: string;
    public status?: BizStatusEnum;
    private 'logic_tb_id'?: number;
    private 'biz_catalog_id'?: number;
    private 'catalog_path'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public tags?: Array<TagVO>;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    public attributes?: Array<TableModelAttributeVO>;
    public mappings?: Array<TableMappingVO>;
    public relations?: Array<RelationVO>;
    private 'dw_type'?: string;
    private 'dw_name'?: string;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'l1_id'?: number;
    private 'l2_id'?: string;
    private 'l3_id'?: number;
    private 'partition_conf'?: string;
    private 'dlf_task_id'?: string;
    private 'use_recently_partition'?: boolean;
    public reversed?: boolean;
    private 'dirty_out_switch'?: boolean;
    private 'dirty_out_database'?: string;
    private 'dirty_out_prefix'?: string;
    private 'dirty_out_suffix'?: string;
    private 'quality_owner'?: string;
    private 'quality_id'?: number;
    public distribute?: TableModelUpdateVODistributeEnum | string;
    private 'distribute_column'?: string;
    private 'is_partition'?: boolean;
    private 'physical_table'?: SyncStatusEnum;
    private 'technical_asset'?: SyncStatusEnum;
    private 'business_asset'?: SyncStatusEnum;
    private 'meta_data_link'?: SyncStatusEnum;
    private 'data_quality'?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(id?: number, modelId?: number, tbName?: string, logicTbName?: string, description?: string, attributes?: Array<TableModelAttributeVO>, dwType?: string) { 
        this['id'] = id;
        this['model_id'] = modelId;
        this['tb_name'] = tbName;
        this['logic_tb_name'] = logicTbName;
        this['description'] = description;
        this['attributes'] = attributes;
        this['dw_type'] = dwType;
    }
    public withId(id: number): TableModelUpdateVO {
        this['id'] = id;
        return this;
    }
    public withModelId(modelId: number): TableModelUpdateVO {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: number  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): number | undefined {
        return this['model_id'];
    }
    public withParentTableId(parentTableId: number): TableModelUpdateVO {
        this['parent_table_id'] = parentTableId;
        return this;
    }
    public set parentTableId(parentTableId: number  | undefined) {
        this['parent_table_id'] = parentTableId;
    }
    public get parentTableId(): number | undefined {
        return this['parent_table_id'];
    }
    public withParentTableName(parentTableName: string): TableModelUpdateVO {
        this['parent_table_name'] = parentTableName;
        return this;
    }
    public set parentTableName(parentTableName: string  | undefined) {
        this['parent_table_name'] = parentTableName;
    }
    public get parentTableName(): string | undefined {
        return this['parent_table_name'];
    }
    public withParentTableCode(parentTableCode: string): TableModelUpdateVO {
        this['parent_table_code'] = parentTableCode;
        return this;
    }
    public set parentTableCode(parentTableCode: string  | undefined) {
        this['parent_table_code'] = parentTableCode;
    }
    public get parentTableCode(): string | undefined {
        return this['parent_table_code'];
    }
    public withModel(model: WorkspaceVO): TableModelUpdateVO {
        this['model'] = model;
        return this;
    }
    public withDataFormat(dataFormat: string): TableModelUpdateVO {
        this['data_format'] = dataFormat;
        return this;
    }
    public set dataFormat(dataFormat: string  | undefined) {
        this['data_format'] = dataFormat;
    }
    public get dataFormat(): string | undefined {
        return this['data_format'];
    }
    public withObsBucket(obsBucket: string): TableModelUpdateVO {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withObsLocation(obsLocation: string): TableModelUpdateVO {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: string  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): string | undefined {
        return this['obs_location'];
    }
    public withConfigs(configs: string): TableModelUpdateVO {
        this['configs'] = configs;
        return this;
    }
    public withTableType(tableType: string): TableModelUpdateVO {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withOwner(owner: string): TableModelUpdateVO {
        this['owner'] = owner;
        return this;
    }
    public withTbName(tbName: string): TableModelUpdateVO {
        this['tb_name'] = tbName;
        return this;
    }
    public set tbName(tbName: string  | undefined) {
        this['tb_name'] = tbName;
    }
    public get tbName(): string | undefined {
        return this['tb_name'];
    }
    public withDwId(dwId: string): TableModelUpdateVO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDbName(dbName: string): TableModelUpdateVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withQueueName(queueName: string): TableModelUpdateVO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSchema(schema: string): TableModelUpdateVO {
        this['schema'] = schema;
        return this;
    }
    public withExtendInfo(extendInfo: string): TableModelUpdateVO {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: string  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): string | undefined {
        return this['extend_info'];
    }
    public withTbGuid(tbGuid: string): TableModelUpdateVO {
        this['tb_guid'] = tbGuid;
        return this;
    }
    public set tbGuid(tbGuid: string  | undefined) {
        this['tb_guid'] = tbGuid;
    }
    public get tbGuid(): string | undefined {
        return this['tb_guid'];
    }
    public withTbId(tbId: string): TableModelUpdateVO {
        this['tb_id'] = tbId;
        return this;
    }
    public set tbId(tbId: string  | undefined) {
        this['tb_id'] = tbId;
    }
    public get tbId(): string | undefined {
        return this['tb_id'];
    }
    public withLogicTbName(logicTbName: string): TableModelUpdateVO {
        this['logic_tb_name'] = logicTbName;
        return this;
    }
    public set logicTbName(logicTbName: string  | undefined) {
        this['logic_tb_name'] = logicTbName;
    }
    public get logicTbName(): string | undefined {
        return this['logic_tb_name'];
    }
    public withLogicTbGuid(logicTbGuid: string): TableModelUpdateVO {
        this['logic_tb_guid'] = logicTbGuid;
        return this;
    }
    public set logicTbGuid(logicTbGuid: string  | undefined) {
        this['logic_tb_guid'] = logicTbGuid;
    }
    public get logicTbGuid(): string | undefined {
        return this['logic_tb_guid'];
    }
    public withDescription(description: string): TableModelUpdateVO {
        this['description'] = description;
        return this;
    }
    public withStatus(status: BizStatusEnum): TableModelUpdateVO {
        this['status'] = status;
        return this;
    }
    public withLogicTbId(logicTbId: number): TableModelUpdateVO {
        this['logic_tb_id'] = logicTbId;
        return this;
    }
    public set logicTbId(logicTbId: number  | undefined) {
        this['logic_tb_id'] = logicTbId;
    }
    public get logicTbId(): number | undefined {
        return this['logic_tb_id'];
    }
    public withBizCatalogId(bizCatalogId: number): TableModelUpdateVO {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: number  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): number | undefined {
        return this['biz_catalog_id'];
    }
    public withCatalogPath(catalogPath: string): TableModelUpdateVO {
        this['catalog_path'] = catalogPath;
        return this;
    }
    public set catalogPath(catalogPath: string  | undefined) {
        this['catalog_path'] = catalogPath;
    }
    public get catalogPath(): string | undefined {
        return this['catalog_path'];
    }
    public withCreateBy(createBy: string): TableModelUpdateVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): TableModelUpdateVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): TableModelUpdateVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): TableModelUpdateVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withTags(tags: Array<TagVO>): TableModelUpdateVO {
        this['tags'] = tags;
        return this;
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): TableModelUpdateVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): TableModelUpdateVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withAttributes(attributes: Array<TableModelAttributeVO>): TableModelUpdateVO {
        this['attributes'] = attributes;
        return this;
    }
    public withMappings(mappings: Array<TableMappingVO>): TableModelUpdateVO {
        this['mappings'] = mappings;
        return this;
    }
    public withRelations(relations: Array<RelationVO>): TableModelUpdateVO {
        this['relations'] = relations;
        return this;
    }
    public withDwType(dwType: string): TableModelUpdateVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withDwName(dwName: string): TableModelUpdateVO {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withL1(l1: string): TableModelUpdateVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): TableModelUpdateVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): TableModelUpdateVO {
        this['l3'] = l3;
        return this;
    }
    public withL1Id(l1Id: number): TableModelUpdateVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: number  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): number | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): TableModelUpdateVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: number): TableModelUpdateVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: number  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): number | undefined {
        return this['l3_id'];
    }
    public withPartitionConf(partitionConf: string): TableModelUpdateVO {
        this['partition_conf'] = partitionConf;
        return this;
    }
    public set partitionConf(partitionConf: string  | undefined) {
        this['partition_conf'] = partitionConf;
    }
    public get partitionConf(): string | undefined {
        return this['partition_conf'];
    }
    public withDlfTaskId(dlfTaskId: string): TableModelUpdateVO {
        this['dlf_task_id'] = dlfTaskId;
        return this;
    }
    public set dlfTaskId(dlfTaskId: string  | undefined) {
        this['dlf_task_id'] = dlfTaskId;
    }
    public get dlfTaskId(): string | undefined {
        return this['dlf_task_id'];
    }
    public withUseRecentlyPartition(useRecentlyPartition: boolean): TableModelUpdateVO {
        this['use_recently_partition'] = useRecentlyPartition;
        return this;
    }
    public set useRecentlyPartition(useRecentlyPartition: boolean  | undefined) {
        this['use_recently_partition'] = useRecentlyPartition;
    }
    public get useRecentlyPartition(): boolean | undefined {
        return this['use_recently_partition'];
    }
    public withReversed(reversed: boolean): TableModelUpdateVO {
        this['reversed'] = reversed;
        return this;
    }
    public withDirtyOutSwitch(dirtyOutSwitch: boolean): TableModelUpdateVO {
        this['dirty_out_switch'] = dirtyOutSwitch;
        return this;
    }
    public set dirtyOutSwitch(dirtyOutSwitch: boolean  | undefined) {
        this['dirty_out_switch'] = dirtyOutSwitch;
    }
    public get dirtyOutSwitch(): boolean | undefined {
        return this['dirty_out_switch'];
    }
    public withDirtyOutDatabase(dirtyOutDatabase: string): TableModelUpdateVO {
        this['dirty_out_database'] = dirtyOutDatabase;
        return this;
    }
    public set dirtyOutDatabase(dirtyOutDatabase: string  | undefined) {
        this['dirty_out_database'] = dirtyOutDatabase;
    }
    public get dirtyOutDatabase(): string | undefined {
        return this['dirty_out_database'];
    }
    public withDirtyOutPrefix(dirtyOutPrefix: string): TableModelUpdateVO {
        this['dirty_out_prefix'] = dirtyOutPrefix;
        return this;
    }
    public set dirtyOutPrefix(dirtyOutPrefix: string  | undefined) {
        this['dirty_out_prefix'] = dirtyOutPrefix;
    }
    public get dirtyOutPrefix(): string | undefined {
        return this['dirty_out_prefix'];
    }
    public withDirtyOutSuffix(dirtyOutSuffix: string): TableModelUpdateVO {
        this['dirty_out_suffix'] = dirtyOutSuffix;
        return this;
    }
    public set dirtyOutSuffix(dirtyOutSuffix: string  | undefined) {
        this['dirty_out_suffix'] = dirtyOutSuffix;
    }
    public get dirtyOutSuffix(): string | undefined {
        return this['dirty_out_suffix'];
    }
    public withQualityOwner(qualityOwner: string): TableModelUpdateVO {
        this['quality_owner'] = qualityOwner;
        return this;
    }
    public set qualityOwner(qualityOwner: string  | undefined) {
        this['quality_owner'] = qualityOwner;
    }
    public get qualityOwner(): string | undefined {
        return this['quality_owner'];
    }
    public withQualityId(qualityId: number): TableModelUpdateVO {
        this['quality_id'] = qualityId;
        return this;
    }
    public set qualityId(qualityId: number  | undefined) {
        this['quality_id'] = qualityId;
    }
    public get qualityId(): number | undefined {
        return this['quality_id'];
    }
    public withDistribute(distribute: TableModelUpdateVODistributeEnum | string): TableModelUpdateVO {
        this['distribute'] = distribute;
        return this;
    }
    public withDistributeColumn(distributeColumn: string): TableModelUpdateVO {
        this['distribute_column'] = distributeColumn;
        return this;
    }
    public set distributeColumn(distributeColumn: string  | undefined) {
        this['distribute_column'] = distributeColumn;
    }
    public get distributeColumn(): string | undefined {
        return this['distribute_column'];
    }
    public withIsPartition(isPartition: boolean): TableModelUpdateVO {
        this['is_partition'] = isPartition;
        return this;
    }
    public set isPartition(isPartition: boolean  | undefined) {
        this['is_partition'] = isPartition;
    }
    public get isPartition(): boolean | undefined {
        return this['is_partition'];
    }
    public withPhysicalTable(physicalTable: SyncStatusEnum): TableModelUpdateVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusEnum  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusEnum | undefined {
        return this['physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusEnum): TableModelUpdateVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusEnum  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusEnum | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusEnum): TableModelUpdateVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusEnum  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusEnum | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusEnum): TableModelUpdateVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusEnum  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusEnum | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusEnum): TableModelUpdateVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusEnum  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusEnum | undefined {
        return this['data_quality'];
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): TableModelUpdateVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withAlias(alias: string): TableModelUpdateVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): TableModelUpdateVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TableModelUpdateVODistributeEnum {
    HASH = 'HASH',
    REPLICATION = 'REPLICATION'
}
