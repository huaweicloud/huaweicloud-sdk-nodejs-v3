

export class ImportIndicatorsResponseBodyData {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ImportIndicatorsResponseBodyData {
        this['ids'] = ids;
        return this;
    }
}