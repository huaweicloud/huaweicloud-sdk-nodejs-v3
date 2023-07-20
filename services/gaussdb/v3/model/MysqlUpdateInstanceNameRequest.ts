

export class MysqlUpdateInstanceNameRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): MysqlUpdateInstanceNameRequest {
        this['name'] = name;
        return this;
    }
}