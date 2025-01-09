import { DesktopTagsInfo } from './DesktopTagsInfo';


export class BatchDeleteDesktopsTagsReq {
    public desktops?: Array<DesktopTagsInfo>;
    public constructor(desktops?: Array<DesktopTagsInfo>) { 
        this['desktops'] = desktops;
    }
    public withDesktops(desktops: Array<DesktopTagsInfo>): BatchDeleteDesktopsTagsReq {
        this['desktops'] = desktops;
        return this;
    }
}