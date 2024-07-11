

export class CheckCanCreateResponseBodyResult {
    public creatable?: boolean;
    public constructor() { 
    }
    public withCreatable(creatable: boolean): CheckCanCreateResponseBodyResult {
        this['creatable'] = creatable;
        return this;
    }
}