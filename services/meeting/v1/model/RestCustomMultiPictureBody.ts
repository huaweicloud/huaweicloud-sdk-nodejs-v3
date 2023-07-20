import { PicLayoutInfo } from './PicLayoutInfo';
import { RestSubscriberInPic } from './RestSubscriberInPic';


export class RestCustomMultiPictureBody {
    public manualSet?: number;
    public picLayoutInfo?: PicLayoutInfo;
    public imageType?: string;
    public subscriberInPics?: Array<RestSubscriberInPic>;
    public switchTime?: number;
    public multiPicSaveOnly?: boolean;
    public constructor(manualSet?: number) { 
        this['manualSet'] = manualSet;
    }
    public withManualSet(manualSet: number): RestCustomMultiPictureBody {
        this['manualSet'] = manualSet;
        return this;
    }
    public withPicLayoutInfo(picLayoutInfo: PicLayoutInfo): RestCustomMultiPictureBody {
        this['picLayoutInfo'] = picLayoutInfo;
        return this;
    }
    public withImageType(imageType: string): RestCustomMultiPictureBody {
        this['imageType'] = imageType;
        return this;
    }
    public withSubscriberInPics(subscriberInPics: Array<RestSubscriberInPic>): RestCustomMultiPictureBody {
        this['subscriberInPics'] = subscriberInPics;
        return this;
    }
    public withSwitchTime(switchTime: number): RestCustomMultiPictureBody {
        this['switchTime'] = switchTime;
        return this;
    }
    public withMultiPicSaveOnly(multiPicSaveOnly: boolean): RestCustomMultiPictureBody {
        this['multiPicSaveOnly'] = multiPicSaveOnly;
        return this;
    }
}