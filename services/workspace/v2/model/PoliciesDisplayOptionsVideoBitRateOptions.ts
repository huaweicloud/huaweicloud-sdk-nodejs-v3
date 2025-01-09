

export class PoliciesDisplayOptionsVideoBitRateOptions {
    private 'average_video_bit_rate'?: number;
    public constructor() { 
    }
    public withAverageVideoBitRate(averageVideoBitRate: number): PoliciesDisplayOptionsVideoBitRateOptions {
        this['average_video_bit_rate'] = averageVideoBitRate;
        return this;
    }
    public set averageVideoBitRate(averageVideoBitRate: number  | undefined) {
        this['average_video_bit_rate'] = averageVideoBitRate;
    }
    public get averageVideoBitRate(): number | undefined {
        return this['average_video_bit_rate'];
    }
}