import { BizStatusEnum } from './BizStatusEnum';
import { BizTypeEnum } from './BizTypeEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { EnvTypeEnum } from './EnvTypeEnum';
import { SyncStatusEnum } from './SyncStatusEnum';


export class AllTableVO {
    public id?: string;
    public name?: string;
    private 'tb_logic_guid'?: string;
    private 'quality_id'?: string;
    public reversed?: boolean;
    private 'partition_conf'?: string;
    private 'dirty_out_switch'?: boolean;
    private 'dirty_out_database'?: string;
    private 'dirty_out_prefix'?: string;
    private 'dirty_out_suffix'?: string;
    private 'tb_guid'?: string;
    public code?: string;
    private 'create_by'?: string;
    private 'tenant_id'?: string;
    public description?: string;
    public status?: BizStatusEnum;
    private 'biz_type'?: BizTypeEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'db_name'?: string;
    private 'dw_type'?: string;
    private 'queue_name'?: string;
    public schema?: string;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    private 'new_biz'?: BizVersionManageVO;
    private 'physical_table'?: SyncStatusEnum;
    private 'dev_physical_table'?: SyncStatusEnum;
    private 'technical_asset'?: SyncStatusEnum;
    private 'business_asset'?: SyncStatusEnum;
    private 'meta_data_link'?: SyncStatusEnum;
    private 'data_quality'?: SyncStatusEnum;
    private 'dlf_task'?: SyncStatusEnum;
    public materialization?: SyncStatusEnum;
    private 'publish_to_dlm'?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    private 'standard_count'?: string;
    public alias?: string;
    private 'api_id'?: string;
    private 'workspace_id'?: string;
    private 'workspace_name'?: string;
    private 'dev_version'?: string;
    private 'prod_version'?: string;
    private 'dev_version_name'?: string;
    private 'prod_version_name'?: string;
    private 'env_type'?: EnvTypeEnum;
    public constructor() { 
    }
    public withId(id: string): AllTableVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AllTableVO {
        this['name'] = name;
        return this;
    }
    public withTbLogicGuid(tbLogicGuid: string): AllTableVO {
        this['tb_logic_guid'] = tbLogicGuid;
        return this;
    }
    public set tbLogicGuid(tbLogicGuid: string  | undefined) {
        this['tb_logic_guid'] = tbLogicGuid;
    }
    public get tbLogicGuid(): string | undefined {
        return this['tb_logic_guid'];
    }
    public withQualityId(qualityId: string): AllTableVO {
        this['quality_id'] = qualityId;
        return this;
    }
    public set qualityId(qualityId: string  | undefined) {
        this['quality_id'] = qualityId;
    }
    public get qualityId(): string | undefined {
        return this['quality_id'];
    }
    public withReversed(reversed: boolean): AllTableVO {
        this['reversed'] = reversed;
        return this;
    }
    public withPartitionConf(partitionConf: string): AllTableVO {
        this['partition_conf'] = partitionConf;
        return this;
    }
    public set partitionConf(partitionConf: string  | undefined) {
        this['partition_conf'] = partitionConf;
    }
    public get partitionConf(): string | undefined {
        return this['partition_conf'];
    }
    public withDirtyOutSwitch(dirtyOutSwitch: boolean): AllTableVO {
        this['dirty_out_switch'] = dirtyOutSwitch;
        return this;
    }
    public set dirtyOutSwitch(dirtyOutSwitch: boolean  | undefined) {
        this['dirty_out_switch'] = dirtyOutSwitch;
    }
    public get dirtyOutSwitch(): boolean | undefined {
        return this['dirty_out_switch'];
    }
    public withDirtyOutDatabase(dirtyOutDatabase: string): AllTableVO {
        this['dirty_out_database'] = dirtyOutDatabase;
        return this;
    }
    public set dirtyOutDatabase(dirtyOutDatabase: string  | undefined) {
        this['dirty_out_database'] = dirtyOutDatabase;
    }
    public get dirtyOutDatabase(): string | undefined {
        return this['dirty_out_database'];
    }
    public withDirtyOutPrefix(dirtyOutPrefix: string): AllTableVO {
        this['dirty_out_prefix'] = dirtyOutPrefix;
        return this;
    }
    public set dirtyOutPrefix(dirtyOutPrefix: string  | undefined) {
        this['dirty_out_prefix'] = dirtyOutPrefix;
    }
    public get dirtyOutPrefix(): string | undefined {
        return this['dirty_out_prefix'];
    }
    public withDirtyOutSuffix(dirtyOutSuffix: string): AllTableVO {
        this['dirty_out_suffix'] = dirtyOutSuffix;
        return this;
    }
    public set dirtyOutSuffix(dirtyOutSuffix: string  | undefined) {
        this['dirty_out_suffix'] = dirtyOutSuffix;
    }
    public get dirtyOutSuffix(): string | undefined {
        return this['dirty_out_suffix'];
    }
    public withTbGuid(tbGuid: string): AllTableVO {
        this['tb_guid'] = tbGuid;
        return this;
    }
    public set tbGuid(tbGuid: string  | undefined) {
        this['tb_guid'] = tbGuid;
    }
    public get tbGuid(): string | undefined {
        return this['tb_guid'];
    }
    public withCode(code: string): AllTableVO {
        this['code'] = code;
        return this;
    }
    public withCreateBy(createBy: string): AllTableVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withTenantId(tenantId: string): AllTableVO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDescription(description: string): AllTableVO {
        this['description'] = description;
        return this;
    }
    public withStatus(status: BizStatusEnum): AllTableVO {
        this['status'] = status;
        return this;
    }
    public withBizType(bizType: BizTypeEnum): AllTableVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withCreateTime(createTime: Date): AllTableVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AllTableVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withDbName(dbName: string): AllTableVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDwType(dwType: string): AllTableVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withQueueName(queueName: string): AllTableVO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSchema(schema: string): AllTableVO {
        this['schema'] = schema;
        return this;
    }
    public withL1(l1: string): AllTableVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): AllTableVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): AllTableVO {
        this['l3'] = l3;
        return this;
    }
    public withL1Id(l1Id: string): AllTableVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): AllTableVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): AllTableVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): AllTableVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withPhysicalTable(physicalTable: SyncStatusEnum): AllTableVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusEnum  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusEnum | undefined {
        return this['physical_table'];
    }
    public withDevPhysicalTable(devPhysicalTable: SyncStatusEnum): AllTableVO {
        this['dev_physical_table'] = devPhysicalTable;
        return this;
    }
    public set devPhysicalTable(devPhysicalTable: SyncStatusEnum  | undefined) {
        this['dev_physical_table'] = devPhysicalTable;
    }
    public get devPhysicalTable(): SyncStatusEnum | undefined {
        return this['dev_physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusEnum): AllTableVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusEnum  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusEnum | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusEnum): AllTableVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusEnum  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusEnum | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusEnum): AllTableVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusEnum  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusEnum | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusEnum): AllTableVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusEnum  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusEnum | undefined {
        return this['data_quality'];
    }
    public withDlfTask(dlfTask: SyncStatusEnum): AllTableVO {
        this['dlf_task'] = dlfTask;
        return this;
    }
    public set dlfTask(dlfTask: SyncStatusEnum  | undefined) {
        this['dlf_task'] = dlfTask;
    }
    public get dlfTask(): SyncStatusEnum | undefined {
        return this['dlf_task'];
    }
    public withMaterialization(materialization: SyncStatusEnum): AllTableVO {
        this['materialization'] = materialization;
        return this;
    }
    public withPublishToDlm(publishToDlm: SyncStatusEnum): AllTableVO {
        this['publish_to_dlm'] = publishToDlm;
        return this;
    }
    public set publishToDlm(publishToDlm: SyncStatusEnum  | undefined) {
        this['publish_to_dlm'] = publishToDlm;
    }
    public get publishToDlm(): SyncStatusEnum | undefined {
        return this['publish_to_dlm'];
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): AllTableVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withStandardCount(standardCount: string): AllTableVO {
        this['standard_count'] = standardCount;
        return this;
    }
    public set standardCount(standardCount: string  | undefined) {
        this['standard_count'] = standardCount;
    }
    public get standardCount(): string | undefined {
        return this['standard_count'];
    }
    public withAlias(alias: string): AllTableVO {
        this['alias'] = alias;
        return this;
    }
    public withApiId(apiId: string): AllTableVO {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withWorkspaceId(workspaceId: string): AllTableVO {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkspaceName(workspaceName: string): AllTableVO {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
    public withDevVersion(devVersion: string): AllTableVO {
        this['dev_version'] = devVersion;
        return this;
    }
    public set devVersion(devVersion: string  | undefined) {
        this['dev_version'] = devVersion;
    }
    public get devVersion(): string | undefined {
        return this['dev_version'];
    }
    public withProdVersion(prodVersion: string): AllTableVO {
        this['prod_version'] = prodVersion;
        return this;
    }
    public set prodVersion(prodVersion: string  | undefined) {
        this['prod_version'] = prodVersion;
    }
    public get prodVersion(): string | undefined {
        return this['prod_version'];
    }
    public withDevVersionName(devVersionName: string): AllTableVO {
        this['dev_version_name'] = devVersionName;
        return this;
    }
    public set devVersionName(devVersionName: string  | undefined) {
        this['dev_version_name'] = devVersionName;
    }
    public get devVersionName(): string | undefined {
        return this['dev_version_name'];
    }
    public withProdVersionName(prodVersionName: string): AllTableVO {
        this['prod_version_name'] = prodVersionName;
        return this;
    }
    public set prodVersionName(prodVersionName: string  | undefined) {
        this['prod_version_name'] = prodVersionName;
    }
    public get prodVersionName(): string | undefined {
        return this['prod_version_name'];
    }
    public withEnvType(envType: EnvTypeEnum): AllTableVO {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: EnvTypeEnum  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): EnvTypeEnum | undefined {
        return this['env_type'];
    }
}