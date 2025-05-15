import { AreaIdDef } from './AreaIdDef';


export class AreaId {
    private 'area_id'?: AreaIdDef;
    public constructor(areaId?: AreaIdDef) { 
        this['area_id'] = areaId;
    }
    public withAreaId(areaId: AreaIdDef): AreaId {
        this['area_id'] = areaId;
        return this;
    }
    public set areaId(areaId: AreaIdDef  | undefined) {
        this['area_id'] = areaId;
    }
    public get areaId(): AreaIdDef | undefined {
        return this['area_id'];
    }
}