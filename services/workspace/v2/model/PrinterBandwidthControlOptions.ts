

export class PrinterBandwidthControlOptions {
    private 'printer_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withPrinterBandwidthControlValue(printerBandwidthControlValue: number): PrinterBandwidthControlOptions {
        this['printer_bandwidth_control_value'] = printerBandwidthControlValue;
        return this;
    }
    public set printerBandwidthControlValue(printerBandwidthControlValue: number  | undefined) {
        this['printer_bandwidth_control_value'] = printerBandwidthControlValue;
    }
    public get printerBandwidthControlValue(): number | undefined {
        return this['printer_bandwidth_control_value'];
    }
}