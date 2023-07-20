

export class MongoUpdateReplSetV3RequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): MongoUpdateReplSetV3RequestBody {
        this['name'] = name;
        return this;
    }
}