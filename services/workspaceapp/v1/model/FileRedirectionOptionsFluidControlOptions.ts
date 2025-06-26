

export class FileRedirectionOptionsFluidControlOptions {
    private 'good_network_latency'?: number;
    private 'normal_network_latency'?: number;
    private 'poor_network_latency'?: number;
    private 'reducing_step'?: number;
    private 'slow_increasing_step'?: number;
    private 'quick_increasing_step'?: number;
    private 'start_speed'?: number;
    private 'test_block_size'?: number;
    private 'test_time_gap'?: number;
    public constructor() { 
    }
    public withGoodNetworkLatency(goodNetworkLatency: number): FileRedirectionOptionsFluidControlOptions {
        this['good_network_latency'] = goodNetworkLatency;
        return this;
    }
    public set goodNetworkLatency(goodNetworkLatency: number  | undefined) {
        this['good_network_latency'] = goodNetworkLatency;
    }
    public get goodNetworkLatency(): number | undefined {
        return this['good_network_latency'];
    }
    public withNormalNetworkLatency(normalNetworkLatency: number): FileRedirectionOptionsFluidControlOptions {
        this['normal_network_latency'] = normalNetworkLatency;
        return this;
    }
    public set normalNetworkLatency(normalNetworkLatency: number  | undefined) {
        this['normal_network_latency'] = normalNetworkLatency;
    }
    public get normalNetworkLatency(): number | undefined {
        return this['normal_network_latency'];
    }
    public withPoorNetworkLatency(poorNetworkLatency: number): FileRedirectionOptionsFluidControlOptions {
        this['poor_network_latency'] = poorNetworkLatency;
        return this;
    }
    public set poorNetworkLatency(poorNetworkLatency: number  | undefined) {
        this['poor_network_latency'] = poorNetworkLatency;
    }
    public get poorNetworkLatency(): number | undefined {
        return this['poor_network_latency'];
    }
    public withReducingStep(reducingStep: number): FileRedirectionOptionsFluidControlOptions {
        this['reducing_step'] = reducingStep;
        return this;
    }
    public set reducingStep(reducingStep: number  | undefined) {
        this['reducing_step'] = reducingStep;
    }
    public get reducingStep(): number | undefined {
        return this['reducing_step'];
    }
    public withSlowIncreasingStep(slowIncreasingStep: number): FileRedirectionOptionsFluidControlOptions {
        this['slow_increasing_step'] = slowIncreasingStep;
        return this;
    }
    public set slowIncreasingStep(slowIncreasingStep: number  | undefined) {
        this['slow_increasing_step'] = slowIncreasingStep;
    }
    public get slowIncreasingStep(): number | undefined {
        return this['slow_increasing_step'];
    }
    public withQuickIncreasingStep(quickIncreasingStep: number): FileRedirectionOptionsFluidControlOptions {
        this['quick_increasing_step'] = quickIncreasingStep;
        return this;
    }
    public set quickIncreasingStep(quickIncreasingStep: number  | undefined) {
        this['quick_increasing_step'] = quickIncreasingStep;
    }
    public get quickIncreasingStep(): number | undefined {
        return this['quick_increasing_step'];
    }
    public withStartSpeed(startSpeed: number): FileRedirectionOptionsFluidControlOptions {
        this['start_speed'] = startSpeed;
        return this;
    }
    public set startSpeed(startSpeed: number  | undefined) {
        this['start_speed'] = startSpeed;
    }
    public get startSpeed(): number | undefined {
        return this['start_speed'];
    }
    public withTestBlockSize(testBlockSize: number): FileRedirectionOptionsFluidControlOptions {
        this['test_block_size'] = testBlockSize;
        return this;
    }
    public set testBlockSize(testBlockSize: number  | undefined) {
        this['test_block_size'] = testBlockSize;
    }
    public get testBlockSize(): number | undefined {
        return this['test_block_size'];
    }
    public withTestTimeGap(testTimeGap: number): FileRedirectionOptionsFluidControlOptions {
        this['test_time_gap'] = testTimeGap;
        return this;
    }
    public set testTimeGap(testTimeGap: number  | undefined) {
        this['test_time_gap'] = testTimeGap;
    }
    public get testTimeGap(): number | undefined {
        return this['test_time_gap'];
    }
}