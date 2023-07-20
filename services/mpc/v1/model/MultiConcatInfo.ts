import { AvParameters } from './AvParameters';
import { ImageWatermarkSetting } from './ImageWatermarkSetting';
import { ObsObjInfo } from './ObsObjInfo';


export class MultiConcatInfo {
    public inputs?: Array<ObsObjInfo>;
    private 'trans_template_ids'?: Array<number>;
    private 'av_parameters'?: Array<AvParameters>;
    public output?: ObsObjInfo;
    private 'image_watermark_settings'?: Array<ImageWatermarkSetting>;
    public constructor(inputs?: Array<ObsObjInfo>, output?: ObsObjInfo) { 
        this['inputs'] = inputs;
        this['output'] = output;
    }
    public withInputs(inputs: Array<ObsObjInfo>): MultiConcatInfo {
        this['inputs'] = inputs;
        return this;
    }
    public withTransTemplateIds(transTemplateIds: Array<number>): MultiConcatInfo {
        this['trans_template_ids'] = transTemplateIds;
        return this;
    }
    public set transTemplateIds(transTemplateIds: Array<number>  | undefined) {
        this['trans_template_ids'] = transTemplateIds;
    }
    public get transTemplateIds(): Array<number> | undefined {
        return this['trans_template_ids'];
    }
    public withAvParameters(avParameters: Array<AvParameters>): MultiConcatInfo {
        this['av_parameters'] = avParameters;
        return this;
    }
    public set avParameters(avParameters: Array<AvParameters>  | undefined) {
        this['av_parameters'] = avParameters;
    }
    public get avParameters(): Array<AvParameters> | undefined {
        return this['av_parameters'];
    }
    public withOutput(output: ObsObjInfo): MultiConcatInfo {
        this['output'] = output;
        return this;
    }
    public withImageWatermarkSettings(imageWatermarkSettings: Array<ImageWatermarkSetting>): MultiConcatInfo {
        this['image_watermark_settings'] = imageWatermarkSettings;
        return this;
    }
    public set imageWatermarkSettings(imageWatermarkSettings: Array<ImageWatermarkSetting>  | undefined) {
        this['image_watermark_settings'] = imageWatermarkSettings;
    }
    public get imageWatermarkSettings(): Array<ImageWatermarkSetting> | undefined {
        return this['image_watermark_settings'];
    }
}