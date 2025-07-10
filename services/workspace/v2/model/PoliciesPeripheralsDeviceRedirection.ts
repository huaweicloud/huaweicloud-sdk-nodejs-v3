import { PoliciesPeripheralsDeviceRedirectionCameraRedirection } from './PoliciesPeripheralsDeviceRedirectionCameraRedirection';
import { PoliciesPeripheralsDeviceRedirectionHidRedirection } from './PoliciesPeripheralsDeviceRedirectionHidRedirection';
import { PoliciesPeripheralsDeviceRedirectionPrinterRedirection } from './PoliciesPeripheralsDeviceRedirectionPrinterRedirection';
import { PoliciesPeripheralsDeviceRedirectionSessionPrinter } from './PoliciesPeripheralsDeviceRedirectionSessionPrinter';


export class PoliciesPeripheralsDeviceRedirection {
    private 'printer_redirection'?: PoliciesPeripheralsDeviceRedirectionPrinterRedirection;
    private 'session_printer'?: PoliciesPeripheralsDeviceRedirectionSessionPrinter;
    private 'camera_redirection'?: PoliciesPeripheralsDeviceRedirectionCameraRedirection;
    private 'twain_redirection_enable'?: boolean;
    private 'image_compression_level'?: string;
    private 'hid_redirection'?: PoliciesPeripheralsDeviceRedirectionHidRedirection;
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
    public withImageCompressionLevel(imageCompressionLevel: string): PoliciesPeripheralsDeviceRedirection {
        this['image_compression_level'] = imageCompressionLevel;
        return this;
    }
    public set imageCompressionLevel(imageCompressionLevel: string  | undefined) {
        this['image_compression_level'] = imageCompressionLevel;
    }
    public get imageCompressionLevel(): string | undefined {
        return this['image_compression_level'];
    }
    public withHidRedirection(hidRedirection: PoliciesPeripheralsDeviceRedirectionHidRedirection): PoliciesPeripheralsDeviceRedirection {
        this['hid_redirection'] = hidRedirection;
        return this;
    }
    public set hidRedirection(hidRedirection: PoliciesPeripheralsDeviceRedirectionHidRedirection  | undefined) {
        this['hid_redirection'] = hidRedirection;
    }
    public get hidRedirection(): PoliciesPeripheralsDeviceRedirectionHidRedirection | undefined {
        return this['hid_redirection'];
    }
}