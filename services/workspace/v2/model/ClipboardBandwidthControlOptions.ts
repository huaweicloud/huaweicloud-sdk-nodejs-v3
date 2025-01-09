

export class ClipboardBandwidthControlOptions {
    private 'clipboard_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withClipboardBandwidthControlValue(clipboardBandwidthControlValue: number): ClipboardBandwidthControlOptions {
        this['clipboard_bandwidth_control_value'] = clipboardBandwidthControlValue;
        return this;
    }
    public set clipboardBandwidthControlValue(clipboardBandwidthControlValue: number  | undefined) {
        this['clipboard_bandwidth_control_value'] = clipboardBandwidthControlValue;
    }
    public get clipboardBandwidthControlValue(): number | undefined {
        return this['clipboard_bandwidth_control_value'];
    }
}