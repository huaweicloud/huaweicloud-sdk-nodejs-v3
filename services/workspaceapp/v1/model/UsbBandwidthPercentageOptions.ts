

export class UsbBandwidthPercentageOptions {
    private 'usb_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withUsbBandwidthPercentageValue(usbBandwidthPercentageValue: number): UsbBandwidthPercentageOptions {
        this['usb_bandwidth_percentage_value'] = usbBandwidthPercentageValue;
        return this;
    }
    public set usbBandwidthPercentageValue(usbBandwidthPercentageValue: number  | undefined) {
        this['usb_bandwidth_percentage_value'] = usbBandwidthPercentageValue;
    }
    public get usbBandwidthPercentageValue(): number | undefined {
        return this['usb_bandwidth_percentage_value'];
    }
}