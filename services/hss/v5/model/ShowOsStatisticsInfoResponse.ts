import { OsStatisticsInfo } from './OsStatisticsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOsStatisticsInfoResponse extends SdkResponse {
    private 'win_num'?: number;
    private 'linux_num'?: number;
    private 'os_list'?: Array<OsStatisticsInfo>;
    public constructor() { 
        super();
    }
    public withWinNum(winNum: number): ShowOsStatisticsInfoResponse {
        this['win_num'] = winNum;
        return this;
    }
    public set winNum(winNum: number  | undefined) {
        this['win_num'] = winNum;
    }
    public get winNum(): number | undefined {
        return this['win_num'];
    }
    public withLinuxNum(linuxNum: number): ShowOsStatisticsInfoResponse {
        this['linux_num'] = linuxNum;
        return this;
    }
    public set linuxNum(linuxNum: number  | undefined) {
        this['linux_num'] = linuxNum;
    }
    public get linuxNum(): number | undefined {
        return this['linux_num'];
    }
    public withOsList(osList: Array<OsStatisticsInfo>): ShowOsStatisticsInfoResponse {
        this['os_list'] = osList;
        return this;
    }
    public set osList(osList: Array<OsStatisticsInfo>  | undefined) {
        this['os_list'] = osList;
    }
    public get osList(): Array<OsStatisticsInfo> | undefined {
        return this['os_list'];
    }
}