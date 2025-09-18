import { SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal404InfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal404InfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal500InfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal500InfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal502InfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal502InfoList';


export class SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo {
    private 'abnormal_502_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal502InfoList>;
    private 'abnormal_500_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal500InfoList>;
    private 'abnormal_404_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal404InfoList>;
    public constructor() { 
    }
    public withAbnormal502InfoList(abnormal502InfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal502InfoList>): SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo {
        this['abnormal_502_info_list'] = abnormal502InfoList;
        return this;
    }
    public set abnormal502InfoList(abnormal502InfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal502InfoList>  | undefined) {
        this['abnormal_502_info_list'] = abnormal502InfoList;
    }
    public get abnormal502InfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal502InfoList> | undefined {
        return this['abnormal_502_info_list'];
    }
    public withAbnormal500InfoList(abnormal500InfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal500InfoList>): SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo {
        this['abnormal_500_info_list'] = abnormal500InfoList;
        return this;
    }
    public set abnormal500InfoList(abnormal500InfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal500InfoList>  | undefined) {
        this['abnormal_500_info_list'] = abnormal500InfoList;
    }
    public get abnormal500InfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal500InfoList> | undefined {
        return this['abnormal_500_info_list'];
    }
    public withAbnormal404InfoList(abnormal404InfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal404InfoList>): SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo {
        this['abnormal_404_info_list'] = abnormal404InfoList;
        return this;
    }
    public set abnormal404InfoList(abnormal404InfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal404InfoList>  | undefined) {
        this['abnormal_404_info_list'] = abnormal404InfoList;
    }
    public get abnormal404InfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfoAbnormal404InfoList> | undefined {
        return this['abnormal_404_info_list'];
    }
}