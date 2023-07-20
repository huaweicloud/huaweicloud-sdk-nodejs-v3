

export class AudioProcess {
    public volume?: AudioProcessVolumeEnum | string;
    private 'volume_expr'?: number;
    public constructor() { 
    }
    public withVolume(volume: AudioProcessVolumeEnum | string): AudioProcess {
        this['volume'] = volume;
        return this;
    }
    public withVolumeExpr(volumeExpr: number): AudioProcess {
        this['volume_expr'] = volumeExpr;
        return this;
    }
    public set volumeExpr(volumeExpr: number  | undefined) {
        this['volume_expr'] = volumeExpr;
    }
    public get volumeExpr(): number | undefined {
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
