import { ImageWatermark } from './ImageWatermark';
import { ObsInfo } from './ObsInfo';
import { SVGWatermark } from './SVGWatermark';
import { TextWatermark } from './TextWatermark';


export class WatermarkRequest {
    private 'template_id'?: string;
    public input?: ObsInfo;
    private 'image_watermark'?: ImageWatermark;
    private 'text_context'?: string;
    private 'text_watermark'?: TextWatermark;
    private 'svg_context'?: string;
    private 'svg_watermark'?: SVGWatermark;
    public constructor() { 
    }
    public withTemplateId(templateId: string): WatermarkRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withInput(input: ObsInfo): WatermarkRequest {
        this['input'] = input;
        return this;
    }
    public withImageWatermark(imageWatermark: ImageWatermark): WatermarkRequest {
        this['image_watermark'] = imageWatermark;
        return this;
    }
    public set imageWatermark(imageWatermark: ImageWatermark  | undefined) {
        this['image_watermark'] = imageWatermark;
    }
    public get imageWatermark(): ImageWatermark | undefined {
        return this['image_watermark'];
    }
    public withTextContext(textContext: string): WatermarkRequest {
        this['text_context'] = textContext;
        return this;
    }
    public set textContext(textContext: string  | undefined) {
        this['text_context'] = textContext;
    }
    public get textContext(): string | undefined {
        return this['text_context'];
    }
    public withTextWatermark(textWatermark: TextWatermark): WatermarkRequest {
        this['text_watermark'] = textWatermark;
        return this;
    }
    public set textWatermark(textWatermark: TextWatermark  | undefined) {
        this['text_watermark'] = textWatermark;
    }
    public get textWatermark(): TextWatermark | undefined {
        return this['text_watermark'];
    }
    public withSvgContext(svgContext: string): WatermarkRequest {
        this['svg_context'] = svgContext;
        return this;
    }
    public set svgContext(svgContext: string  | undefined) {
        this['svg_context'] = svgContext;
    }
    public get svgContext(): string | undefined {
        return this['svg_context'];
    }
    public withSvgWatermark(svgWatermark: SVGWatermark): WatermarkRequest {
        this['svg_watermark'] = svgWatermark;
        return this;
    }
    public set svgWatermark(svgWatermark: SVGWatermark  | undefined) {
        this['svg_watermark'] = svgWatermark;
    }
    public get svgWatermark(): SVGWatermark | undefined {
        return this['svg_watermark'];
    }
}