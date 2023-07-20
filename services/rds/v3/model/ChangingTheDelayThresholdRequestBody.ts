

export class ChangingTheDelayThresholdRequestBody {
    private 'delay_threshold_in_kilobytes'?: number;
    public constructor(delayThresholdInKilobytes?: number) { 
        this['delay_threshold_in_kilobytes'] = delayThresholdInKilobytes;
    }
    public withDelayThresholdInKilobytes(delayThresholdInKilobytes: number): ChangingTheDelayThresholdRequestBody {
        this['delay_threshold_in_kilobytes'] = delayThresholdInKilobytes;
        return this;
    }
    public set delayThresholdInKilobytes(delayThresholdInKilobytes: number  | undefined) {
        this['delay_threshold_in_kilobytes'] = delayThresholdInKilobytes;
    }
    public get delayThresholdInKilobytes(): number | undefined {
        return this['delay_threshold_in_kilobytes'];
    }
}