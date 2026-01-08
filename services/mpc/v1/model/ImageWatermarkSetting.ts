import { BasicWatermark } from './BasicWatermark';
import { ObsObjInfo } from './ObsObjInfo';


export class ImageWatermarkSetting {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    private 'random_time_min'?: string;
    private 'random_time_max'?: string;
    private 'overlay_input'?: string;
    public input?: ObsObjInfo;
    public base?: ImageWatermarkSettingBaseEnum | string;
    public constructor() { 
    }
    public withDx(dx: string): ImageWatermarkSetting {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): ImageWatermarkSetting {
        this['dy'] = dy;
        return this;
    }
    public withReferpos(referpos: string): ImageWatermarkSetting {
        this['referpos'] = referpos;
        return this;
    }
    public withTimelineStart(timelineStart: string): ImageWatermarkSetting {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): ImageWatermarkSetting {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string  | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration(): string | undefined {
        return this['timeline_duration'];
    }
    public withRandomTimeMin(randomTimeMin: string): ImageWatermarkSetting {
        this['random_time_min'] = randomTimeMin;
        return this;
    }
    public set randomTimeMin(randomTimeMin: string  | undefined) {
        this['random_time_min'] = randomTimeMin;
    }
    public get randomTimeMin(): string | undefined {
        return this['random_time_min'];
    }
    public withRandomTimeMax(randomTimeMax: string): ImageWatermarkSetting {
        this['random_time_max'] = randomTimeMax;
        return this;
    }
    public set randomTimeMax(randomTimeMax: string  | undefined) {
        this['random_time_max'] = randomTimeMax;
    }
    public get randomTimeMax(): string | undefined {
        return this['random_time_max'];
    }
    public withOverlayInput(overlayInput: string): ImageWatermarkSetting {
        this['overlay_input'] = overlayInput;
        return this;
    }
    public set overlayInput(overlayInput: string  | undefined) {
        this['overlay_input'] = overlayInput;
    }
    public get overlayInput(): string | undefined {
        return this['overlay_input'];
    }
    public withInput(input: ObsObjInfo): ImageWatermarkSetting {
        this['input'] = input;
        return this;
    }
    public withBase(base: ImageWatermarkSettingBaseEnum | string): ImageWatermarkSetting {
        this['base'] = base;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageWatermarkSettingBaseEnum {
    INPUT = 'input',
    OUTPUT = 'output'
}
