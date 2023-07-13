

export class ResourceDTO {
    public id?: string;
    public type: string;
    public typeId?: string;
    public count: number;
    public expireDate: number;
    public constructor(type?: any, count?: any, expireDate?: any) { 
        this['type'] = type;
        this['count'] = count;
        this['expireDate'] = expireDate;
    }
    public withId(id: string): ResourceDTO {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ResourceDTO {
        this['type'] = type;
        return this;
    }
    public withTypeId(typeId: string): ResourceDTO {
        this['typeId'] = typeId;
        return this;
    }
    public withCount(count: number): ResourceDTO {
        this['count'] = count;
        return this;
    }
    public withExpireDate(expireDate: number): ResourceDTO {
        this['expireDate'] = expireDate;
        return this;
    }
}