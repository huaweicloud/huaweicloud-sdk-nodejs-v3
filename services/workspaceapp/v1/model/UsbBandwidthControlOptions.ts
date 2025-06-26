

export class UsbBandwidthControlOptions {
    private 'usb_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withUsbBandwidthControlValue(usbBandwidthControlValue: number): UsbBandwidthControlOptions {
        this['usb_bandwidth_control_value'] = usbBandwidthControlValue;
        return this;
    }
    public set usbBandwidthControlValue(usbBandwidthControlValue: number  | undefined) {
        this['usb_bandwidth_control_value'] = usbBandwidthControlValue;
    }
    public get usbBandwidthControlValue(): number | undefined {
        return this['usb_bandwidth_control_value'];
    }
}