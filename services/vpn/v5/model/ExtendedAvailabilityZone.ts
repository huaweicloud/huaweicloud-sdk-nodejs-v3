import { AvailableSpec } from './AvailableSpec';


export class ExtendedAvailabilityZone {
    public name?: string;
    private 'public_border_group'?: string;
    private 'available_specs'?: Array<AvailableSpec>;
    public constructor() { 
    }
    public withName(name: string): ExtendedAvailabilityZone {
        this['name'] = name;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ExtendedAvailabilityZone {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withAvailableSpecs(availableSpecs: Array<AvailableSpec>): ExtendedAvailabilityZone {
        this['available_specs'] = availableSpecs;
        return this;
    }
    public set availableSpecs(availableSpecs: Array<AvailableSpec>  | undefined) {
        this['available_specs'] = availableSpecs;
    }
    public get availableSpecs(): Array<AvailableSpec> | undefined {
        return this['available_specs'];
    }
}