import { ObsInfo } from './ObsInfo';


export class ImageSpriteTaskOutPut {
    private 'obs_info'?: ObsInfo;
    public height?: number;
    public width?: number;
    private 'sprite_image_list'?: Array<string>;
    public constructor() { 
    }
    public withObsInfo(obsInfo: ObsInfo): ImageSpriteTaskOutPut {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): ObsInfo | undefined {
        return this['obs_info'];
    }
    public withHeight(height: number): ImageSpriteTaskOutPut {
        this['height'] = height;
        return this;
    }
    public withWidth(width: number): ImageSpriteTaskOutPut {
        this['width'] = width;
        return this;
    }
    public withSpriteImageList(spriteImageList: Array<string>): ImageSpriteTaskOutPut {
        this['sprite_image_list'] = spriteImageList;
        return this;
    }
    public set spriteImageList(spriteImageList: Array<string>  | undefined) {
        this['sprite_image_list'] = spriteImageList;
    }
    public get spriteImageList(): Array<string> | undefined {
        return this['sprite_image_list'];
    }
}