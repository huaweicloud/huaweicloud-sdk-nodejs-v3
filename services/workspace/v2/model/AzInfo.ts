import { I18n } from './I18n';


export class AzInfo {
    private 'availability_zone'?: string;
    public i18n?: I18n;
    private 'default_availability_zone'?: boolean;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): AzInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withI18n(i18n: I18n): AzInfo {
        this['i18n'] = i18n;
        return this;
    }
    public withDefaultAvailabilityZone(defaultAvailabilityZone: boolean): AzInfo {
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