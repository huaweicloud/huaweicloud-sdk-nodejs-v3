import { IpExtraSetOption } from './IpExtraSetOption';


export class UpdateAddressGroupOption {
    public name?: string;
    public description?: string;
    private 'ip_set'?: Array<string>;
    private 'max_capacity'?: number;
    private 'ip_extra_set'?: Array<IpExtraSetOption>;
    public constructor() { 
    }
    public withName(name: string): UpdateAddressGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAddressGroupOption {
        this['description'] = description;
        return this;
    }
    public withIpSet(ipSet: Array<string>): UpdateAddressGroupOption {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string>  | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet(): Array<string> | undefined {
        return this['ip_set'];
    }
    public withMaxCapacity(maxCapacity: number): UpdateAddressGroupOption {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
    public withIpExtraSet(ipExtraSet: Array<IpExtraSetOption>): UpdateAddressGroupOption {
        this['ip_extra_set'] = ipExtraSet;
        return this;
    }
    public set ipExtraSet(ipExtraSet: Array<IpExtraSetOption>  | undefined) {
        this['ip_extra_set'] = ipExtraSet;
    }
    public get ipExtraSet(): Array<IpExtraSetOption> | undefined {
        return this['ip_extra_set'];
    }
}