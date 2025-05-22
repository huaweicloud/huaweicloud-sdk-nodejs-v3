

export class VideoDescriptions {
    private 'gop_duration_seconds'?: VideoDescriptionsGopDurationSecondsEnum | number;
    public constructor() { 
    }
    public withGopDurationSeconds(gopDurationSeconds: VideoDescriptionsGopDurationSecondsEnum | number): VideoDescriptions {
        this['gop_duration_seconds'] = gopDurationSeconds;
        return this;
    }
    public set gopDurationSeconds(gopDurationSeconds: VideoDescriptionsGopDurationSecondsEnum | number  | undefined) {
        this['gop_duration_seconds'] = gopDurationSeconds;
    }
    public get gopDurationSeconds(): VideoDescriptionsGopDurationSecondsEnum | number | undefined {
        return this['gop_duration_seconds'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoDescriptionsGopDurationSecondsEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_8 = 8,
    NUMBER_10 = 10
}
