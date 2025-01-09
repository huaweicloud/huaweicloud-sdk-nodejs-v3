import { SoldOutInfo } from './SoldOutInfo';


export class AvailabilityZone {
    private 'availability_zone'?: string;
    private 'display_name'?: string;
    public i18n?: { [key: string]: string; };
    private 'sold_out'?: SoldOutInfo;
    private 'product_ids'?: Array<string>;
    public visible?: boolean;
    private 'default_availability_zone'?: boolean;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): AvailabilityZone {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDisplayName(displayName: string): AvailabilityZone {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withI18n(i18n: { [key: string]: string; }): AvailabilityZone {
        this['i18n'] = i18n;
        return this;
    }
    public withSoldOut(soldOut: SoldOutInfo): AvailabilityZone {
        this['sold_out'] = soldOut;
        return this;
    }
    public set soldOut(soldOut: SoldOutInfo  | undefined) {
        this['sold_out'] = soldOut;
    }
    public get soldOut(): SoldOutInfo | undefined {
        return this['sold_out'];
    }
    public withProductIds(productIds: Array<string>): AvailabilityZone {
        this['product_ids'] = productIds;
        return this;
    }
    public set productIds(productIds: Array<string>  | undefined) {
        this['product_ids'] = productIds;
    }
    public get productIds(): Array<string> | undefined {
        return this['product_ids'];
    }
    public withVisible(visible: boolean): AvailabilityZone {
        this['visible'] = visible;
        return this;
    }
    public withDefaultAvailabilityZone(defaultAvailabilityZone: boolean): AvailabilityZone {
        this['default_availability_zone'] = defaultAvailabilityZone;
        return this;
    }
    public set defaultAvailabilityZone(defaultAvailabilityZone: boolean  | undefined) {
        this['default_availability_zone'] = defaultAvailabilityZone;
    }
    public get defaultAvailabilityZone(): boolean | undefined {
        return this['default_availability_zone'];
    }
}