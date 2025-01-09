import { WatermarkOptions } from './WatermarkOptions';


export class Watermark {
    private 'watermark_enable'?: boolean;
    public options?: WatermarkOptions;
    public constructor() { 
    }
    public withWatermarkEnable(watermarkEnable: boolean): Watermark {
        this['watermark_enable'] = watermarkEnable;
        return this;
    }
    public set watermarkEnable(watermarkEnable: boolean  | undefined) {
        this['watermark_enable'] = watermarkEnable;
    }
    public get watermarkEnable(): boolean | undefined {
        return this['watermark_enable'];
    }
    public withOptions(options: WatermarkOptions): Watermark {
        this['options'] = options;
        return this;
    }
}