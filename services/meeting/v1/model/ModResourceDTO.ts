

export class ModResourceDTO {
    public id?: string;
    public type?: string;
    public expireDate?: number;
    public isDisabled?: boolean;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ModResourceDTO {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ModResourceDTO {
        this['type'] = type;
        return this;
    }
    public withExpireDate(expireDate: number): ModResourceDTO {
        this['expireDate'] = expireDate;
        return this;
    }
    public withIsDisabled(isDisabled: boolean): ModResourceDTO {
        this['isDisabled'] = isDisabled;
        return this;
    }
}