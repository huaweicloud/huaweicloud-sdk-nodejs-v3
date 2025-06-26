

export class FileRedirectionBandwidthPercentageOptions {
    private 'file_redirection_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withFileRedirectionBandwidthPercentageValue(fileRedirectionBandwidthPercentageValue: number): FileRedirectionBandwidthPercentageOptions {
        this['file_redirection_bandwidth_percentage_value'] = fileRedirectionBandwidthPercentageValue;
        return this;
    }
    public set fileRedirectionBandwidthPercentageValue(fileRedirectionBandwidthPercentageValue: number  | undefined) {
        this['file_redirection_bandwidth_percentage_value'] = fileRedirectionBandwidthPercentageValue;
    }
    public get fileRedirectionBandwidthPercentageValue(): number | undefined {
        return this['file_redirection_bandwidth_percentage_value'];
    }
}