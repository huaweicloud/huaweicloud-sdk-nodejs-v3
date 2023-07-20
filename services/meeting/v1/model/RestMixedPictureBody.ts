import { SubscriberInPic } from './SubscriberInPic';


export class RestMixedPictureBody {
    public manualSet?: number;
    public imageType?: string;
    public subscriberInPics?: Array<SubscriberInPic>;
    public switchTime?: number;
    public constructor(manualSet?: number) { 
        this['manualSet'] = manualSet;
    }
    public withManualSet(manualSet: number): RestMixedPictureBody {
        this['manualSet'] = manualSet;
        return this;
    }
    public withImageType(imageType: string): RestMixedPictureBody {
        this['imageType'] = imageType;
        return this;
    }
    public withSubscriberInPics(subscriberInPics: Array<SubscriberInPic>): RestMixedPictureBody {
        this['subscriberInPics'] = subscriberInPics;
        return this;
    }
    public withSwitchTime(switchTime: number): RestMixedPictureBody {
        this['switchTime'] = switchTime;
        return this;
    }
}