

export class PrinterBandwidthPercentageOptions {
    private 'printer_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withPrinterBandwidthPercentageValue(printerBandwidthPercentageValue: number): PrinterBandwidthPercentageOptions {
        this['printer_bandwidth_percentage_value'] = printerBandwidthPercentageValue;
        return this;
    }
    public set printerBandwidthPercentageValue(printerBandwidthPercentageValue: number  | undefined) {
        this['printer_bandwidth_percentage_value'] = printerBandwidthPercentageValue;
    }
    public get printerBandwidthPercentageValue(): number | undefined {
        return this['printer_bandwidth_percentage_value'];
    }
}