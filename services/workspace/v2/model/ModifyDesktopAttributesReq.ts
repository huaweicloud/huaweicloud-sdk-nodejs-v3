import { ModifyDesktopAttributesReqDesktop } from './ModifyDesktopAttributesReqDesktop';


export class ModifyDesktopAttributesReq {
    public desktop?: ModifyDesktopAttributesReqDesktop;
    public constructor() { 
    }
    public withDesktop(desktop: ModifyDesktopAttributesReqDesktop): ModifyDesktopAttributesReq {
        this['desktop'] = desktop;
        return this;
    }
}