

export class UsbPortRedirectionOptions {
    private 'usb_image_enable'?: boolean;
    private 'usb_video_enable'?: boolean;
    private 'usb_printer_enable'?: boolean;
    private 'usb_storage_enable'?: boolean;
    private 'wireless_devices_enable'?: boolean;
    private 'network_devices_enable'?: boolean;
    private 'usb_smart_card_enable'?: boolean;
    private 'other_usb_devices_enable'?: boolean;
    private 'usb_redirection_customization_policy'?: string;
    private 'usb_redirection_mode'?: UsbPortRedirectionOptionsUsbRedirectionModeEnum | string;
    public constructor() { 
    }
    public withUsbImageEnable(usbImageEnable: boolean): UsbPortRedirectionOptions {
        this['usb_image_enable'] = usbImageEnable;
        return this;
    }
    public set usbImageEnable(usbImageEnable: boolean  | undefined) {
        this['usb_image_enable'] = usbImageEnable;
    }
    public get usbImageEnable(): boolean | undefined {
        return this['usb_image_enable'];
    }
    public withUsbVideoEnable(usbVideoEnable: boolean): UsbPortRedirectionOptions {
        this['usb_video_enable'] = usbVideoEnable;
        return this;
    }
    public set usbVideoEnable(usbVideoEnable: boolean  | undefined) {
        this['usb_video_enable'] = usbVideoEnable;
    }
    public get usbVideoEnable(): boolean | undefined {
        return this['usb_video_enable'];
    }
    public withUsbPrinterEnable(usbPrinterEnable: boolean): UsbPortRedirectionOptions {
        this['usb_printer_enable'] = usbPrinterEnable;
        return this;
    }
    public set usbPrinterEnable(usbPrinterEnable: boolean  | undefined) {
        this['usb_printer_enable'] = usbPrinterEnable;
    }
    public get usbPrinterEnable(): boolean | undefined {
        return this['usb_printer_enable'];
    }
    public withUsbStorageEnable(usbStorageEnable: boolean): UsbPortRedirectionOptions {
        this['usb_storage_enable'] = usbStorageEnable;
        return this;
    }
    public set usbStorageEnable(usbStorageEnable: boolean  | undefined) {
        this['usb_storage_enable'] = usbStorageEnable;
    }
    public get usbStorageEnable(): boolean | undefined {
        return this['usb_storage_enable'];
    }
    public withWirelessDevicesEnable(wirelessDevicesEnable: boolean): UsbPortRedirectionOptions {
        this['wireless_devices_enable'] = wirelessDevicesEnable;
        return this;
    }
    public set wirelessDevicesEnable(wirelessDevicesEnable: boolean  | undefined) {
        this['wireless_devices_enable'] = wirelessDevicesEnable;
    }
    public get wirelessDevicesEnable(): boolean | undefined {
        return this['wireless_devices_enable'];
    }
    public withNetworkDevicesEnable(networkDevicesEnable: boolean): UsbPortRedirectionOptions {
        this['network_devices_enable'] = networkDevicesEnable;
        return this;
    }
    public set networkDevicesEnable(networkDevicesEnable: boolean  | undefined) {
        this['network_devices_enable'] = networkDevicesEnable;
    }
    public get networkDevicesEnable(): boolean | undefined {
        return this['network_devices_enable'];
    }
    public withUsbSmartCardEnable(usbSmartCardEnable: boolean): UsbPortRedirectionOptions {
        this['usb_smart_card_enable'] = usbSmartCardEnable;
        return this;
    }
    public set usbSmartCardEnable(usbSmartCardEnable: boolean  | undefined) {
        this['usb_smart_card_enable'] = usbSmartCardEnable;
    }
    public get usbSmartCardEnable(): boolean | undefined {
        return this['usb_smart_card_enable'];
    }
    public withOtherUsbDevicesEnable(otherUsbDevicesEnable: boolean): UsbPortRedirectionOptions {
        this['other_usb_devices_enable'] = otherUsbDevicesEnable;
        return this;
    }
    public set otherUsbDevicesEnable(otherUsbDevicesEnable: boolean  | undefined) {
        this['other_usb_devices_enable'] = otherUsbDevicesEnable;
    }
    public get otherUsbDevicesEnable(): boolean | undefined {
        return this['other_usb_devices_enable'];
    }
    public withUsbRedirectionCustomizationPolicy(usbRedirectionCustomizationPolicy: string): UsbPortRedirectionOptions {
        this['usb_redirection_customization_policy'] = usbRedirectionCustomizationPolicy;
        return this;
    }
    public set usbRedirectionCustomizationPolicy(usbRedirectionCustomizationPolicy: string  | undefined) {
        this['usb_redirection_customization_policy'] = usbRedirectionCustomizationPolicy;
    }
    public get usbRedirectionCustomizationPolicy(): string | undefined {
        return this['usb_redirection_customization_policy'];
    }
    public withUsbRedirectionMode(usbRedirectionMode: UsbPortRedirectionOptionsUsbRedirectionModeEnum | string): UsbPortRedirectionOptions {
        this['usb_redirection_mode'] = usbRedirectionMode;
        return this;
    }
    public set usbRedirectionMode(usbRedirectionMode: UsbPortRedirectionOptionsUsbRedirectionModeEnum | string  | undefined) {
        this['usb_redirection_mode'] = usbRedirectionMode;
    }
    public get usbRedirectionMode(): UsbPortRedirectionOptionsUsbRedirectionModeEnum | string | undefined {
        return this['usb_redirection_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UsbPortRedirectionOptionsUsbRedirectionModeEnum {
    CLASSICAL_MODE = 'Classical mode',
    COMMON_MODE = 'Common mode'
}
