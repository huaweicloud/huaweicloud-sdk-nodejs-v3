

export class TemplateSpotOptions {
    private 'spot_price'?: number;
    private 'block_duration_minutes'?: number;
    private 'instance_interruption_behavior'?: string;
    public constructor() { 
    }
    public withSpotPrice(spotPrice: number): TemplateSpotOptions {
        this['spot_price'] = spotPrice;
        return this;
    }
    public set spotPrice(spotPrice: number  | undefined) {
        this['spot_price'] = spotPrice;
    }
    public get spotPrice(): number | undefined {
        return this['spot_price'];
    }
    public withBlockDurationMinutes(blockDurationMinutes: number): TemplateSpotOptions {
        this['block_duration_minutes'] = blockDurationMinutes;
        return this;
    }
    public set blockDurationMinutes(blockDurationMinutes: number  | undefined) {
        this['block_duration_minutes'] = blockDurationMinutes;
    }
    public get blockDurationMinutes(): number | undefined {
        return this['block_duration_minutes'];
    }
    public withInstanceInterruptionBehavior(instanceInterruptionBehavior: string): TemplateSpotOptions {
        this['instance_interruption_behavior'] = instanceInterruptionBehavior;
        return this;
    }
    public set instanceInterruptionBehavior(instanceInterruptionBehavior: string  | undefined) {
        this['instance_interruption_behavior'] = instanceInterruptionBehavior;
    }
    public get instanceInterruptionBehavior(): string | undefined {
        return this['instance_interruption_behavior'];
    }
}