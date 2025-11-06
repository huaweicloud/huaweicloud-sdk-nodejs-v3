import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList } from './SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList';
import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList } from './SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList';
import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList } from './SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList';


export class SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfo {
    private 'abnormal_502_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList>;
    private 'abnormal_500_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList>;
    private 'abnormal_404_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList>;
    public constructor() { 
    }
    public withAbnormal502InfoList(abnormal502InfoList: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList>): SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfo {
        this['abnormal_502_info_list'] = abnormal502InfoList;
        return this;
    }
    public set abnormal502InfoList(abnormal502InfoList: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList>  | undefined) {
        this['abnormal_502_info_list'] = abnormal502InfoList;
    }
    public get abnormal502InfoList(): Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList> | undefined {
        return this['abnormal_502_info_list'];
    }
    public withAbnormal500InfoList(abnormal500InfoList: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList>): SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfo {
        this['abnormal_500_info_list'] = abnormal500InfoList;
        return this;
    }
    public set abnormal500InfoList(abnormal500InfoList: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList>  | undefined) {
        this['abnormal_500_info_list'] = abnormal500InfoList;
    }
    public get abnormal500InfoList(): Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList> | undefined {
        return this['abnormal_500_info_list'];
    }
    public withAbnormal404InfoList(abnormal404InfoList: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList>): SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfo {
        this['abnormal_404_info_list'] = abnormal404InfoList;
        return this;
    }
    public set abnormal404InfoList(abnormal404InfoList: Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList>  | undefined) {
        this['abnormal_404_info_list'] = abnormal404InfoList;
    }
    public get abnormal404InfoList(): Array<SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList> | undefined {
        return this['abnormal_404_info_list'];
    }
}