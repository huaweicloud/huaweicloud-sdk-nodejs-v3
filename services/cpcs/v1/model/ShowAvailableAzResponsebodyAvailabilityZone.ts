import { ShowAvailableAzResponsebodyLocales } from './ShowAvailableAzResponsebodyLocales';


export class ShowAvailableAzResponsebodyAvailabilityZone {
    public id?: string;
    private 'display_name'?: string;
    public locales?: ShowAvailableAzResponsebodyLocales;
    public type?: string;
    private 'region_id'?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): ShowAvailableAzResponsebodyAvailabilityZone {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): ShowAvailableAzResponsebodyAvailabilityZone {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withLocales(locales: ShowAvailableAzResponsebodyLocales): ShowAvailableAzResponsebodyAvailabilityZone {
        this['locales'] = locales;
        return this;
    }
    public withType(type: string): ShowAvailableAzResponsebodyAvailabilityZone {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): ShowAvailableAzResponsebodyAvailabilityZone {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withStatus(status: string): ShowAvailableAzResponsebodyAvailabilityZone {
        this['status'] = status;
        return this;
    }
}