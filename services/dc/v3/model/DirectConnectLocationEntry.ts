import { AddressBody } from './AddressBody';
import { LocalesBody } from './LocalesBody';
import { ProviderResponseBody } from './ProviderResponseBody';


export class DirectConnectLocationEntry {
    public id?: string;
    public name?: string;
    private 'region_id'?: string;
    private 'site_code'?: string;
    public address?: AddressBody;
    public locales?: LocalesBody;
    private 'provider_list'?: Array<ProviderResponseBody>;
    private 'public_border_group'?: string;
    public latitude?: string;
    public longitude?: string;
    public description?: string;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    private 'available_port_speeds'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): DirectConnectLocationEntry {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DirectConnectLocationEntry {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): DirectConnectLocationEntry {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSiteCode(siteCode: string): DirectConnectLocationEntry {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withAddress(address: AddressBody): DirectConnectLocationEntry {
        this['address'] = address;
        return this;
    }
    public withLocales(locales: LocalesBody): DirectConnectLocationEntry {
        this['locales'] = locales;
        return this;
    }
    public withProviderList(providerList: Array<ProviderResponseBody>): DirectConnectLocationEntry {
        this['provider_list'] = providerList;
        return this;
    }
    public set providerList(providerList: Array<ProviderResponseBody>  | undefined) {
        this['provider_list'] = providerList;
    }
    public get providerList(): Array<ProviderResponseBody> | undefined {
        return this['provider_list'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): DirectConnectLocationEntry {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withLatitude(latitude: string): DirectConnectLocationEntry {
        this['latitude'] = latitude;
        return this;
    }
    public withLongitude(longitude: string): DirectConnectLocationEntry {
        this['longitude'] = longitude;
        return this;
    }
    public withDescription(description: string): DirectConnectLocationEntry {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: Date): DirectConnectLocationEntry {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): DirectConnectLocationEntry {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: Date  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): Date | undefined {
        return this['updated_time'];
    }
    public withAvailablePortSpeeds(availablePortSpeeds: Array<string>): DirectConnectLocationEntry {
        this['available_port_speeds'] = availablePortSpeeds;
        return this;
    }
    public set availablePortSpeeds(availablePortSpeeds: Array<string>  | undefined) {
        this['available_port_speeds'] = availablePortSpeeds;
    }
    public get availablePortSpeeds(): Array<string> | undefined {
        return this['available_port_speeds'];
    }
}