import { CameraBandwidthControlOptions } from './CameraBandwidthControlOptions';
import { ClipboardBandwidthControlOptions } from './ClipboardBandwidthControlOptions';
import { ComBandwidthControlOptions } from './ComBandwidthControlOptions';
import { DisplayBandwidthControlOptions } from './DisplayBandwidthControlOptions';
import { FileRedirectionBandwidthControlOptions } from './FileRedirectionBandwidthControlOptions';
import { MultimediaBandwidthControlOptions } from './MultimediaBandwidthControlOptions';
import { PcscBandwidthControlOptions } from './PcscBandwidthControlOptions';
import { PrinterBandwidthControlOptions } from './PrinterBandwidthControlOptions';
import { SecureChannelBandwidthControlOptions } from './SecureChannelBandwidthControlOptions';
import { TotalBandwidthControlOptions } from './TotalBandwidthControlOptions';
import { TwainBandwidthControlOptions } from './TwainBandwidthControlOptions';
import { UsbBandwidthControlOptions } from './UsbBandwidthControlOptions';
import { VirtualChannelBandwidthControlOptions } from './VirtualChannelBandwidthControlOptions';


export class Bandwidth {
    private 'intelligent_data_transport_flag'?: BandwidthIntelligentDataTransportFlagEnum | string;
    private 'total_bandwidth_control_enable'?: boolean;
    public options?: TotalBandwidthControlOptions;
    private 'display_bandwidth_control_enable'?: boolean;
    private 'display_bandwidth_control_options'?: DisplayBandwidthControlOptions;
    private 'multimedia_bandwidth_control_enable'?: boolean;
    private 'multimedia_bandwidth_control_options'?: MultimediaBandwidthControlOptions;
    private 'usb_bandwidth_control_enable'?: boolean;
    private 'usb_bandwidth_control_options'?: UsbBandwidthControlOptions;
    private 'pcsc_bandwidth_control_enable'?: boolean;
    private 'pcsc_bandwidth_control_options'?: PcscBandwidthControlOptions;
    private 'twain_bandwidth_control_enable'?: boolean;
    private 'twain_bandwidth_control_options'?: TwainBandwidthControlOptions;
    private 'printer_bandwidth_control_enable'?: boolean;
    private 'printer_bandwidth_control_options'?: PrinterBandwidthControlOptions;
    private 'com_bandwidth_control_enable'?: boolean;
    private 'com_bandwidth_control_options'?: ComBandwidthControlOptions;
    private 'file_redirection_bandwidth_control_enable'?: boolean;
    private 'file_redirection_bandwidth_control_options'?: FileRedirectionBandwidthControlOptions;
    private 'clipboard_bandwidth_control_enable'?: boolean;
    private 'clipboard_bandwidth_control_options'?: ClipboardBandwidthControlOptions;
    private 'secure_channel_bandwidth_control_enable'?: boolean;
    private 'secure_channel_bandwidth_control_options'?: SecureChannelBandwidthControlOptions;
    private 'camera_bandwidth_control_enable'?: boolean;
    private 'camera_bandwidth_control_options'?: CameraBandwidthControlOptions;
    private 'virtual_channel_bandwidth_control_enable'?: boolean;
    private 'virtual_channel_bandwidth_control_options'?: VirtualChannelBandwidthControlOptions;
    public constructor() { 
    }
    public withIntelligentDataTransportFlag(intelligentDataTransportFlag: BandwidthIntelligentDataTransportFlagEnum | string): Bandwidth {
        this['intelligent_data_transport_flag'] = intelligentDataTransportFlag;
        return this;
    }
    public set intelligentDataTransportFlag(intelligentDataTransportFlag: BandwidthIntelligentDataTransportFlagEnum | string  | undefined) {
        this['intelligent_data_transport_flag'] = intelligentDataTransportFlag;
    }
    public get intelligentDataTransportFlag(): BandwidthIntelligentDataTransportFlagEnum | string | undefined {
        return this['intelligent_data_transport_flag'];
    }
    public withTotalBandwidthControlEnable(totalBandwidthControlEnable: boolean): Bandwidth {
        this['total_bandwidth_control_enable'] = totalBandwidthControlEnable;
        return this;
    }
    public set totalBandwidthControlEnable(totalBandwidthControlEnable: boolean  | undefined) {
        this['total_bandwidth_control_enable'] = totalBandwidthControlEnable;
    }
    public get totalBandwidthControlEnable(): boolean | undefined {
        return this['total_bandwidth_control_enable'];
    }
    public withOptions(options: TotalBandwidthControlOptions): Bandwidth {
        this['options'] = options;
        return this;
    }
    public withDisplayBandwidthControlEnable(displayBandwidthControlEnable: boolean): Bandwidth {
        this['display_bandwidth_control_enable'] = displayBandwidthControlEnable;
        return this;
    }
    public set displayBandwidthControlEnable(displayBandwidthControlEnable: boolean  | undefined) {
        this['display_bandwidth_control_enable'] = displayBandwidthControlEnable;
    }
    public get displayBandwidthControlEnable(): boolean | undefined {
        return this['display_bandwidth_control_enable'];
    }
    public withDisplayBandwidthControlOptions(displayBandwidthControlOptions: DisplayBandwidthControlOptions): Bandwidth {
        this['display_bandwidth_control_options'] = displayBandwidthControlOptions;
        return this;
    }
    public set displayBandwidthControlOptions(displayBandwidthControlOptions: DisplayBandwidthControlOptions  | undefined) {
        this['display_bandwidth_control_options'] = displayBandwidthControlOptions;
    }
    public get displayBandwidthControlOptions(): DisplayBandwidthControlOptions | undefined {
        return this['display_bandwidth_control_options'];
    }
    public withMultimediaBandwidthControlEnable(multimediaBandwidthControlEnable: boolean): Bandwidth {
        this['multimedia_bandwidth_control_enable'] = multimediaBandwidthControlEnable;
        return this;
    }
    public set multimediaBandwidthControlEnable(multimediaBandwidthControlEnable: boolean  | undefined) {
        this['multimedia_bandwidth_control_enable'] = multimediaBandwidthControlEnable;
    }
    public get multimediaBandwidthControlEnable(): boolean | undefined {
        return this['multimedia_bandwidth_control_enable'];
    }
    public withMultimediaBandwidthControlOptions(multimediaBandwidthControlOptions: MultimediaBandwidthControlOptions): Bandwidth {
        this['multimedia_bandwidth_control_options'] = multimediaBandwidthControlOptions;
        return this;
    }
    public set multimediaBandwidthControlOptions(multimediaBandwidthControlOptions: MultimediaBandwidthControlOptions  | undefined) {
        this['multimedia_bandwidth_control_options'] = multimediaBandwidthControlOptions;
    }
    public get multimediaBandwidthControlOptions(): MultimediaBandwidthControlOptions | undefined {
        return this['multimedia_bandwidth_control_options'];
    }
    public withUsbBandwidthControlEnable(usbBandwidthControlEnable: boolean): Bandwidth {
        this['usb_bandwidth_control_enable'] = usbBandwidthControlEnable;
        return this;
    }
    public set usbBandwidthControlEnable(usbBandwidthControlEnable: boolean  | undefined) {
        this['usb_bandwidth_control_enable'] = usbBandwidthControlEnable;
    }
    public get usbBandwidthControlEnable(): boolean | undefined {
        return this['usb_bandwidth_control_enable'];
    }
    public withUsbBandwidthControlOptions(usbBandwidthControlOptions: UsbBandwidthControlOptions): Bandwidth {
        this['usb_bandwidth_control_options'] = usbBandwidthControlOptions;
        return this;
    }
    public set usbBandwidthControlOptions(usbBandwidthControlOptions: UsbBandwidthControlOptions  | undefined) {
        this['usb_bandwidth_control_options'] = usbBandwidthControlOptions;
    }
    public get usbBandwidthControlOptions(): UsbBandwidthControlOptions | undefined {
        return this['usb_bandwidth_control_options'];
    }
    public withPcscBandwidthControlEnable(pcscBandwidthControlEnable: boolean): Bandwidth {
        this['pcsc_bandwidth_control_enable'] = pcscBandwidthControlEnable;
        return this;
    }
    public set pcscBandwidthControlEnable(pcscBandwidthControlEnable: boolean  | undefined) {
        this['pcsc_bandwidth_control_enable'] = pcscBandwidthControlEnable;
    }
    public get pcscBandwidthControlEnable(): boolean | undefined {
        return this['pcsc_bandwidth_control_enable'];
    }
    public withPcscBandwidthControlOptions(pcscBandwidthControlOptions: PcscBandwidthControlOptions): Bandwidth {
        this['pcsc_bandwidth_control_options'] = pcscBandwidthControlOptions;
        return this;
    }
    public set pcscBandwidthControlOptions(pcscBandwidthControlOptions: PcscBandwidthControlOptions  | undefined) {
        this['pcsc_bandwidth_control_options'] = pcscBandwidthControlOptions;
    }
    public get pcscBandwidthControlOptions(): PcscBandwidthControlOptions | undefined {
        return this['pcsc_bandwidth_control_options'];
    }
    public withTwainBandwidthControlEnable(twainBandwidthControlEnable: boolean): Bandwidth {
        this['twain_bandwidth_control_enable'] = twainBandwidthControlEnable;
        return this;
    }
    public set twainBandwidthControlEnable(twainBandwidthControlEnable: boolean  | undefined) {
        this['twain_bandwidth_control_enable'] = twainBandwidthControlEnable;
    }
    public get twainBandwidthControlEnable(): boolean | undefined {
        return this['twain_bandwidth_control_enable'];
    }
    public withTwainBandwidthControlOptions(twainBandwidthControlOptions: TwainBandwidthControlOptions): Bandwidth {
        this['twain_bandwidth_control_options'] = twainBandwidthControlOptions;
        return this;
    }
    public set twainBandwidthControlOptions(twainBandwidthControlOptions: TwainBandwidthControlOptions  | undefined) {
        this['twain_bandwidth_control_options'] = twainBandwidthControlOptions;
    }
    public get twainBandwidthControlOptions(): TwainBandwidthControlOptions | undefined {
        return this['twain_bandwidth_control_options'];
    }
    public withPrinterBandwidthControlEnable(printerBandwidthControlEnable: boolean): Bandwidth {
        this['printer_bandwidth_control_enable'] = printerBandwidthControlEnable;
        return this;
    }
    public set printerBandwidthControlEnable(printerBandwidthControlEnable: boolean  | undefined) {
        this['printer_bandwidth_control_enable'] = printerBandwidthControlEnable;
    }
    public get printerBandwidthControlEnable(): boolean | undefined {
        return this['printer_bandwidth_control_enable'];
    }
    public withPrinterBandwidthControlOptions(printerBandwidthControlOptions: PrinterBandwidthControlOptions): Bandwidth {
        this['printer_bandwidth_control_options'] = printerBandwidthControlOptions;
        return this;
    }
    public set printerBandwidthControlOptions(printerBandwidthControlOptions: PrinterBandwidthControlOptions  | undefined) {
        this['printer_bandwidth_control_options'] = printerBandwidthControlOptions;
    }
    public get printerBandwidthControlOptions(): PrinterBandwidthControlOptions | undefined {
        return this['printer_bandwidth_control_options'];
    }
    public withComBandwidthControlEnable(comBandwidthControlEnable: boolean): Bandwidth {
        this['com_bandwidth_control_enable'] = comBandwidthControlEnable;
        return this;
    }
    public set comBandwidthControlEnable(comBandwidthControlEnable: boolean  | undefined) {
        this['com_bandwidth_control_enable'] = comBandwidthControlEnable;
    }
    public get comBandwidthControlEnable(): boolean | undefined {
        return this['com_bandwidth_control_enable'];
    }
    public withComBandwidthControlOptions(comBandwidthControlOptions: ComBandwidthControlOptions): Bandwidth {
        this['com_bandwidth_control_options'] = comBandwidthControlOptions;
        return this;
    }
    public set comBandwidthControlOptions(comBandwidthControlOptions: ComBandwidthControlOptions  | undefined) {
        this['com_bandwidth_control_options'] = comBandwidthControlOptions;
    }
    public get comBandwidthControlOptions(): ComBandwidthControlOptions | undefined {
        return this['com_bandwidth_control_options'];
    }
    public withFileRedirectionBandwidthControlEnable(fileRedirectionBandwidthControlEnable: boolean): Bandwidth {
        this['file_redirection_bandwidth_control_enable'] = fileRedirectionBandwidthControlEnable;
        return this;
    }
    public set fileRedirectionBandwidthControlEnable(fileRedirectionBandwidthControlEnable: boolean  | undefined) {
        this['file_redirection_bandwidth_control_enable'] = fileRedirectionBandwidthControlEnable;
    }
    public get fileRedirectionBandwidthControlEnable(): boolean | undefined {
        return this['file_redirection_bandwidth_control_enable'];
    }
    public withFileRedirectionBandwidthControlOptions(fileRedirectionBandwidthControlOptions: FileRedirectionBandwidthControlOptions): Bandwidth {
        this['file_redirection_bandwidth_control_options'] = fileRedirectionBandwidthControlOptions;
        return this;
    }
    public set fileRedirectionBandwidthControlOptions(fileRedirectionBandwidthControlOptions: FileRedirectionBandwidthControlOptions  | undefined) {
        this['file_redirection_bandwidth_control_options'] = fileRedirectionBandwidthControlOptions;
    }
    public get fileRedirectionBandwidthControlOptions(): FileRedirectionBandwidthControlOptions | undefined {
        return this['file_redirection_bandwidth_control_options'];
    }
    public withClipboardBandwidthControlEnable(clipboardBandwidthControlEnable: boolean): Bandwidth {
        this['clipboard_bandwidth_control_enable'] = clipboardBandwidthControlEnable;
        return this;
    }
    public set clipboardBandwidthControlEnable(clipboardBandwidthControlEnable: boolean  | undefined) {
        this['clipboard_bandwidth_control_enable'] = clipboardBandwidthControlEnable;
    }
    public get clipboardBandwidthControlEnable(): boolean | undefined {
        return this['clipboard_bandwidth_control_enable'];
    }
    public withClipboardBandwidthControlOptions(clipboardBandwidthControlOptions: ClipboardBandwidthControlOptions): Bandwidth {
        this['clipboard_bandwidth_control_options'] = clipboardBandwidthControlOptions;
        return this;
    }
    public set clipboardBandwidthControlOptions(clipboardBandwidthControlOptions: ClipboardBandwidthControlOptions  | undefined) {
        this['clipboard_bandwidth_control_options'] = clipboardBandwidthControlOptions;
    }
    public get clipboardBandwidthControlOptions(): ClipboardBandwidthControlOptions | undefined {
        return this['clipboard_bandwidth_control_options'];
    }
    public withSecureChannelBandwidthControlEnable(secureChannelBandwidthControlEnable: boolean): Bandwidth {
        this['secure_channel_bandwidth_control_enable'] = secureChannelBandwidthControlEnable;
        return this;
    }
    public set secureChannelBandwidthControlEnable(secureChannelBandwidthControlEnable: boolean  | undefined) {
        this['secure_channel_bandwidth_control_enable'] = secureChannelBandwidthControlEnable;
    }
    public get secureChannelBandwidthControlEnable(): boolean | undefined {
        return this['secure_channel_bandwidth_control_enable'];
    }
    public withSecureChannelBandwidthControlOptions(secureChannelBandwidthControlOptions: SecureChannelBandwidthControlOptions): Bandwidth {
        this['secure_channel_bandwidth_control_options'] = secureChannelBandwidthControlOptions;
        return this;
    }
    public set secureChannelBandwidthControlOptions(secureChannelBandwidthControlOptions: SecureChannelBandwidthControlOptions  | undefined) {
        this['secure_channel_bandwidth_control_options'] = secureChannelBandwidthControlOptions;
    }
    public get secureChannelBandwidthControlOptions(): SecureChannelBandwidthControlOptions | undefined {
        return this['secure_channel_bandwidth_control_options'];
    }
    public withCameraBandwidthControlEnable(cameraBandwidthControlEnable: boolean): Bandwidth {
        this['camera_bandwidth_control_enable'] = cameraBandwidthControlEnable;
        return this;
    }
    public set cameraBandwidthControlEnable(cameraBandwidthControlEnable: boolean  | undefined) {
        this['camera_bandwidth_control_enable'] = cameraBandwidthControlEnable;
    }
    public get cameraBandwidthControlEnable(): boolean | undefined {
        return this['camera_bandwidth_control_enable'];
    }
    public withCameraBandwidthControlOptions(cameraBandwidthControlOptions: CameraBandwidthControlOptions): Bandwidth {
        this['camera_bandwidth_control_options'] = cameraBandwidthControlOptions;
        return this;
    }
    public set cameraBandwidthControlOptions(cameraBandwidthControlOptions: CameraBandwidthControlOptions  | undefined) {
        this['camera_bandwidth_control_options'] = cameraBandwidthControlOptions;
    }
    public get cameraBandwidthControlOptions(): CameraBandwidthControlOptions | undefined {
        return this['camera_bandwidth_control_options'];
    }
    public withVirtualChannelBandwidthControlEnable(virtualChannelBandwidthControlEnable: boolean): Bandwidth {
        this['virtual_channel_bandwidth_control_enable'] = virtualChannelBandwidthControlEnable;
        return this;
    }
    public set virtualChannelBandwidthControlEnable(virtualChannelBandwidthControlEnable: boolean  | undefined) {
        this['virtual_channel_bandwidth_control_enable'] = virtualChannelBandwidthControlEnable;
    }
    public get virtualChannelBandwidthControlEnable(): boolean | undefined {
        return this['virtual_channel_bandwidth_control_enable'];
    }
    public withVirtualChannelBandwidthControlOptions(virtualChannelBandwidthControlOptions: VirtualChannelBandwidthControlOptions): Bandwidth {
        this['virtual_channel_bandwidth_control_options'] = virtualChannelBandwidthControlOptions;
        return this;
    }
    public set virtualChannelBandwidthControlOptions(virtualChannelBandwidthControlOptions: VirtualChannelBandwidthControlOptions  | undefined) {
        this['virtual_channel_bandwidth_control_options'] = virtualChannelBandwidthControlOptions;
    }
    public get virtualChannelBandwidthControlOptions(): VirtualChannelBandwidthControlOptions | undefined {
        return this['virtual_channel_bandwidth_control_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthIntelligentDataTransportFlagEnum {
    DISABLE = 'DISABLE',
    ENABLE = 'ENABLE',
    DIAGNOSTIC = 'DIAGNOSTIC'
}
