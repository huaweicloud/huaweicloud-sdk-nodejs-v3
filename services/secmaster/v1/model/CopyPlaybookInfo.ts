

export class CopyPlaybookInfo {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): CopyPlaybookInfo {
        this['name'] = name;
        return this;
    }
}