

export class ImportVulnerabilitiesResponseBodyData {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ImportVulnerabilitiesResponseBodyData {
        this['ids'] = ids;
        return this;
    }
}