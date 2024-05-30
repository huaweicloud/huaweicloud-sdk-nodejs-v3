import { BizTypeEnum } from './BizTypeEnum';
import { SyncStatusEnum } from './SyncStatusEnum';


export class PublishVersionVO {
    public id?: string;
    private 'version_name'?: string;
    private 'version_tag'?: string;
    public description?: string;
    private 'biz_id'?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'biz_info'?: string;
    private 'biz_info_vo'?: object;
    private 'effect_objs'?: string;
    private 'change_props'?: string;
    private 'sql_ddl'?: string;
    private 'physical_table'?: SyncStatusEnum;
    private 'dev_physical_table'?: SyncStatusEnum;
    private 'technical_asset'?: SyncStatusEnum;
    private 'business_asset'?: SyncStatusEnum;
    private 'meta_data_link'?: SyncStatusEnum;
    private 'data_quality'?: SyncStatusEnum;
    private 'dlf_task'?: SyncStatusEnum;
    public materialization?: SyncStatusEnum;
    private 'publish_to_dlm'?: SyncStatusEnum;
    private 'biz_metric'?: SyncStatusEnum;
    private 'summary_status'?: SyncStatusEnum;
    private 'is_current_version'?: boolean;
    private 'create_time'?: Date;
    private 'create_by'?: string;
    public constructor(versionName?: string) { 
        this['version_name'] = versionName;
    }
    public withId(id: string): PublishVersionVO {
        this['id'] = id;
        return this;
    }
    public withVersionName(versionName: string): PublishVersionVO {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withVersionTag(versionTag: string): PublishVersionVO {
        this['version_tag'] = versionTag;
        return this;
    }
    public set versionTag(versionTag: string  | undefined) {
        this['version_tag'] = versionTag;
    }
    public get versionTag(): string | undefined {
        return this['version_tag'];
    }
    public withDescription(description: string): PublishVersionVO {
        this['description'] = description;
        return this;
    }
    public withBizId(bizId: string): PublishVersionVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: BizTypeEnum): PublishVersionVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withBizInfo(bizInfo: string): PublishVersionVO {
        this['biz_info'] = bizInfo;
        return this;
    }
    public set bizInfo(bizInfo: string  | undefined) {
        this['biz_info'] = bizInfo;
    }
    public get bizInfo(): string | undefined {
        return this['biz_info'];
    }
    public withBizInfoVo(bizInfoVo: object): PublishVersionVO {
        this['biz_info_vo'] = bizInfoVo;
        return this;
    }
    public set bizInfoVo(bizInfoVo: object  | undefined) {
        this['biz_info_vo'] = bizInfoVo;
    }
    public get bizInfoVo(): object | undefined {
        return this['biz_info_vo'];
    }
    public withEffectObjs(effectObjs: string): PublishVersionVO {
        this['effect_objs'] = effectObjs;
        return this;
    }
    public set effectObjs(effectObjs: string  | undefined) {
        this['effect_objs'] = effectObjs;
    }
    public get effectObjs(): string | undefined {
        return this['effect_objs'];
    }
    public withChangeProps(changeProps: string): PublishVersionVO {
        this['change_props'] = changeProps;
        return this;
    }
    public set changeProps(changeProps: string  | undefined) {
        this['change_props'] = changeProps;
    }
    public get changeProps(): string | undefined {
        return this['change_props'];
    }
    public withSqlDdl(sqlDdl: string): PublishVersionVO {
        this['sql_ddl'] = sqlDdl;
        return this;
    }
    public set sqlDdl(sqlDdl: string  | undefined) {
        this['sql_ddl'] = sqlDdl;
    }
    public get sqlDdl(): string | undefined {
        return this['sql_ddl'];
    }
    public withPhysicalTable(physicalTable: SyncStatusEnum): PublishVersionVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusEnum  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusEnum | undefined {
        return this['physical_table'];
    }
    public withDevPhysicalTable(devPhysicalTable: SyncStatusEnum): PublishVersionVO {
        this['dev_physical_table'] = devPhysicalTable;
        return this;
    }
    public set devPhysicalTable(devPhysicalTable: SyncStatusEnum  | undefined) {
        this['dev_physical_table'] = devPhysicalTable;
    }
    public get devPhysicalTable(): SyncStatusEnum | undefined {
        return this['dev_physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusEnum): PublishVersionVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusEnum  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusEnum | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusEnum): PublishVersionVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusEnum  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusEnum | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusEnum): PublishVersionVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusEnum  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusEnum | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusEnum): PublishVersionVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusEnum  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusEnum | undefined {
        return this['data_quality'];
    }
    public withDlfTask(dlfTask: SyncStatusEnum): PublishVersionVO {
        this['dlf_task'] = dlfTask;
        return this;
    }
    public set dlfTask(dlfTask: SyncStatusEnum  | undefined) {
        this['dlf_task'] = dlfTask;
    }
    public get dlfTask(): SyncStatusEnum | undefined {
        return this['dlf_task'];
    }
    public withMaterialization(materialization: SyncStatusEnum): PublishVersionVO {
        this['materialization'] = materialization;
        return this;
    }
    public withPublishToDlm(publishToDlm: SyncStatusEnum): PublishVersionVO {
        this['publish_to_dlm'] = publishToDlm;
        return this;
    }
    public set publishToDlm(publishToDlm: SyncStatusEnum  | undefined) {
        this['publish_to_dlm'] = publishToDlm;
    }
    public get publishToDlm(): SyncStatusEnum | undefined {
        return this['publish_to_dlm'];
    }
    public withBizMetric(bizMetric: SyncStatusEnum): PublishVersionVO {
        this['biz_metric'] = bizMetric;
        return this;
    }
    public set bizMetric(bizMetric: SyncStatusEnum  | undefined) {
        this['biz_metric'] = bizMetric;
    }
    public get bizMetric(): SyncStatusEnum | undefined {
        return this['biz_metric'];
    }
    public withSummaryStatus(summaryStatus: SyncStatusEnum): PublishVersionVO {
        this['summary_status'] = summaryStatus;
        return this;
    }
    public set summaryStatus(summaryStatus: SyncStatusEnum  | undefined) {
        this['summary_status'] = summaryStatus;
    }
    public get summaryStatus(): SyncStatusEnum | undefined {
        return this['summary_status'];
    }
    public withIsCurrentVersion(isCurrentVersion: boolean): PublishVersionVO {
        this['is_current_version'] = isCurrentVersion;
        return this;
    }
    public set isCurrentVersion(isCurrentVersion: boolean  | undefined) {
        this['is_current_version'] = isCurrentVersion;
    }
    public get isCurrentVersion(): boolean | undefined {
        return this['is_current_version'];
    }
    public withCreateTime(createTime: Date): PublishVersionVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateBy(createBy: string): PublishVersionVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
}