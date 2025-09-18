import { LocalAreaIdDef } from './LocalAreaIdDef';


export class LocalAreaId {
    private 'local_area_id'?: LocalAreaIdDef;
    public constructor(localAreaId?: LocalAreaIdDef) { 
        this['local_area_id'] = localAreaId;
    }
    public withLocalAreaId(localAreaId: LocalAreaIdDef): LocalAreaId {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: LocalAreaIdDef  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): LocalAreaIdDef | undefined {
        return this['local_area_id'];
    }
}