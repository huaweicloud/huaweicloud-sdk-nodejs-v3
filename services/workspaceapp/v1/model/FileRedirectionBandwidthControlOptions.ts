

export class FileRedirectionBandwidthControlOptions {
    private 'file_redirection_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withFileRedirectionBandwidthControlValue(fileRedirectionBandwidthControlValue: number): FileRedirectionBandwidthControlOptions {
        this['file_redirection_bandwidth_control_value'] = fileRedirectionBandwidthControlValue;
        return this;
    }
    public set fileRedirectionBandwidthControlValue(fileRedirectionBandwidthControlValue: number  | undefined) {
        this['file_redirection_bandwidth_control_value'] = fileRedirectionBandwidthControlValue;
    }
    public get fileRedirectionBandwidthControlValue(): number | undefined {
        return this['file_redirection_bandwidth_control_value'];
    }
}