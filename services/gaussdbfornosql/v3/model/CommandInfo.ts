

export class CommandInfo {
    private 'origin_name'?: string;
    public name?: string;
    public constructor(originName?: string, name?: string) { 
        this['origin_name'] = originName;
        this['name'] = name;
    }
    public withOriginName(originName: string): CommandInfo {
        this['origin_name'] = originName;
        return this;
    }
    public set originName(originName: string  | undefined) {
        this['origin_name'] = originName;
    }
    public get originName(): string | undefined {
        return this['origin_name'];
    }
    public withName(name: string): CommandInfo {
        this['name'] = name;
        return this;
    }
}