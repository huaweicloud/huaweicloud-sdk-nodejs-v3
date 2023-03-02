

export class VideoCoverAnalysisinference {
    private 'gif_ratenum'?: number | undefined;
    private 'gif_rateden'?: number | undefined;
    private 'gif_long_side'?: number | undefined;
    private 'gif_short_side'?: number | undefined;
    public constructor() { 
    }
    public withGifRatenum(gifRatenum: number): VideoCoverAnalysisinference {
        this['gif_ratenum'] = gifRatenum;
        return this;
    }
    public set gifRatenum(gifRatenum: number | undefined) {
        this['gif_ratenum'] = gifRatenum;
    }
    public get gifRatenum() {
        return this['gif_ratenum'];
    }
    public withGifRateden(gifRateden: number): VideoCoverAnalysisinference {
        this['gif_rateden'] = gifRateden;
        return this;
    }
    public set gifRateden(gifRateden: number | undefined) {
        this['gif_rateden'] = gifRateden;
    }
    public get gifRateden() {
        return this['gif_rateden'];
    }
    public withGifLongSide(gifLongSide: number): VideoCoverAnalysisinference {
        this['gif_long_side'] = gifLongSide;
        return this;
    }
    public set gifLongSide(gifLongSide: number | undefined) {
        this['gif_long_side'] = gifLongSide;
    }
    public get gifLongSide() {
        return this['gif_long_side'];
    }
    public withGifShortSide(gifShortSide: number): VideoCoverAnalysisinference {
        this['gif_short_side'] = gifShortSide;
        return this;
    }
    public set gifShortSide(gifShortSide: number | undefined) {
        this['gif_short_side'] = gifShortSide;
    }
    public get gifShortSide() {
        return this['gif_short_side'];
    }
}