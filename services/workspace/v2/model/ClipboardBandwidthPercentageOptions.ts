

export class ClipboardBandwidthPercentageOptions {
    private 'clipboard_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withClipboardBandwidthPercentageValue(clipboardBandwidthPercentageValue: number): ClipboardBandwidthPercentageOptions {
        this['clipboard_bandwidth_percentage_value'] = clipboardBandwidthPercentageValue;
        return this;
    }
    public set clipboardBandwidthPercentageValue(clipboardBandwidthPercentageValue: number  | undefined) {
        this['clipboard_bandwidth_percentage_value'] = clipboardBandwidthPercentageValue;
    }
    public get clipboardBandwidthPercentageValue(): number | undefined {
        return this['clipboard_bandwidth_percentage_value'];
    }
}