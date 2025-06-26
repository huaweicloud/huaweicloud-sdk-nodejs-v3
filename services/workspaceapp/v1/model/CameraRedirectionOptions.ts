

export class CameraRedirectionOptions {
    private 'camera_frame_rate'?: number;
    private 'camera_max_width'?: number;
    private 'camera_max_heigth'?: number;
    private 'camera_compression_method'?: string;
    public constructor() { 
    }
    public withCameraFrameRate(cameraFrameRate: number): CameraRedirectionOptions {
        this['camera_frame_rate'] = cameraFrameRate;
        return this;
    }
    public set cameraFrameRate(cameraFrameRate: number  | undefined) {
        this['camera_frame_rate'] = cameraFrameRate;
    }
    public get cameraFrameRate(): number | undefined {
        return this['camera_frame_rate'];
    }
    public withCameraMaxWidth(cameraMaxWidth: number): CameraRedirectionOptions {
        this['camera_max_width'] = cameraMaxWidth;
        return this;
    }
    public set cameraMaxWidth(cameraMaxWidth: number  | undefined) {
        this['camera_max_width'] = cameraMaxWidth;
    }
    public get cameraMaxWidth(): number | undefined {
        return this['camera_max_width'];
    }
    public withCameraMaxHeigth(cameraMaxHeigth: number): CameraRedirectionOptions {
        this['camera_max_heigth'] = cameraMaxHeigth;
        return this;
    }
    public set cameraMaxHeigth(cameraMaxHeigth: number  | undefined) {
        this['camera_max_heigth'] = cameraMaxHeigth;
    }
    public get cameraMaxHeigth(): number | undefined {
        return this['camera_max_heigth'];
    }
    public withCameraCompressionMethod(cameraCompressionMethod: string): CameraRedirectionOptions {
        this['camera_compression_method'] = cameraCompressionMethod;
        return this;
    }
    public set cameraCompressionMethod(cameraCompressionMethod: string  | undefined) {
        this['camera_compression_method'] = cameraCompressionMethod;
    }
    public get cameraCompressionMethod(): string | undefined {
        return this['camera_compression_method'];
    }
}