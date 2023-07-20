

export class ListFlavorSellPoliciesRequest {
    private 'flavor_id'?: string;
    private 'sell_status'?: ListFlavorSellPoliciesRequestSellStatusEnum | string;
    private 'sell_mode'?: ListFlavorSellPoliciesRequestSellModeEnum | string;
    private 'availability_zone_id'?: string;
    private 'longest_spot_duration_hours_gt'?: number;
    private 'largest_spot_duration_count_gt'?: number;
    private 'longest_spot_duration_hours'?: number;
    private 'largest_spot_duration_count'?: number;
    private 'interruption_policy'?: ListFlavorSellPoliciesRequestInterruptionPolicyEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withFlavorId(flavorId: string): ListFlavorSellPoliciesRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withSellStatus(sellStatus: ListFlavorSellPoliciesRequestSellStatusEnum | string): ListFlavorSellPoliciesRequest {
        this['sell_status'] = sellStatus;
        return this;
    }
    public set sellStatus(sellStatus: ListFlavorSellPoliciesRequestSellStatusEnum | string  | undefined) {
        this['sell_status'] = sellStatus;
    }
    public get sellStatus(): ListFlavorSellPoliciesRequestSellStatusEnum | string | undefined {
        return this['sell_status'];
    }
    public withSellMode(sellMode: ListFlavorSellPoliciesRequestSellModeEnum | string): ListFlavorSellPoliciesRequest {
        this['sell_mode'] = sellMode;
        return this;
    }
    public set sellMode(sellMode: ListFlavorSellPoliciesRequestSellModeEnum | string  | undefined) {
        this['sell_mode'] = sellMode;
    }
    public get sellMode(): ListFlavorSellPoliciesRequestSellModeEnum | string | undefined {
        return this['sell_mode'];
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListFlavorSellPoliciesRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withLongestSpotDurationHoursGt(longestSpotDurationHoursGt: number): ListFlavorSellPoliciesRequest {
        this['longest_spot_duration_hours_gt'] = longestSpotDurationHoursGt;
        return this;
    }
    public set longestSpotDurationHoursGt(longestSpotDurationHoursGt: number  | undefined) {
        this['longest_spot_duration_hours_gt'] = longestSpotDurationHoursGt;
    }
    public get longestSpotDurationHoursGt(): number | undefined {
        return this['longest_spot_duration_hours_gt'];
    }
    public withLargestSpotDurationCountGt(largestSpotDurationCountGt: number): ListFlavorSellPoliciesRequest {
        this['largest_spot_duration_count_gt'] = largestSpotDurationCountGt;
        return this;
    }
    public set largestSpotDurationCountGt(largestSpotDurationCountGt: number  | undefined) {
        this['largest_spot_duration_count_gt'] = largestSpotDurationCountGt;
    }
    public get largestSpotDurationCountGt(): number | undefined {
        return this['largest_spot_duration_count_gt'];
    }
    public withLongestSpotDurationHours(longestSpotDurationHours: number): ListFlavorSellPoliciesRequest {
        this['longest_spot_duration_hours'] = longestSpotDurationHours;
        return this;
    }
    public set longestSpotDurationHours(longestSpotDurationHours: number  | undefined) {
        this['longest_spot_duration_hours'] = longestSpotDurationHours;
    }
    public get longestSpotDurationHours(): number | undefined {
        return this['longest_spot_duration_hours'];
    }
    public withLargestSpotDurationCount(largestSpotDurationCount: number): ListFlavorSellPoliciesRequest {
        this['largest_spot_duration_count'] = largestSpotDurationCount;
        return this;
    }
    public set largestSpotDurationCount(largestSpotDurationCount: number  | undefined) {
        this['largest_spot_duration_count'] = largestSpotDurationCount;
    }
    public get largestSpotDurationCount(): number | undefined {
        return this['largest_spot_duration_count'];
    }
    public withInterruptionPolicy(interruptionPolicy: ListFlavorSellPoliciesRequestInterruptionPolicyEnum | string): ListFlavorSellPoliciesRequest {
        this['interruption_policy'] = interruptionPolicy;
        return this;
    }
    public set interruptionPolicy(interruptionPolicy: ListFlavorSellPoliciesRequestInterruptionPolicyEnum | string  | undefined) {
        this['interruption_policy'] = interruptionPolicy;
    }
    public get interruptionPolicy(): ListFlavorSellPoliciesRequestInterruptionPolicyEnum | string | undefined {
        return this['interruption_policy'];
    }
    public withLimit(limit: number): ListFlavorSellPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFlavorSellPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlavorSellPoliciesRequestSellStatusEnum {
    AVAILABLE = 'available',
    SELLOUT = 'sellout'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlavorSellPoliciesRequestSellModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid',
    SPOT = 'spot',
    RI = 'ri'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlavorSellPoliciesRequestInterruptionPolicyEnum {
    IMMEDIATE = 'immediate',
    DELAY = 'delay'
}
