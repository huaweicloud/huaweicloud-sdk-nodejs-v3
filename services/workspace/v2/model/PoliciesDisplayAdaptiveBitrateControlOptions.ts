

export class PoliciesDisplayAdaptiveBitrateControlOptions {
    private 'peak_bandwidth_suppression_enable'?: boolean;
    private 'expected_average_network_latency'?: number;
    private 'network_latency_threshold1'?: number;
    private 'network_latency_threshold2'?: number;
    private 'min_dynamic_frame_rate'?: number;
    private 'min_dynamic_frame_rate_lv1'?: number;
    private 'min_dynamic_frame_rate_lv2'?: number;
    private 'rtt_threshold'?: number;
    private 'min_add_framerate'?: number;
    private 'max_add_framerate'?: number;
    private 'sub_framerate'?: number;
    private 'adaptive_bandwidth_lower_limit'?: number;
    private 'adaptive_compression_quality_lower_limit'?: number;
    private 'adaptive_compression_quality_upper_limit'?: number;
    private 'adaptive_compression_quality_increase_limit'?: number;
    private 'adaptive_compression_quality_decrease_limit'?: number;
    private 'adaptive_average_quality_lower_limit'?: number;
    private 'adaptive_average_quality_upper_limit'?: number;
    private 'adaptive_average_quality_increase_limit'?: number;
    private 'adaptive_average_quality_decrease_limit'?: number;
    private 'adaptive_min_quality_lower_limit'?: number;
    private 'adaptive_min_quality_upper_limit'?: number;
    private 'adaptive_min_quality_increase_limit'?: number;
    private 'adaptive_min_quality_decrease_limit'?: number;
    public constructor() { 
    }
    public withPeakBandwidthSuppressionEnable(peakBandwidthSuppressionEnable: boolean): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['peak_bandwidth_suppression_enable'] = peakBandwidthSuppressionEnable;
        return this;
    }
    public set peakBandwidthSuppressionEnable(peakBandwidthSuppressionEnable: boolean  | undefined) {
        this['peak_bandwidth_suppression_enable'] = peakBandwidthSuppressionEnable;
    }
    public get peakBandwidthSuppressionEnable(): boolean | undefined {
        return this['peak_bandwidth_suppression_enable'];
    }
    public withExpectedAverageNetworkLatency(expectedAverageNetworkLatency: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['expected_average_network_latency'] = expectedAverageNetworkLatency;
        return this;
    }
    public set expectedAverageNetworkLatency(expectedAverageNetworkLatency: number  | undefined) {
        this['expected_average_network_latency'] = expectedAverageNetworkLatency;
    }
    public get expectedAverageNetworkLatency(): number | undefined {
        return this['expected_average_network_latency'];
    }
    public withNetworkLatencyThreshold1(networkLatencyThreshold1: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['network_latency_threshold1'] = networkLatencyThreshold1;
        return this;
    }
    public set networkLatencyThreshold1(networkLatencyThreshold1: number  | undefined) {
        this['network_latency_threshold1'] = networkLatencyThreshold1;
    }
    public get networkLatencyThreshold1(): number | undefined {
        return this['network_latency_threshold1'];
    }
    public withNetworkLatencyThreshold2(networkLatencyThreshold2: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['network_latency_threshold2'] = networkLatencyThreshold2;
        return this;
    }
    public set networkLatencyThreshold2(networkLatencyThreshold2: number  | undefined) {
        this['network_latency_threshold2'] = networkLatencyThreshold2;
    }
    public get networkLatencyThreshold2(): number | undefined {
        return this['network_latency_threshold2'];
    }
    public withMinDynamicFrameRate(minDynamicFrameRate: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['min_dynamic_frame_rate'] = minDynamicFrameRate;
        return this;
    }
    public set minDynamicFrameRate(minDynamicFrameRate: number  | undefined) {
        this['min_dynamic_frame_rate'] = minDynamicFrameRate;
    }
    public get minDynamicFrameRate(): number | undefined {
        return this['min_dynamic_frame_rate'];
    }
    public withMinDynamicFrameRateLv1(minDynamicFrameRateLv1: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['min_dynamic_frame_rate_lv1'] = minDynamicFrameRateLv1;
        return this;
    }
    public set minDynamicFrameRateLv1(minDynamicFrameRateLv1: number  | undefined) {
        this['min_dynamic_frame_rate_lv1'] = minDynamicFrameRateLv1;
    }
    public get minDynamicFrameRateLv1(): number | undefined {
        return this['min_dynamic_frame_rate_lv1'];
    }
    public withMinDynamicFrameRateLv2(minDynamicFrameRateLv2: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['min_dynamic_frame_rate_lv2'] = minDynamicFrameRateLv2;
        return this;
    }
    public set minDynamicFrameRateLv2(minDynamicFrameRateLv2: number  | undefined) {
        this['min_dynamic_frame_rate_lv2'] = minDynamicFrameRateLv2;
    }
    public get minDynamicFrameRateLv2(): number | undefined {
        return this['min_dynamic_frame_rate_lv2'];
    }
    public withRttThreshold(rttThreshold: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['rtt_threshold'] = rttThreshold;
        return this;
    }
    public set rttThreshold(rttThreshold: number  | undefined) {
        this['rtt_threshold'] = rttThreshold;
    }
    public get rttThreshold(): number | undefined {
        return this['rtt_threshold'];
    }
    public withMinAddFramerate(minAddFramerate: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['min_add_framerate'] = minAddFramerate;
        return this;
    }
    public set minAddFramerate(minAddFramerate: number  | undefined) {
        this['min_add_framerate'] = minAddFramerate;
    }
    public get minAddFramerate(): number | undefined {
        return this['min_add_framerate'];
    }
    public withMaxAddFramerate(maxAddFramerate: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['max_add_framerate'] = maxAddFramerate;
        return this;
    }
    public set maxAddFramerate(maxAddFramerate: number  | undefined) {
        this['max_add_framerate'] = maxAddFramerate;
    }
    public get maxAddFramerate(): number | undefined {
        return this['max_add_framerate'];
    }
    public withSubFramerate(subFramerate: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['sub_framerate'] = subFramerate;
        return this;
    }
    public set subFramerate(subFramerate: number  | undefined) {
        this['sub_framerate'] = subFramerate;
    }
    public get subFramerate(): number | undefined {
        return this['sub_framerate'];
    }
    public withAdaptiveBandwidthLowerLimit(adaptiveBandwidthLowerLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_bandwidth_lower_limit'] = adaptiveBandwidthLowerLimit;
        return this;
    }
    public set adaptiveBandwidthLowerLimit(adaptiveBandwidthLowerLimit: number  | undefined) {
        this['adaptive_bandwidth_lower_limit'] = adaptiveBandwidthLowerLimit;
    }
    public get adaptiveBandwidthLowerLimit(): number | undefined {
        return this['adaptive_bandwidth_lower_limit'];
    }
    public withAdaptiveCompressionQualityLowerLimit(adaptiveCompressionQualityLowerLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_compression_quality_lower_limit'] = adaptiveCompressionQualityLowerLimit;
        return this;
    }
    public set adaptiveCompressionQualityLowerLimit(adaptiveCompressionQualityLowerLimit: number  | undefined) {
        this['adaptive_compression_quality_lower_limit'] = adaptiveCompressionQualityLowerLimit;
    }
    public get adaptiveCompressionQualityLowerLimit(): number | undefined {
        return this['adaptive_compression_quality_lower_limit'];
    }
    public withAdaptiveCompressionQualityUpperLimit(adaptiveCompressionQualityUpperLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_compression_quality_upper_limit'] = adaptiveCompressionQualityUpperLimit;
        return this;
    }
    public set adaptiveCompressionQualityUpperLimit(adaptiveCompressionQualityUpperLimit: number  | undefined) {
        this['adaptive_compression_quality_upper_limit'] = adaptiveCompressionQualityUpperLimit;
    }
    public get adaptiveCompressionQualityUpperLimit(): number | undefined {
        return this['adaptive_compression_quality_upper_limit'];
    }
    public withAdaptiveCompressionQualityIncreaseLimit(adaptiveCompressionQualityIncreaseLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_compression_quality_increase_limit'] = adaptiveCompressionQualityIncreaseLimit;
        return this;
    }
    public set adaptiveCompressionQualityIncreaseLimit(adaptiveCompressionQualityIncreaseLimit: number  | undefined) {
        this['adaptive_compression_quality_increase_limit'] = adaptiveCompressionQualityIncreaseLimit;
    }
    public get adaptiveCompressionQualityIncreaseLimit(): number | undefined {
        return this['adaptive_compression_quality_increase_limit'];
    }
    public withAdaptiveCompressionQualityDecreaseLimit(adaptiveCompressionQualityDecreaseLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_compression_quality_decrease_limit'] = adaptiveCompressionQualityDecreaseLimit;
        return this;
    }
    public set adaptiveCompressionQualityDecreaseLimit(adaptiveCompressionQualityDecreaseLimit: number  | undefined) {
        this['adaptive_compression_quality_decrease_limit'] = adaptiveCompressionQualityDecreaseLimit;
    }
    public get adaptiveCompressionQualityDecreaseLimit(): number | undefined {
        return this['adaptive_compression_quality_decrease_limit'];
    }
    public withAdaptiveAverageQualityLowerLimit(adaptiveAverageQualityLowerLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_average_quality_lower_limit'] = adaptiveAverageQualityLowerLimit;
        return this;
    }
    public set adaptiveAverageQualityLowerLimit(adaptiveAverageQualityLowerLimit: number  | undefined) {
        this['adaptive_average_quality_lower_limit'] = adaptiveAverageQualityLowerLimit;
    }
    public get adaptiveAverageQualityLowerLimit(): number | undefined {
        return this['adaptive_average_quality_lower_limit'];
    }
    public withAdaptiveAverageQualityUpperLimit(adaptiveAverageQualityUpperLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_average_quality_upper_limit'] = adaptiveAverageQualityUpperLimit;
        return this;
    }
    public set adaptiveAverageQualityUpperLimit(adaptiveAverageQualityUpperLimit: number  | undefined) {
        this['adaptive_average_quality_upper_limit'] = adaptiveAverageQualityUpperLimit;
    }
    public get adaptiveAverageQualityUpperLimit(): number | undefined {
        return this['adaptive_average_quality_upper_limit'];
    }
    public withAdaptiveAverageQualityIncreaseLimit(adaptiveAverageQualityIncreaseLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_average_quality_increase_limit'] = adaptiveAverageQualityIncreaseLimit;
        return this;
    }
    public set adaptiveAverageQualityIncreaseLimit(adaptiveAverageQualityIncreaseLimit: number  | undefined) {
        this['adaptive_average_quality_increase_limit'] = adaptiveAverageQualityIncreaseLimit;
    }
    public get adaptiveAverageQualityIncreaseLimit(): number | undefined {
        return this['adaptive_average_quality_increase_limit'];
    }
    public withAdaptiveAverageQualityDecreaseLimit(adaptiveAverageQualityDecreaseLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_average_quality_decrease_limit'] = adaptiveAverageQualityDecreaseLimit;
        return this;
    }
    public set adaptiveAverageQualityDecreaseLimit(adaptiveAverageQualityDecreaseLimit: number  | undefined) {
        this['adaptive_average_quality_decrease_limit'] = adaptiveAverageQualityDecreaseLimit;
    }
    public get adaptiveAverageQualityDecreaseLimit(): number | undefined {
        return this['adaptive_average_quality_decrease_limit'];
    }
    public withAdaptiveMinQualityLowerLimit(adaptiveMinQualityLowerLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_min_quality_lower_limit'] = adaptiveMinQualityLowerLimit;
        return this;
    }
    public set adaptiveMinQualityLowerLimit(adaptiveMinQualityLowerLimit: number  | undefined) {
        this['adaptive_min_quality_lower_limit'] = adaptiveMinQualityLowerLimit;
    }
    public get adaptiveMinQualityLowerLimit(): number | undefined {
        return this['adaptive_min_quality_lower_limit'];
    }
    public withAdaptiveMinQualityUpperLimit(adaptiveMinQualityUpperLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_min_quality_upper_limit'] = adaptiveMinQualityUpperLimit;
        return this;
    }
    public set adaptiveMinQualityUpperLimit(adaptiveMinQualityUpperLimit: number  | undefined) {
        this['adaptive_min_quality_upper_limit'] = adaptiveMinQualityUpperLimit;
    }
    public get adaptiveMinQualityUpperLimit(): number | undefined {
        return this['adaptive_min_quality_upper_limit'];
    }
    public withAdaptiveMinQualityIncreaseLimit(adaptiveMinQualityIncreaseLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_min_quality_increase_limit'] = adaptiveMinQualityIncreaseLimit;
        return this;
    }
    public set adaptiveMinQualityIncreaseLimit(adaptiveMinQualityIncreaseLimit: number  | undefined) {
        this['adaptive_min_quality_increase_limit'] = adaptiveMinQualityIncreaseLimit;
    }
    public get adaptiveMinQualityIncreaseLimit(): number | undefined {
        return this['adaptive_min_quality_increase_limit'];
    }
    public withAdaptiveMinQualityDecreaseLimit(adaptiveMinQualityDecreaseLimit: number): PoliciesDisplayAdaptiveBitrateControlOptions {
        this['adaptive_min_quality_decrease_limit'] = adaptiveMinQualityDecreaseLimit;
        return this;
    }
    public set adaptiveMinQualityDecreaseLimit(adaptiveMinQualityDecreaseLimit: number  | undefined) {
        this['adaptive_min_quality_decrease_limit'] = adaptiveMinQualityDecreaseLimit;
    }
    public get adaptiveMinQualityDecreaseLimit(): number | undefined {
        return this['adaptive_min_quality_decrease_limit'];
    }
}