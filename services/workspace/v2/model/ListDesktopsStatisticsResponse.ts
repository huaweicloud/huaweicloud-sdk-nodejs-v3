import { AttachStatistics } from './AttachStatistics';
import { DesktopLoginStatisticsRsp } from './DesktopLoginStatisticsRsp';
import { DesktopPoolStatistics } from './DesktopPoolStatistics';
import { DesktopRunStatisticsRsp } from './DesktopRunStatisticsRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'attach_statistics'?: AttachStatistics;
    private 'run_state_statistics'?: DesktopRunStatisticsRsp;
    private 'login_state_statistics'?: DesktopLoginStatisticsRsp;
    private 'desktop_pool_statistics'?: Array<DesktopPoolStatistics>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDesktopsStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAttachStatistics(attachStatistics: AttachStatistics): ListDesktopsStatisticsResponse {
        this['attach_statistics'] = attachStatistics;
        return this;
    }
    public set attachStatistics(attachStatistics: AttachStatistics  | undefined) {
        this['attach_statistics'] = attachStatistics;
    }
    public get attachStatistics(): AttachStatistics | undefined {
        return this['attach_statistics'];
    }
    public withRunStateStatistics(runStateStatistics: DesktopRunStatisticsRsp): ListDesktopsStatisticsResponse {
        this['run_state_statistics'] = runStateStatistics;
        return this;
    }
    public set runStateStatistics(runStateStatistics: DesktopRunStatisticsRsp  | undefined) {
        this['run_state_statistics'] = runStateStatistics;
    }
    public get runStateStatistics(): DesktopRunStatisticsRsp | undefined {
        return this['run_state_statistics'];
    }
    public withLoginStateStatistics(loginStateStatistics: DesktopLoginStatisticsRsp): ListDesktopsStatisticsResponse {
        this['login_state_statistics'] = loginStateStatistics;
        return this;
    }
    public set loginStateStatistics(loginStateStatistics: DesktopLoginStatisticsRsp  | undefined) {
        this['login_state_statistics'] = loginStateStatistics;
    }
    public get loginStateStatistics(): DesktopLoginStatisticsRsp | undefined {
        return this['login_state_statistics'];
    }
    public withDesktopPoolStatistics(desktopPoolStatistics: Array<DesktopPoolStatistics>): ListDesktopsStatisticsResponse {
        this['desktop_pool_statistics'] = desktopPoolStatistics;
        return this;
    }
    public set desktopPoolStatistics(desktopPoolStatistics: Array<DesktopPoolStatistics>  | undefined) {
        this['desktop_pool_statistics'] = desktopPoolStatistics;
    }
    public get desktopPoolStatistics(): Array<DesktopPoolStatistics> | undefined {
        return this['desktop_pool_statistics'];
    }
}