import { ErrorResponse } from './ErrorResponse';


export class ImageAssetMeta {
    public codec?: string;
    public width?: number;
    public height?: number;
    public size?: number;
    public mode?: ImageAssetMetaModeEnum | string;
    private 'error_info'?: ErrorResponse;
    public constructor() { 
    }
    public withCodec(codec: string): ImageAssetMeta {
        this['codec'] = codec;
        return this;
    }
    public withWidth(width: number): ImageAssetMeta {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ImageAssetMeta {
        this['height'] = height;
        return this;
    }
    public withSize(size: number): ImageAssetMeta {
        this['size'] = size;
        return this;
    }
    public withMode(mode: ImageAssetMetaModeEnum | string): ImageAssetMeta {
        this['mode'] = mode;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorResponse): ImageAssetMeta {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageAssetMetaModeEnum {
    HORIZONTAL = 'Horizontal',
    VERTICAL = 'Vertical'
}
