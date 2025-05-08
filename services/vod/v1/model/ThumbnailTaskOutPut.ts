import { ObsInfo } from './ObsInfo';
import { PicInfo } from './PicInfo';


export class ThumbnailTaskOutPut {
    private 'obs_info'?: ObsInfo;
    private 'pic_info_list'?: Array<PicInfo>;
    public constructor() { 
    }
    public withObsInfo(obsInfo: ObsInfo): ThumbnailTaskOutPut {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): ObsInfo | undefined {
        return this['obs_info'];
    }
    public withPicInfoList(picInfoList: Array<PicInfo>): ThumbnailTaskOutPut {
        this['pic_info_list'] = picInfoList;
        return this;
    }
    public set picInfoList(picInfoList: Array<PicInfo>  | undefined) {
        this['pic_info_list'] = picInfoList;
    }
    public get picInfoList(): Array<PicInfo> | undefined {
        return this['pic_info_list'];
    }
}