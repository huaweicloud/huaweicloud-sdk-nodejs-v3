

export class DelayRestoreTable {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DelayRestoreTable {
        this['name'] = name;
        return this;
    }
}