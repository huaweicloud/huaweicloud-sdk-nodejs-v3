

export class FlavorSpotOptions {
    private 'longest_spot_duration_hours'?: number | undefined;
    private 'largest_spot_duration_count'?: number | undefined;
    private 'interruption_policy'?: string | undefined;
    public constructor() { 
    }
    public withLongestSpotDurationHours(longestSpotDurationHours: number): FlavorSpotOptions {
        this['longest_spot_duration_hours'] = longestSpotDurationHours;
        return this;
    }
    public set longestSpotDurationHours(longestSpotDurationHours: number | undefined) {
        this['longest_spot_duration_hours'] = longestSpotDurationHours;
    }
    public get longestSpotDurationHours() {
        return this['longest_spot_duration_hours'];
    }
    public withLargestSpotDurationCount(largestSpotDurationCount: number): FlavorSpotOptions {
        this['largest_spot_duration_count'] = largestSpotDurationCount;
        return this;
    }
    public set largestSpotDurationCount(largestSpotDurationCount: number | undefined) {
        this['largest_spot_duration_count'] = largestSpotDurationCount;
    }
    public get largestSpotDurationCount() {
        return this['largest_spot_duration_count'];
    }
    public withInterruptionPolicy(interruptionPolicy: string): FlavorSpotOptions {
        this['interruption_policy'] = interruptionPolicy;
        return this;
    }
    public set interruptionPolicy(interruptionPolicy: string | undefined) {
        this['interruption_policy'] = interruptionPolicy;
    }
    public get interruptionPolicy() {
        return this['interruption_policy'];
    }
}