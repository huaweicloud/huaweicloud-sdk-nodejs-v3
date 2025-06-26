import { CameraBandwidthPercentageOptions } from './CameraBandwidthPercentageOptions';
import { ClipboardBandwidthPercentageOptions } from './ClipboardBandwidthPercentageOptions';
import { ComBandwidthPercentageOptions } from './ComBandwidthPercentageOptions';
import { DisplayBandwidthPercentageOptions } from './DisplayBandwidthPercentageOptions';
import { FileRedirectionBandwidthPercentageOptions } from './FileRedirectionBandwidthPercentageOptions';
import { MultimediaBandwidthPercentageOptions } from './MultimediaBandwidthPercentageOptions';
import { PcscBandwidthPercentageOptions } from './PcscBandwidthPercentageOptions';
import { PrinterBandwidthPercentageOptions } from './PrinterBandwidthPercentageOptions';
import { SecureChannelBandwidthPercentageOptions } from './SecureChannelBandwidthPercentageOptions';
import { TwainBandwidthPercentageOptions } from './TwainBandwidthPercentageOptions';
import { UsbBandwidthPercentageOptions } from './UsbBandwidthPercentageOptions';
import { VirtualChannelBandwidthPercentageOptions } from './VirtualChannelBandwidthPercentageOptions';


export class TotalBandwidthControlOptions {
    private 'total_bandwidth_control_value'?: number;
    private 'display_bandwidth_percentage_enable'?: boolean;
    private 'display_bandwidth_percentage_options'?: DisplayBandwidthPercentageOptions;
    private 'multimedia_bandwidth_percentage_enable'?: boolean;
    private 'multimedia_bandwidth_percentage_options'?: MultimediaBandwidthPercentageOptions;
    private 'usb_bandwidth_percentage_enable'?: boolean;
    private 'usb_bandwidth_percentage_options'?: UsbBandwidthPercentageOptions;
    private 'pcsc_bandwidth_percentage_enable'?: boolean;
    private 'pcsc_bandwidth_percentage_options'?: PcscBandwidthPercentageOptions;
    private 'twain_bandwidth_percentage_enable'?: boolean;
    private 'twain_bandwidth_percentage_options'?: TwainBandwidthPercentageOptions;
    private 'printer_bandwidth_percentage_enable'?: boolean;
    private 'printer_bandwidth_percentage_options'?: PrinterBandwidthPercentageOptions;
    private 'com_bandwidth_percentage_enable'?: boolean;
    private 'com_bandwidth_percentage_options'?: ComBandwidthPercentageOptions;
    private 'file_redirection_bandwidth_percentage_enable'?: boolean;
    private 'file_redirection_bandwidth_percentage_options'?: FileRedirectionBandwidthPercentageOptions;
    private 'clipboard_bandwidth_percentage_enable'?: boolean;
    private 'clipboard_bandwidth_percentage_options'?: ClipboardBandwidthPercentageOptions;
    private 'secure_channel_bandwidth_percentage_enable'?: boolean;
    private 'secure_channel_bandwidth_percentage_options'?: SecureChannelBandwidthPercentageOptions;
    private 'camera_bandwidth_percentage_enable'?: boolean;
    private 'camera_bandwidth_percentage_options'?: CameraBandwidthPercentageOptions;
    private 'virtual_channel_bandwidth_percentage_enable'?: boolean;
    private 'virtual_channel_bandwidth_percentage_options'?: VirtualChannelBandwidthPercentageOptions;
    public constructor() { 
    }
    public withTotalBandwidthControlValue(totalBandwidthControlValue: number): TotalBandwidthControlOptions {
        this['total_bandwidth_control_value'] = totalBandwidthControlValue;
        return this;
    }
    public set totalBandwidthControlValue(totalBandwidthControlValue: number  | undefined) {
        this['total_bandwidth_control_value'] = totalBandwidthControlValue;
    }
    public get totalBandwidthControlValue(): number | undefined {
        return this['total_bandwidth_control_value'];
    }
    public withDisplayBandwidthPercentageEnable(displayBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['display_bandwidth_percentage_enable'] = displayBandwidthPercentageEnable;
        return this;
    }
    public set displayBandwidthPercentageEnable(displayBandwidthPercentageEnable: boolean  | undefined) {
        this['display_bandwidth_percentage_enable'] = displayBandwidthPercentageEnable;
    }
    public get displayBandwidthPercentageEnable(): boolean | undefined {
        return this['display_bandwidth_percentage_enable'];
    }
    public withDisplayBandwidthPercentageOptions(displayBandwidthPercentageOptions: DisplayBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['display_bandwidth_percentage_options'] = displayBandwidthPercentageOptions;
        return this;
    }
    public set displayBandwidthPercentageOptions(displayBandwidthPercentageOptions: DisplayBandwidthPercentageOptions  | undefined) {
        this['display_bandwidth_percentage_options'] = displayBandwidthPercentageOptions;
    }
    public get displayBandwidthPercentageOptions(): DisplayBandwidthPercentageOptions | undefined {
        return this['display_bandwidth_percentage_options'];
    }
    public withMultimediaBandwidthPercentageEnable(multimediaBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['multimedia_bandwidth_percentage_enable'] = multimediaBandwidthPercentageEnable;
        return this;
    }
    public set multimediaBandwidthPercentageEnable(multimediaBandwidthPercentageEnable: boolean  | undefined) {
        this['multimedia_bandwidth_percentage_enable'] = multimediaBandwidthPercentageEnable;
    }
    public get multimediaBandwidthPercentageEnable(): boolean | undefined {
        return this['multimedia_bandwidth_percentage_enable'];
    }
    public withMultimediaBandwidthPercentageOptions(multimediaBandwidthPercentageOptions: MultimediaBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['multimedia_bandwidth_percentage_options'] = multimediaBandwidthPercentageOptions;
        return this;
    }
    public set multimediaBandwidthPercentageOptions(multimediaBandwidthPercentageOptions: MultimediaBandwidthPercentageOptions  | undefined) {
        this['multimedia_bandwidth_percentage_options'] = multimediaBandwidthPercentageOptions;
    }
    public get multimediaBandwidthPercentageOptions(): MultimediaBandwidthPercentageOptions | undefined {
        return this['multimedia_bandwidth_percentage_options'];
    }
    public withUsbBandwidthPercentageEnable(usbBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['usb_bandwidth_percentage_enable'] = usbBandwidthPercentageEnable;
        return this;
    }
    public set usbBandwidthPercentageEnable(usbBandwidthPercentageEnable: boolean  | undefined) {
        this['usb_bandwidth_percentage_enable'] = usbBandwidthPercentageEnable;
    }
    public get usbBandwidthPercentageEnable(): boolean | undefined {
        return this['usb_bandwidth_percentage_enable'];
    }
    public withUsbBandwidthPercentageOptions(usbBandwidthPercentageOptions: UsbBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['usb_bandwidth_percentage_options'] = usbBandwidthPercentageOptions;
        return this;
    }
    public set usbBandwidthPercentageOptions(usbBandwidthPercentageOptions: UsbBandwidthPercentageOptions  | undefined) {
        this['usb_bandwidth_percentage_options'] = usbBandwidthPercentageOptions;
    }
    public get usbBandwidthPercentageOptions(): UsbBandwidthPercentageOptions | undefined {
        return this['usb_bandwidth_percentage_options'];
    }
    public withPcscBandwidthPercentageEnable(pcscBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['pcsc_bandwidth_percentage_enable'] = pcscBandwidthPercentageEnable;
        return this;
    }
    public set pcscBandwidthPercentageEnable(pcscBandwidthPercentageEnable: boolean  | undefined) {
        this['pcsc_bandwidth_percentage_enable'] = pcscBandwidthPercentageEnable;
    }
    public get pcscBandwidthPercentageEnable(): boolean | undefined {
        return this['pcsc_bandwidth_percentage_enable'];
    }
    public withPcscBandwidthPercentageOptions(pcscBandwidthPercentageOptions: PcscBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['pcsc_bandwidth_percentage_options'] = pcscBandwidthPercentageOptions;
        return this;
    }
    public set pcscBandwidthPercentageOptions(pcscBandwidthPercentageOptions: PcscBandwidthPercentageOptions  | undefined) {
        this['pcsc_bandwidth_percentage_options'] = pcscBandwidthPercentageOptions;
    }
    public get pcscBandwidthPercentageOptions(): PcscBandwidthPercentageOptions | undefined {
        return this['pcsc_bandwidth_percentage_options'];
    }
    public withTwainBandwidthPercentageEnable(twainBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['twain_bandwidth_percentage_enable'] = twainBandwidthPercentageEnable;
        return this;
    }
    public set twainBandwidthPercentageEnable(twainBandwidthPercentageEnable: boolean  | undefined) {
        this['twain_bandwidth_percentage_enable'] = twainBandwidthPercentageEnable;
    }
    public get twainBandwidthPercentageEnable(): boolean | undefined {
        return this['twain_bandwidth_percentage_enable'];
    }
    public withTwainBandwidthPercentageOptions(twainBandwidthPercentageOptions: TwainBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['twain_bandwidth_percentage_options'] = twainBandwidthPercentageOptions;
        return this;
    }
    public set twainBandwidthPercentageOptions(twainBandwidthPercentageOptions: TwainBandwidthPercentageOptions  | undefined) {
        this['twain_bandwidth_percentage_options'] = twainBandwidthPercentageOptions;
    }
    public get twainBandwidthPercentageOptions(): TwainBandwidthPercentageOptions | undefined {
        return this['twain_bandwidth_percentage_options'];
    }
    public withPrinterBandwidthPercentageEnable(printerBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['printer_bandwidth_percentage_enable'] = printerBandwidthPercentageEnable;
        return this;
    }
    public set printerBandwidthPercentageEnable(printerBandwidthPercentageEnable: boolean  | undefined) {
        this['printer_bandwidth_percentage_enable'] = printerBandwidthPercentageEnable;
    }
    public get printerBandwidthPercentageEnable(): boolean | undefined {
        return this['printer_bandwidth_percentage_enable'];
    }
    public withPrinterBandwidthPercentageOptions(printerBandwidthPercentageOptions: PrinterBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['printer_bandwidth_percentage_options'] = printerBandwidthPercentageOptions;
        return this;
    }
    public set printerBandwidthPercentageOptions(printerBandwidthPercentageOptions: PrinterBandwidthPercentageOptions  | undefined) {
        this['printer_bandwidth_percentage_options'] = printerBandwidthPercentageOptions;
    }
    public get printerBandwidthPercentageOptions(): PrinterBandwidthPercentageOptions | undefined {
        return this['printer_bandwidth_percentage_options'];
    }
    public withComBandwidthPercentageEnable(comBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['com_bandwidth_percentage_enable'] = comBandwidthPercentageEnable;
        return this;
    }
    public set comBandwidthPercentageEnable(comBandwidthPercentageEnable: boolean  | undefined) {
        this['com_bandwidth_percentage_enable'] = comBandwidthPercentageEnable;
    }
    public get comBandwidthPercentageEnable(): boolean | undefined {
        return this['com_bandwidth_percentage_enable'];
    }
    public withComBandwidthPercentageOptions(comBandwidthPercentageOptions: ComBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['com_bandwidth_percentage_options'] = comBandwidthPercentageOptions;
        return this;
    }
    public set comBandwidthPercentageOptions(comBandwidthPercentageOptions: ComBandwidthPercentageOptions  | undefined) {
        this['com_bandwidth_percentage_options'] = comBandwidthPercentageOptions;
    }
    public get comBandwidthPercentageOptions(): ComBandwidthPercentageOptions | undefined {
        return this['com_bandwidth_percentage_options'];
    }
    public withFileRedirectionBandwidthPercentageEnable(fileRedirectionBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['file_redirection_bandwidth_percentage_enable'] = fileRedirectionBandwidthPercentageEnable;
        return this;
    }
    public set fileRedirectionBandwidthPercentageEnable(fileRedirectionBandwidthPercentageEnable: boolean  | undefined) {
        this['file_redirection_bandwidth_percentage_enable'] = fileRedirectionBandwidthPercentageEnable;
    }
    public get fileRedirectionBandwidthPercentageEnable(): boolean | undefined {
        return this['file_redirection_bandwidth_percentage_enable'];
    }
    public withFileRedirectionBandwidthPercentageOptions(fileRedirectionBandwidthPercentageOptions: FileRedirectionBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['file_redirection_bandwidth_percentage_options'] = fileRedirectionBandwidthPercentageOptions;
        return this;
    }
    public set fileRedirectionBandwidthPercentageOptions(fileRedirectionBandwidthPercentageOptions: FileRedirectionBandwidthPercentageOptions  | undefined) {
        this['file_redirection_bandwidth_percentage_options'] = fileRedirectionBandwidthPercentageOptions;
    }
    public get fileRedirectionBandwidthPercentageOptions(): FileRedirectionBandwidthPercentageOptions | undefined {
        return this['file_redirection_bandwidth_percentage_options'];
    }
    public withClipboardBandwidthPercentageEnable(clipboardBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['clipboard_bandwidth_percentage_enable'] = clipboardBandwidthPercentageEnable;
        return this;
    }
    public set clipboardBandwidthPercentageEnable(clipboardBandwidthPercentageEnable: boolean  | undefined) {
        this['clipboard_bandwidth_percentage_enable'] = clipboardBandwidthPercentageEnable;
    }
    public get clipboardBandwidthPercentageEnable(): boolean | undefined {
        return this['clipboard_bandwidth_percentage_enable'];
    }
    public withClipboardBandwidthPercentageOptions(clipboardBandwidthPercentageOptions: ClipboardBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['clipboard_bandwidth_percentage_options'] = clipboardBandwidthPercentageOptions;
        return this;
    }
    public set clipboardBandwidthPercentageOptions(clipboardBandwidthPercentageOptions: ClipboardBandwidthPercentageOptions  | undefined) {
        this['clipboard_bandwidth_percentage_options'] = clipboardBandwidthPercentageOptions;
    }
    public get clipboardBandwidthPercentageOptions(): ClipboardBandwidthPercentageOptions | undefined {
        return this['clipboard_bandwidth_percentage_options'];
    }
    public withSecureChannelBandwidthPercentageEnable(secureChannelBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['secure_channel_bandwidth_percentage_enable'] = secureChannelBandwidthPercentageEnable;
        return this;
    }
    public set secureChannelBandwidthPercentageEnable(secureChannelBandwidthPercentageEnable: boolean  | undefined) {
        this['secure_channel_bandwidth_percentage_enable'] = secureChannelBandwidthPercentageEnable;
    }
    public get secureChannelBandwidthPercentageEnable(): boolean | undefined {
        return this['secure_channel_bandwidth_percentage_enable'];
    }
    public withSecureChannelBandwidthPercentageOptions(secureChannelBandwidthPercentageOptions: SecureChannelBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['secure_channel_bandwidth_percentage_options'] = secureChannelBandwidthPercentageOptions;
        return this;
    }
    public set secureChannelBandwidthPercentageOptions(secureChannelBandwidthPercentageOptions: SecureChannelBandwidthPercentageOptions  | undefined) {
        this['secure_channel_bandwidth_percentage_options'] = secureChannelBandwidthPercentageOptions;
    }
    public get secureChannelBandwidthPercentageOptions(): SecureChannelBandwidthPercentageOptions | undefined {
        return this['secure_channel_bandwidth_percentage_options'];
    }
    public withCameraBandwidthPercentageEnable(cameraBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['camera_bandwidth_percentage_enable'] = cameraBandwidthPercentageEnable;
        return this;
    }
    public set cameraBandwidthPercentageEnable(cameraBandwidthPercentageEnable: boolean  | undefined) {
        this['camera_bandwidth_percentage_enable'] = cameraBandwidthPercentageEnable;
    }
    public get cameraBandwidthPercentageEnable(): boolean | undefined {
        return this['camera_bandwidth_percentage_enable'];
    }
    public withCameraBandwidthPercentageOptions(cameraBandwidthPercentageOptions: CameraBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['camera_bandwidth_percentage_options'] = cameraBandwidthPercentageOptions;
        return this;
    }
    public set cameraBandwidthPercentageOptions(cameraBandwidthPercentageOptions: CameraBandwidthPercentageOptions  | undefined) {
        this['camera_bandwidth_percentage_options'] = cameraBandwidthPercentageOptions;
    }
    public get cameraBandwidthPercentageOptions(): CameraBandwidthPercentageOptions | undefined {
        return this['camera_bandwidth_percentage_options'];
    }
    public withVirtualChannelBandwidthPercentageEnable(virtualChannelBandwidthPercentageEnable: boolean): TotalBandwidthControlOptions {
        this['virtual_channel_bandwidth_percentage_enable'] = virtualChannelBandwidthPercentageEnable;
        return this;
    }
    public set virtualChannelBandwidthPercentageEnable(virtualChannelBandwidthPercentageEnable: boolean  | undefined) {
        this['virtual_channel_bandwidth_percentage_enable'] = virtualChannelBandwidthPercentageEnable;
    }
    public get virtualChannelBandwidthPercentageEnable(): boolean | undefined {
        return this['virtual_channel_bandwidth_percentage_enable'];
    }
    public withVirtualChannelBandwidthPercentageOptions(virtualChannelBandwidthPercentageOptions: VirtualChannelBandwidthPercentageOptions): TotalBandwidthControlOptions {
        this['virtual_channel_bandwidth_percentage_options'] = virtualChannelBandwidthPercentageOptions;
        return this;
    }
    public set virtualChannelBandwidthPercentageOptions(virtualChannelBandwidthPercentageOptions: VirtualChannelBandwidthPercentageOptions  | undefined) {
        this['virtual_channel_bandwidth_percentage_options'] = virtualChannelBandwidthPercentageOptions;
    }
    public get virtualChannelBandwidthPercentageOptions(): VirtualChannelBandwidthPercentageOptions | undefined {
        return this['virtual_channel_bandwidth_percentage_options'];
    }
}