import { PoliciesPeripheralsDeviceRedirectionCameraRedirection } from './PoliciesPeripheralsDeviceRedirectionCameraRedirection';
import { PoliciesPeripheralsDeviceRedirectionPrinterRedirection } from './PoliciesPeripheralsDeviceRedirectionPrinterRedirection';
import { PoliciesPeripheralsDeviceRedirectionSessionPrinter } from './PoliciesPeripheralsDeviceRedirectionSessionPrinter';


export class PoliciesPeripheralsDeviceRedirection {
    private 'printer_redirection'?: PoliciesPeripheralsDeviceRedirectionPrinterRedirection;
    private 'session_printer'?: PoliciesPeripheralsDeviceRedirectionSessionPrinter;
    private 'camera_redirection'?: PoliciesPeripheralsDeviceRedirectionCameraRedirection;
    private 'twain_redirection_enable'?: boolean;
    private 'image_compression_level'?: PoliciesPeripheralsDeviceRedirectionImageCompressionLevelEnum | string;
    public constructor() { 
    }
    public withPrinterRedirection(printerRedirection: PoliciesPeripheralsDeviceRedirectionPrinterRedirection): PoliciesPeripheralsDeviceRedirection {
        this['printer_redirection'] = printerRedirection;
        return this;
    }
    public set printerRedirection(printerRedirection: PoliciesPeripheralsDeviceRedirectionPrinterRedirection  | undefined) {
        this['printer_redirection'] = printerRedirection;
    }
    public get printerRedirection(): PoliciesPeripheralsDeviceRedirectionPrinterRedirection | undefined {
        return this['printer_redirection'];
    }
    public withSessionPrinter(sessionPrinter: PoliciesPeripheralsDeviceRedirectionSessionPrinter): PoliciesPeripheralsDeviceRedirection {
        this['session_printer'] = sessionPrinter;
        return this;
    }
    public set sessionPrinter(sessionPrinter: PoliciesPeripheralsDeviceRedirectionSessionPrinter  | undefined) {
        this['session_printer'] = sessionPrinter;
    }
    public get sessionPrinter(): PoliciesPeripheralsDeviceRedirectionSessionPrinter | undefined {
        return this['session_printer'];
    }
    public withCameraRedirection(cameraRedirection: PoliciesPeripheralsDeviceRedirectionCameraRedirection): PoliciesPeripheralsDeviceRedirection {
        this['camera_redirection'] = cameraRedirection;
        return this;
    }
    public set cameraRedirection(cameraRedirection: PoliciesPeripheralsDeviceRedirectionCameraRedirection  | undefined) {
        this['camera_redirection'] = cameraRedirection;
    }
    public get cameraRedirection(): PoliciesPeripheralsDeviceRedirectionCameraRedirection | undefined {
        return this['camera_redirection'];
    }
    public withTwainRedirectionEnable(twainRedirectionEnable: boolean): PoliciesPeripheralsDeviceRedirection {
        this['twain_redirection_enable'] = twainRedirectionEnable;
        return this;
    }
    public set twainRedirectionEnable(twainRedirectionEnable: boolean  | undefined) {
        this['twain_redirection_enable'] = twainRedirectionEnable;
    }
    public get twainRedirectionEnable(): boolean | undefined {
        return this['twain_redirection_enable'];
    }
    public withImageCompressionLevel(imageCompressionLevel: PoliciesPeripheralsDeviceRedirectionImageCompressionLevelEnum | string): PoliciesPeripheralsDeviceRedirection {
        this['image_compression_level'] = imageCompressionLevel;
        return this;
    }
    public set imageCompressionLevel(imageCompressionLevel: PoliciesPeripheralsDeviceRedirectionImageCompressionLevelEnum | string  | undefined) {
        this['image_compression_level'] = imageCompressionLevel;
    }
    public get imageCompressionLevel(): PoliciesPeripheralsDeviceRedirectionImageCompressionLevelEnum | string | undefined {
        return this['image_compression_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesPeripheralsDeviceRedirectionImageCompressionLevelEnum {
    NONE = 'none',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    LOSSLESS = 'lossless',
    LOW_LOSS = 'low-loss',
    MEDIUM_LOSS = 'medium-loss',
    HIGH_LOSS = 'high-loss'
}
