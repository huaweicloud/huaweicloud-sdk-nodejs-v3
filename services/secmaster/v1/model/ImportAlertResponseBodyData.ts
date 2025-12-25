

export class ImportAlertResponseBodyData {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ImportAlertResponseBodyData {
        this['ids'] = ids;
        return this;
    }
}