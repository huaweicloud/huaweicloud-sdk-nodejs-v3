import { PicInfoNotify } from './PicInfoNotify';


export class RestPicLayout {
    public switchTime?: number;
    public picNum?: number;
    public layOutName?: string;
    public imageType?: string;
    public uuid?: string;
    public subscriberInPics?: Array<PicInfoNotify>;
    public constructor() { 
    }
    public withSwitchTime(switchTime: number): RestPicLayout {
        this['switchTime'] = switchTime;
        return this;
    }
    public withPicNum(picNum: number): RestPicLayout {
        this['picNum'] = picNum;
        return this;
    }
    public withLayOutName(layOutName: string): RestPicLayout {
        this['layOutName'] = layOutName;
        return this;
    }
    public withImageType(imageType: string): RestPicLayout {
        this['imageType'] = imageType;
        return this;
    }
    public withUuid(uuid: string): RestPicLayout {
        this['uuid'] = uuid;
        return this;
    }
    public withSubscriberInPics(subscriberInPics: Array<PicInfoNotify>): RestPicLayout {
        this['subscriberInPics'] = subscriberInPics;
        return this;
    }
}