

export class TemplateListRO {
    public ids?: Array<number>;
    public constructor() { 
    }
    public withIds(ids: Array<number>): TemplateListRO {
        this['ids'] = ids;
        return this;
    }
}