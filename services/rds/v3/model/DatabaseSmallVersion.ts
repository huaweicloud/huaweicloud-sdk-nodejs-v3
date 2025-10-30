

export class DatabaseSmallVersion {
    public id?: string;
    public name?: string;
    public favored?: boolean;
    public constructor(id?: string, name?: string, favored?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['favored'] = favored;
    }
    public withId(id: string): DatabaseSmallVersion {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DatabaseSmallVersion {
        this['name'] = name;
        return this;
    }
    public withFavored(favored: boolean): DatabaseSmallVersion {
        this['favored'] = favored;
        return this;
    }
}