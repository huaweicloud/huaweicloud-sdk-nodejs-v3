import { CameraRedirectionOptions } from './CameraRedirectionOptions';


export class PoliciesPeripheralsDeviceRedirectionCameraRedirection {
    private 'video_compress_enable'?: boolean;
    public options?: CameraRedirectionOptions;
    public constructor() { 
    }
    public withVideoCompressEnable(videoCompressEnable: boolean): PoliciesPeripheralsDeviceRedirectionCameraRedirection {
        this['video_compress_enable'] = videoCompressEnable;
        return this;
    }
    public set videoCompressEnable(videoCompressEnable: boolean  | undefined) {
        this['video_compress_enable'] = videoCompressEnable;
    }
    public get videoCompressEnable(): boolean | undefined {
        return this['video_compress_enable'];
    }
    public withOptions(options: CameraRedirectionOptions): PoliciesPeripheralsDeviceRedirectionCameraRedirection {
        this['options'] = options;
        return this;
    }
}