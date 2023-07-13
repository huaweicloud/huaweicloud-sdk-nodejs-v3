import { LinksSelf } from './LinksSelf';
import { RegionLocales } from './RegionLocales';


export class Region {
    public description: string;
    private 'parent_region_id': string | undefined;
    public links: LinksSelf;
    public locales: RegionLocales;
    public id: string;
    public type: string;
    public constructor(description?: any, parentRegionId?: any, links?: any, locales?: any, id?: any, type?: any) { 
        this['description'] = description;
        this['parent_region_id'] = parentRegionId;
        this['links'] = links;
        this['locales'] = locales;
        this['id'] = id;
        this['type'] = type;
    }
    public withDescription(description: string): Region {
        this['description'] = description;
        return this;
    }
    public withParentRegionId(parentRegionId: string): Region {
        this['parent_region_id'] = parentRegionId;
        return this;
    }
    public set parentRegionId(parentRegionId: string | undefined) {
        this['parent_region_id'] = parentRegionId;
    }
    public get parentRegionId() {
        return this['parent_region_id'];
    }
    public withLinks(links: LinksSelf): Region {
        this['links'] = links;
        return this;
    }
    public withLocales(locales: RegionLocales): Region {
        this['locales'] = locales;
        return this;
    }
    public withId(id: string): Region {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Region {
        this['type'] = type;
        return this;
    }
}