import { DesktopTagsInfo } from './DesktopTagsInfo';


export class BatchAddDesktopsTagsReq {
    public desktops?: Array<DesktopTagsInfo>;
    public constructor(desktops?: Array<DesktopTagsInfo>) { 
        this['desktops'] = desktops;
    }
    public withDesktops(desktops: Array<DesktopTagsInfo>): BatchAddDesktopsTagsReq {
        this['desktops'] = desktops;
        return this;
    }
}