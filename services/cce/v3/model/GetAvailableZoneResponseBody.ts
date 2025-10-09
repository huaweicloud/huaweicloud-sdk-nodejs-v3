

export class GetAvailableZoneResponseBody {
    public id?: string;
    public name?: string;
    public displayName?: string;
    public azGroupIds?: Array<string>;
    private 'PublicBorderGroup'?: string;
    public category?: GetAvailableZoneResponseBodyCategoryEnum | string;
    public alias?: string;
    public constructor() { 
    }
    public withId(id: string): GetAvailableZoneResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetAvailableZoneResponseBody {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): GetAvailableZoneResponseBody {
        this['displayName'] = displayName;
        return this;
    }
    public withAzGroupIds(azGroupIds: Array<string>): GetAvailableZoneResponseBody {
        this['azGroupIds'] = azGroupIds;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): GetAvailableZoneResponseBody {
        this['PublicBorderGroup'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['PublicBorderGroup'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['PublicBorderGroup'];
    }
    public withCategory(category: GetAvailableZoneResponseBodyCategoryEnum | string): GetAvailableZoneResponseBody {
        this['category'] = category;
        return this;
    }
    public withAlias(alias: string): GetAvailableZoneResponseBody {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetAvailableZoneResponseBodyCategoryEnum {
    DEFAULT = 'Default',
    IES = 'IES',
    HOMEZONE = 'HomeZone'
}
