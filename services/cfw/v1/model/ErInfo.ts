

export class ErInfo {
    private 'er_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withErId(erId: string): ErInfo {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withName(name: string): ErInfo {
        this['name'] = name;
        return this;
    }
}