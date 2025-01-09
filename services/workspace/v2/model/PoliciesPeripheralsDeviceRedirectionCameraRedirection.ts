import { PoliciesPeripheralsDeviceRedirectionCameraRedirectionOptions } from './PoliciesPeripheralsDeviceRedirectionCameraRedirectionOptions';


export class PoliciesPeripheralsDeviceRedirectionCameraRedirection {
    private 'video_compress_enable'?: boolean;
    public options?: PoliciesPeripheralsDeviceRedirectionCameraRedirectionOptions;
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
    public withOptions(options: PoliciesPeripheralsDeviceRedirectionCameraRedirectionOptions): PoliciesPeripheralsDeviceRedirectionCameraRedirection {
        this['options'] = options;
        return this;
    }
}