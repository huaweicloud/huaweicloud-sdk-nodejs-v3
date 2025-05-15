import { AreaId } from './AreaId';
import { AreaIdDef } from './AreaIdDef';
import { Name } from './Name';


export class Region {
    public name?: string;
    private 'area_id'?: AreaIdDef;
    public id?: string;
    private 'area_name'?: string;
    private 'used_scenes'?: Array<RegionUsedScenesEnum> | Array<string>;
    public constructor(name?: string, areaId?: AreaIdDef) { 
        this['name'] = name;
        this['area_id'] = areaId;
    }
    public withName(name: string): Region {
        this['name'] = name;
        return this;
    }
    public withAreaId(areaId: AreaIdDef): Region {
        this['area_id'] = areaId;
        return this;
    }
    public set areaId(areaId: AreaIdDef  | undefined) {
        this['area_id'] = areaId;
    }
    public get areaId(): AreaIdDef | undefined {
        return this['area_id'];
    }
    public withId(id: string): Region {
        this['id'] = id;
        return this;
    }
    public withAreaName(areaName: string): Region {
        this['area_name'] = areaName;
        return this;
    }
    public set areaName(areaName: string  | undefined) {
        this['area_name'] = areaName;
    }
    public get areaName(): string | undefined {
        return this['area_name'];
    }
    public withUsedScenes(usedScenes: Array<RegionUsedScenesEnum> | Array<string>): Region {
        this['used_scenes'] = usedScenes;
        return this;
    }
    public set usedScenes(usedScenes: Array<RegionUsedScenesEnum> | Array<string>  | undefined) {
        this['used_scenes'] = usedScenes;
    }
    public get usedScenes(): Array<RegionUsedScenesEnum> | Array<string> | undefined {
        return this['used_scenes'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegionUsedScenesEnum {
    ER = 'er',
    VPC = 'vpc',
    VGW = 'vgw'
}
