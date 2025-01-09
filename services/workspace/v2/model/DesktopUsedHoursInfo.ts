import { DesktopUsedInfo } from './DesktopUsedInfo';


export class DesktopUsedHoursInfo {
    private 'desktop_id'?: string;
    private 'desktop_username'?: string;
    private 'used_info_list'?: Array<DesktopUsedInfo>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): DesktopUsedHoursInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopUsername(desktopUsername: string): DesktopUsedHoursInfo {
        this['desktop_username'] = desktopUsername;
        return this;
    }
    public set desktopUsername(desktopUsername: string  | undefined) {
        this['desktop_username'] = desktopUsername;
    }
    public get desktopUsername(): string | undefined {
        return this['desktop_username'];
    }
    public withUsedInfoList(usedInfoList: Array<DesktopUsedInfo>): DesktopUsedHoursInfo {
        this['used_info_list'] = usedInfoList;
        return this;
    }
    public set usedInfoList(usedInfoList: Array<DesktopUsedInfo>  | undefined) {
        this['used_info_list'] = usedInfoList;
    }
    public get usedInfoList(): Array<DesktopUsedInfo> | undefined {
        return this['used_info_list'];
    }
}