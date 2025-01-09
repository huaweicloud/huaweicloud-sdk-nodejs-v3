import { AttachStatistics } from './AttachStatistics';
import { DesktopLoginStatisticsRsp } from './DesktopLoginStatisticsRsp';
import { DesktopRunStatisticsRsp } from './DesktopRunStatisticsRsp';


export class DesktopPoolStatistics {
    private 'desktop_pool_id'?: string;
    private 'desktop_pool_name'?: string;
    private 'total_num'?: number;
    private 'attach_statistics'?: AttachStatistics;
    private 'run_state_statistics'?: DesktopRunStatisticsRsp;
    private 'login_state_statistics'?: DesktopLoginStatisticsRsp;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): DesktopPoolStatistics {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopPoolName(desktopPoolName: string): DesktopPoolStatistics {
        this['desktop_pool_name'] = desktopPoolName;
        return this;
    }
    public set desktopPoolName(desktopPoolName: string  | undefined) {
        this['desktop_pool_name'] = desktopPoolName;
    }
    public get desktopPoolName(): string | undefined {
        return this['desktop_pool_name'];
    }
    public withTotalNum(totalNum: number): DesktopPoolStatistics {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAttachStatistics(attachStatistics: AttachStatistics): DesktopPoolStatistics {
        this['attach_statistics'] = attachStatistics;
        return this;
    }
    public set attachStatistics(attachStatistics: AttachStatistics  | undefined) {
        this['attach_statistics'] = attachStatistics;
    }
    public get attachStatistics(): AttachStatistics | undefined {
        return this['attach_statistics'];
    }
    public withRunStateStatistics(runStateStatistics: DesktopRunStatisticsRsp): DesktopPoolStatistics {
        this['run_state_statistics'] = runStateStatistics;
        return this;
    }
    public set runStateStatistics(runStateStatistics: DesktopRunStatisticsRsp  | undefined) {
        this['run_state_statistics'] = runStateStatistics;
    }
    public get runStateStatistics(): DesktopRunStatisticsRsp | undefined {
        return this['run_state_statistics'];
    }
    public withLoginStateStatistics(loginStateStatistics: DesktopLoginStatisticsRsp): DesktopPoolStatistics {
        this['login_state_statistics'] = loginStateStatistics;
        return this;
    }
    public set loginStateStatistics(loginStateStatistics: DesktopLoginStatisticsRsp  | undefined) {
        this['login_state_statistics'] = loginStateStatistics;
    }
    public get loginStateStatistics(): DesktopLoginStatisticsRsp | undefined {
        return this['login_state_statistics'];
    }
}