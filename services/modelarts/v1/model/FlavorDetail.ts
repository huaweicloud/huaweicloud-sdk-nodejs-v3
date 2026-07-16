import { BillingInfo } from './BillingInfo';
import { FlavorInfo } from './FlavorInfo';


export class FlavorDetail {
    private 'flavor_type'?: string;
    public billing?: BillingInfo;
    private 'flavor_info'?: FlavorInfo;
    public constructor() { 
    }
    public withFlavorType(flavorType: string): FlavorDetail {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withBilling(billing: BillingInfo): FlavorDetail {
        this['billing'] = billing;
        return this;
    }
    public withFlavorInfo(flavorInfo: FlavorInfo): FlavorDetail {
        this['flavor_info'] = flavorInfo;
        return this;
    }
    public set flavorInfo(flavorInfo: FlavorInfo  | undefined) {
        this['flavor_info'] = flavorInfo;
    }
    public get flavorInfo(): FlavorInfo | undefined {
        return this['flavor_info'];
    }
}