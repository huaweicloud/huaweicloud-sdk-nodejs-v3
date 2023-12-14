import { PicInfoNotify } from './PicInfoNotify';
import { PicLayoutInfo } from './PicLayoutInfo';


export class MultiPicDisplayDO {
    public manualSet?: number;
    public imageType?: string;
    public subscriberInPics?: Array<PicInfoNotify>;
    public switchTime?: number;
    public picLayoutInfo?: PicLayoutInfo;
    public constructor() { 
    }
    public withManualSet(manualSet: number): MultiPicDisplayDO {
        this['manualSet'] = manualSet;
        return this;
    }
    public withImageType(imageType: string): MultiPicDisplayDO {
        this['imageType'] = imageType;
        return this;
    }
    public withSubscriberInPics(subscriberInPics: Array<PicInfoNotify>): MultiPicDisplayDO {
        this['subscriberInPics'] = subscriberInPics;
        return this;
    }
    public withSwitchTime(switchTime: number): MultiPicDisplayDO {
        this['switchTime'] = switchTime;
        return this;
    }
    public withPicLayoutInfo(picLayoutInfo: PicLayoutInfo): MultiPicDisplayDO {
        this['picLayoutInfo'] = picLayoutInfo;
        return this;
    }
}