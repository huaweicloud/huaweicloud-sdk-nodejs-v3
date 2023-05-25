import { FlavorSpotOptions } from './FlavorSpotOptions';


export class ListFlavorSellPoliciesResult {
    public id: number;
    private 'flavor_id': string | undefined;
    private 'sell_status': string | undefined;
    private 'availability_zone_id': string | undefined;
    private 'sell_mode': string | undefined;
    private 'spot_options'?: FlavorSpotOptions | undefined;
    public constructor(id?: any, flavorId?: any, sellStatus?: any, availabilityZoneId?: any, sellMode?: any) { 
        this['id'] = id;
        this['flavor_id'] = flavorId;
        this['sell_status'] = sellStatus;
        this['availability_zone_id'] = availabilityZoneId;
        this['sell_mode'] = sellMode;
    }
    public withId(id: number): ListFlavorSellPoliciesResult {
        this['id'] = id;
        return this;
    }
    public withFlavorId(flavorId: string): ListFlavorSellPoliciesResult {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId() {
        return this['flavor_id'];
    }
    public withSellStatus(sellStatus: string): ListFlavorSellPoliciesResult {
        this['sell_status'] = sellStatus;
        return this;
    }
    public set sellStatus(sellStatus: string | undefined) {
        this['sell_status'] = sellStatus;
    }
    public get sellStatus() {
        return this['sell_status'];
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListFlavorSellPoliciesResult {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId() {
        return this['availability_zone_id'];
    }
    public withSellMode(sellMode: string): ListFlavorSellPoliciesResult {
        this['sell_mode'] = sellMode;
        return this;
    }
    public set sellMode(sellMode: string | undefined) {
        this['sell_mode'] = sellMode;
    }
    public get sellMode() {
        return this['sell_mode'];
    }
    public withSpotOptions(spotOptions: FlavorSpotOptions): ListFlavorSellPoliciesResult {
        this['spot_options'] = spotOptions;
        return this;
    }
    public set spotOptions(spotOptions: FlavorSpotOptions | undefined) {
        this['spot_options'] = spotOptions;
    }
    public get spotOptions() {
        return this['spot_options'];
    }
}