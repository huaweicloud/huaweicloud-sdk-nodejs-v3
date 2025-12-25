

export class ImportIncidentsResponseBodyData {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ImportIncidentsResponseBodyData {
        this['ids'] = ids;
        return this;
    }
}