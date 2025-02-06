

export class AddressDto {
    public country?: string;
    public formatted?: string;
    public locality?: string;
    private 'postal_code'?: string;
    public primary?: boolean;
    public region?: string;
    private 'street_address'?: string;
    public type?: string;
    public constructor() { 
    }
    public withCountry(country: string): AddressDto {
        this['country'] = country;
        return this;
    }
    public withFormatted(formatted: string): AddressDto {
        this['formatted'] = formatted;
        return this;
    }
    public withLocality(locality: string): AddressDto {
        this['locality'] = locality;
        return this;
    }
    public withPostalCode(postalCode: string): AddressDto {
        this['postal_code'] = postalCode;
        return this;
    }
    public set postalCode(postalCode: string  | undefined) {
        this['postal_code'] = postalCode;
    }
    public get postalCode(): string | undefined {
        return this['postal_code'];
    }
    public withPrimary(primary: boolean): AddressDto {
        this['primary'] = primary;
        return this;
    }
    public withRegion(region: string): AddressDto {
        this['region'] = region;
        return this;
    }
    public withStreetAddress(streetAddress: string): AddressDto {
        this['street_address'] = streetAddress;
        return this;
    }
    public set streetAddress(streetAddress: string  | undefined) {
        this['street_address'] = streetAddress;
    }
    public get streetAddress(): string | undefined {
        return this['street_address'];
    }
    public withType(type: string): AddressDto {
        this['type'] = type;
        return this;
    }
}