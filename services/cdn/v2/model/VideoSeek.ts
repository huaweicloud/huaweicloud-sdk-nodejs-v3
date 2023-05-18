

export class VideoSeek {
    private 'enable_video_seek': boolean | undefined;
    private 'enable_flv_by_time_seek'?: boolean | undefined;
    private 'start_parameter'?: string | undefined;
    private 'end_parameter'?: string | undefined;
    public constructor(enableVideoSeek?: any) { 
        this['enable_video_seek'] = enableVideoSeek;
    }
    public withEnableVideoSeek(enableVideoSeek: boolean): VideoSeek {
        this['enable_video_seek'] = enableVideoSeek;
        return this;
    }
    public set enableVideoSeek(enableVideoSeek: boolean | undefined) {
        this['enable_video_seek'] = enableVideoSeek;
    }
    public get enableVideoSeek() {
        return this['enable_video_seek'];
    }
    public withEnableFlvByTimeSeek(enableFlvByTimeSeek: boolean): VideoSeek {
        this['enable_flv_by_time_seek'] = enableFlvByTimeSeek;
        return this;
    }
    public set enableFlvByTimeSeek(enableFlvByTimeSeek: boolean | undefined) {
        this['enable_flv_by_time_seek'] = enableFlvByTimeSeek;
    }
    public get enableFlvByTimeSeek() {
        return this['enable_flv_by_time_seek'];
    }
    public withStartParameter(startParameter: string): VideoSeek {
        this['start_parameter'] = startParameter;
        return this;
    }
    public set startParameter(startParameter: string | undefined) {
        this['start_parameter'] = startParameter;
    }
    public get startParameter() {
        return this['start_parameter'];
    }
    public withEndParameter(endParameter: string): VideoSeek {
        this['end_parameter'] = endParameter;
        return this;
    }
    public set endParameter(endParameter: string | undefined) {
        this['end_parameter'] = endParameter;
    }
    public get endParameter() {
        return this['end_parameter'];
    }
}