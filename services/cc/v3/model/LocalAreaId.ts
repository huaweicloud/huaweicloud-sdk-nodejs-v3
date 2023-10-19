import { AreaIdDef } from './AreaIdDef';


export class LocalAreaId {
    private 'local_area_id'?: AreaIdDef;
    public constructor(localAreaId?: AreaIdDef) { 
        this['local_area_id'] = localAreaId;
    }
    public withLocalAreaId(localAreaId: AreaIdDef): LocalAreaId {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: AreaIdDef  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): AreaIdDef | undefined {
        return this['local_area_id'];
    }
}