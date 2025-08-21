import { CesDimsItemDisplayId } from './CesDimsItemDisplayId';


export class CesDimsItemDisplay {
    public id?: CesDimsItemDisplayId;
    public constructor(id?: CesDimsItemDisplayId) { 
        this['id'] = id;
    }
    public withId(id: CesDimsItemDisplayId): CesDimsItemDisplay {
        this['id'] = id;
        return this;
    }
}