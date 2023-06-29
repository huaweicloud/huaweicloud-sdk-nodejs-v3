

export class AudioProcess {
    public volume?: AudioProcessVolumeEnum;
    private 'volume_expr'?: number | undefined;
    public constructor() { 
    }
    public withVolume(volume: AudioProcessVolumeEnum): AudioProcess {
        this['volume'] = volume;
        return this;
    }
    public withVolumeExpr(volumeExpr: number): AudioProcess {
        this['volume_expr'] = volumeExpr;
        return this;
    }
    public set volumeExpr(volumeExpr: number | undefined) {
        this['volume_expr'] = volumeExpr;
    }
    public get volumeExpr() {
        return this['volume_expr'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioProcessVolumeEnum {
    AUTO = 'auto',
    DYNAMIC = 'dynamic',
    ORIGINAL = 'original'
}
