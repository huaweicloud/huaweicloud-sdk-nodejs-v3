import { OriginPara } from './OriginPara';
import { OutputThumbnailPara } from './OutputThumbnailPara';
import { OutputVideoPara } from './OutputVideoPara';
import { OutputWatermarkPara } from './OutputWatermarkPara';


export class MediaDetail {
    public features?: Array<string>;
    private 'origin_para'?: OriginPara;
    private 'output_video_paras'?: Array<OutputVideoPara>;
    private 'output_thumbnail_para'?: OutputThumbnailPara;
    private 'output_watermark_paras'?: OutputWatermarkPara;
    public constructor() { 
    }
    public withFeatures(features: Array<string>): MediaDetail {
        this['features'] = features;
        return this;
    }
    public withOriginPara(originPara: OriginPara): MediaDetail {
        this['origin_para'] = originPara;
        return this;
    }
    public set originPara(originPara: OriginPara  | undefined) {
        this['origin_para'] = originPara;
    }
    public get originPara(): OriginPara | undefined {
        return this['origin_para'];
    }
    public withOutputVideoParas(outputVideoParas: Array<OutputVideoPara>): MediaDetail {
        this['output_video_paras'] = outputVideoParas;
        return this;
    }
    public set outputVideoParas(outputVideoParas: Array<OutputVideoPara>  | undefined) {
        this['output_video_paras'] = outputVideoParas;
    }
    public get outputVideoParas(): Array<OutputVideoPara> | undefined {
        return this['output_video_paras'];
    }
    public withOutputThumbnailPara(outputThumbnailPara: OutputThumbnailPara): MediaDetail {
        this['output_thumbnail_para'] = outputThumbnailPara;
        return this;
    }
    public set outputThumbnailPara(outputThumbnailPara: OutputThumbnailPara  | undefined) {
        this['output_thumbnail_para'] = outputThumbnailPara;
    }
    public get outputThumbnailPara(): OutputThumbnailPara | undefined {
        return this['output_thumbnail_para'];
    }
    public withOutputWatermarkParas(outputWatermarkParas: OutputWatermarkPara): MediaDetail {
        this['output_watermark_paras'] = outputWatermarkParas;
        return this;
    }
    public set outputWatermarkParas(outputWatermarkParas: OutputWatermarkPara  | undefined) {
        this['output_watermark_paras'] = outputWatermarkParas;
    }
    public get outputWatermarkParas(): OutputWatermarkPara | undefined {
        return this['output_watermark_paras'];
    }
}