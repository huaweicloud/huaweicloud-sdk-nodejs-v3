

export class FlavorSpotOptions {
    private 'longest_spot_duration_hours'?: number;
    private 'largest_spot_duration_count'?: number;
    private 'interruption_policy'?: string;
    public constructor() { 
    }
    public withLongestSpotDurationHours(longestSpotDurationHours: number): FlavorSpotOptions {
        this['longest_spot_duration_hours'] = longestSpotDurationHours;
        return this;
    }
    public set longestSpotDurationHours(longestSpotDurationHours: number  | undefined) {
        this['longest_spot_duration_hours'] = longestSpotDurationHours;
    }
    public get longestSpotDurationHours(): number | undefined {
        return this['longest_spot_duration_hours'];
    }
    public withLargestSpotDurationCount(largestSpotDurationCount: number): FlavorSpotOptions {
        this['largest_spot_duration_count'] = largestSpotDurationCount;
        return this;
    }
    public set largestSpotDurationCount(largestSpotDurationCount: number  | undefined) {
        this['largest_spot_duration_count'] = largestSpotDurationCount;
    }
    public get largestSpotDurationCount(): number | undefined {
        return this['largest_spot_duration_count'];
    }
    public withInterruptionPolicy(interruptionPolicy: string): FlavorSpotOptions {
        this['interruption_policy'] = interruptionPolicy;
        return this;
    }
    public set interruptionPolicy(interruptionPolicy: string  | undefined) {
        this['interruption_policy'] = interruptionPolicy;
    }
    public get interruptionPolicy(): string | undefined {
        return this['interruption_policy'];
    }
}