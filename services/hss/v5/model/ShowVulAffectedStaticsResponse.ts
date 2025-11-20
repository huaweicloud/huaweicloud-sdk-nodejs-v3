import { VulAffectedStatisticsResponseInfoCceDisabledVulList } from './VulAffectedStatisticsResponseInfoCceDisabledVulList';
import { VulAffectedStatisticsResponseInfoDataList } from './VulAffectedStatisticsResponseInfoDataList';
import { VulAffectedStatisticsResponseInfoDisabledOperateTypes } from './VulAffectedStatisticsResponseInfoDisabledOperateTypes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulAffectedStaticsResponse extends SdkResponse {
    private 'vul_num'?: number;
    private 'host_num'?: number;
    private 'image_num'?: number;
    private 'container_num'?: number;
    private 'data_list'?: Array<VulAffectedStatisticsResponseInfoDataList>;
    private 'total_vul_num'?: number;
    private 'extend_tips'?: Array<string>;
    private 'extend_text_tips'?: Array<string>;
    private 'disabled_operate_types'?: VulAffectedStatisticsResponseInfoDisabledOperateTypes;
    private 'cce_vul_num'?: number;
    private 'basic_host_num'?: number;
    private 'cce_disabled_vul_list'?: Array<VulAffectedStatisticsResponseInfoCceDisabledVulList>;
    public constructor() { 
        super();
    }
    public withVulNum(vulNum: number): ShowVulAffectedStaticsResponse {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withHostNum(hostNum: number): ShowVulAffectedStaticsResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withImageNum(imageNum: number): ShowVulAffectedStaticsResponse {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
    public withContainerNum(containerNum: number): ShowVulAffectedStaticsResponse {
        this['container_num'] = containerNum;
        return this;
    }
    public set containerNum(containerNum: number  | undefined) {
        this['container_num'] = containerNum;
    }
    public get containerNum(): number | undefined {
        return this['container_num'];
    }
    public withDataList(dataList: Array<VulAffectedStatisticsResponseInfoDataList>): ShowVulAffectedStaticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulAffectedStatisticsResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulAffectedStatisticsResponseInfoDataList> | undefined {
        return this['data_list'];
    }
    public withTotalVulNum(totalVulNum: number): ShowVulAffectedStaticsResponse {
        this['total_vul_num'] = totalVulNum;
        return this;
    }
    public set totalVulNum(totalVulNum: number  | undefined) {
        this['total_vul_num'] = totalVulNum;
    }
    public get totalVulNum(): number | undefined {
        return this['total_vul_num'];
    }
    public withExtendTips(extendTips: Array<string>): ShowVulAffectedStaticsResponse {
        this['extend_tips'] = extendTips;
        return this;
    }
    public set extendTips(extendTips: Array<string>  | undefined) {
        this['extend_tips'] = extendTips;
    }
    public get extendTips(): Array<string> | undefined {
        return this['extend_tips'];
    }
    public withExtendTextTips(extendTextTips: Array<string>): ShowVulAffectedStaticsResponse {
        this['extend_text_tips'] = extendTextTips;
        return this;
    }
    public set extendTextTips(extendTextTips: Array<string>  | undefined) {
        this['extend_text_tips'] = extendTextTips;
    }
    public get extendTextTips(): Array<string> | undefined {
        return this['extend_text_tips'];
    }
    public withDisabledOperateTypes(disabledOperateTypes: VulAffectedStatisticsResponseInfoDisabledOperateTypes): ShowVulAffectedStaticsResponse {
        this['disabled_operate_types'] = disabledOperateTypes;
        return this;
    }
    public set disabledOperateTypes(disabledOperateTypes: VulAffectedStatisticsResponseInfoDisabledOperateTypes  | undefined) {
        this['disabled_operate_types'] = disabledOperateTypes;
    }
    public get disabledOperateTypes(): VulAffectedStatisticsResponseInfoDisabledOperateTypes | undefined {
        return this['disabled_operate_types'];
    }
    public withCceVulNum(cceVulNum: number): ShowVulAffectedStaticsResponse {
        this['cce_vul_num'] = cceVulNum;
        return this;
    }
    public set cceVulNum(cceVulNum: number  | undefined) {
        this['cce_vul_num'] = cceVulNum;
    }
    public get cceVulNum(): number | undefined {
        return this['cce_vul_num'];
    }
    public withBasicHostNum(basicHostNum: number): ShowVulAffectedStaticsResponse {
        this['basic_host_num'] = basicHostNum;
        return this;
    }
    public set basicHostNum(basicHostNum: number  | undefined) {
        this['basic_host_num'] = basicHostNum;
    }
    public get basicHostNum(): number | undefined {
        return this['basic_host_num'];
    }
    public withCceDisabledVulList(cceDisabledVulList: Array<VulAffectedStatisticsResponseInfoCceDisabledVulList>): ShowVulAffectedStaticsResponse {
        this['cce_disabled_vul_list'] = cceDisabledVulList;
        return this;
    }
    public set cceDisabledVulList(cceDisabledVulList: Array<VulAffectedStatisticsResponseInfoCceDisabledVulList>  | undefined) {
        this['cce_disabled_vul_list'] = cceDisabledVulList;
    }
    public get cceDisabledVulList(): Array<VulAffectedStatisticsResponseInfoCceDisabledVulList> | undefined {
        return this['cce_disabled_vul_list'];
    }
}