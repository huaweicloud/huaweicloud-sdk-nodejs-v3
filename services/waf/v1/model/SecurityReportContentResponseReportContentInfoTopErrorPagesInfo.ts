import { SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList } from './SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList';
import { SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList } from './SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList';
import { SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList } from './SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList';


export class SecurityReportContentResponseReportContentInfoTopErrorPagesInfo {
    private 'abnormal_502_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList>;
    private 'abnormal_500_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList>;
    private 'abnormal_404_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList>;
    public constructor() { 
    }
    public withAbnormal502InfoList(abnormal502InfoList: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList>): SecurityReportContentResponseReportContentInfoTopErrorPagesInfo {
        this['abnormal_502_info_list'] = abnormal502InfoList;
        return this;
    }
    public set abnormal502InfoList(abnormal502InfoList: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList>  | undefined) {
        this['abnormal_502_info_list'] = abnormal502InfoList;
    }
    public get abnormal502InfoList(): Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList> | undefined {
        return this['abnormal_502_info_list'];
    }
    public withAbnormal500InfoList(abnormal500InfoList: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList>): SecurityReportContentResponseReportContentInfoTopErrorPagesInfo {
        this['abnormal_500_info_list'] = abnormal500InfoList;
        return this;
    }
    public set abnormal500InfoList(abnormal500InfoList: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList>  | undefined) {
        this['abnormal_500_info_list'] = abnormal500InfoList;
    }
    public get abnormal500InfoList(): Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList> | undefined {
        return this['abnormal_500_info_list'];
    }
    public withAbnormal404InfoList(abnormal404InfoList: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList>): SecurityReportContentResponseReportContentInfoTopErrorPagesInfo {
        this['abnormal_404_info_list'] = abnormal404InfoList;
        return this;
    }
    public set abnormal404InfoList(abnormal404InfoList: Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList>  | undefined) {
        this['abnormal_404_info_list'] = abnormal404InfoList;
    }
    public get abnormal404InfoList(): Array<SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList> | undefined {
        return this['abnormal_404_info_list'];
    }
}