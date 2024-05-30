import { StatisticStandardCoverageVO } from './StatisticStandardCoverageVO';
import { SyncStatusStatisticVO } from './SyncStatusStatisticVO';


export class TableModelStatisticVO {
    public total?: StatisticStandardCoverageVO;
    public published?: StatisticStandardCoverageVO;
    private 'sync_total'?: SyncStatusStatisticVO;
    private 'physical_table'?: SyncStatusStatisticVO;
    private 'technical_asset'?: SyncStatusStatisticVO;
    private 'business_asset'?: SyncStatusStatisticVO;
    private 'meta_data_link'?: SyncStatusStatisticVO;
    private 'data_quality'?: SyncStatusStatisticVO;
    public constructor() { 
    }
    public withTotal(total: StatisticStandardCoverageVO): TableModelStatisticVO {
        this['total'] = total;
        return this;
    }
    public withPublished(published: StatisticStandardCoverageVO): TableModelStatisticVO {
        this['published'] = published;
        return this;
    }
    public withSyncTotal(syncTotal: SyncStatusStatisticVO): TableModelStatisticVO {
        this['sync_total'] = syncTotal;
        return this;
    }
    public set syncTotal(syncTotal: SyncStatusStatisticVO  | undefined) {
        this['sync_total'] = syncTotal;
    }
    public get syncTotal(): SyncStatusStatisticVO | undefined {
        return this['sync_total'];
    }
    public withPhysicalTable(physicalTable: SyncStatusStatisticVO): TableModelStatisticVO {
        this['physical_table'] = physicalTable;
        return this;
    }
    public set physicalTable(physicalTable: SyncStatusStatisticVO  | undefined) {
        this['physical_table'] = physicalTable;
    }
    public get physicalTable(): SyncStatusStatisticVO | undefined {
        return this['physical_table'];
    }
    public withTechnicalAsset(technicalAsset: SyncStatusStatisticVO): TableModelStatisticVO {
        this['technical_asset'] = technicalAsset;
        return this;
    }
    public set technicalAsset(technicalAsset: SyncStatusStatisticVO  | undefined) {
        this['technical_asset'] = technicalAsset;
    }
    public get technicalAsset(): SyncStatusStatisticVO | undefined {
        return this['technical_asset'];
    }
    public withBusinessAsset(businessAsset: SyncStatusStatisticVO): TableModelStatisticVO {
        this['business_asset'] = businessAsset;
        return this;
    }
    public set businessAsset(businessAsset: SyncStatusStatisticVO  | undefined) {
        this['business_asset'] = businessAsset;
    }
    public get businessAsset(): SyncStatusStatisticVO | undefined {
        return this['business_asset'];
    }
    public withMetaDataLink(metaDataLink: SyncStatusStatisticVO): TableModelStatisticVO {
        this['meta_data_link'] = metaDataLink;
        return this;
    }
    public set metaDataLink(metaDataLink: SyncStatusStatisticVO  | undefined) {
        this['meta_data_link'] = metaDataLink;
    }
    public get metaDataLink(): SyncStatusStatisticVO | undefined {
        return this['meta_data_link'];
    }
    public withDataQuality(dataQuality: SyncStatusStatisticVO): TableModelStatisticVO {
        this['data_quality'] = dataQuality;
        return this;
    }
    public set dataQuality(dataQuality: SyncStatusStatisticVO  | undefined) {
        this['data_quality'] = dataQuality;
    }
    public get dataQuality(): SyncStatusStatisticVO | undefined {
        return this['data_quality'];
    }
}