

export class AddressItemDto {
    public formatted?: string;
    public streetAddress?: string;
    public locality?: string;
    public region?: string;
    public postalCode?: string;
    public country?: string;
    public type?: string;
    public primary?: boolean;
    public constructor() { 
    }
    public withFormatted(formatted: string): AddressItemDto {
        this['formatted'] = formatted;
        return this;
    }
    public withStreetAddress(streetAddress: string): AddressItemDto {
        this['streetAddress'] = streetAddress;
        return this;
    }
    public withLocality(locality: string): AddressItemDto {
        this['locality'] = locality;
        return this;
    }
    public withRegion(region: string): AddressItemDto {
        this['region'] = region;
        return this;
    }
    public withPostalCode(postalCode: string): AddressItemDto {
        this['postalCode'] = postalCode;
        return this;
    }
    public withCountry(country: string): AddressItemDto {
        this['country'] = country;
        return this;
    }
    public withType(type: string): AddressItemDto {
        this['type'] = type;
        return this;
    }
    public withPrimary(primary: boolean): AddressItemDto {
        this['primary'] = primary;
        return this;
    }
}