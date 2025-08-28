

export class TbPosInfo {
    private 'origin_name'?: string;
    public name?: string;
    public start?: number;
    public end?: number;
    public constructor() { 
    }
    public withOriginName(originName: string): TbPosInfo {
        this['origin_name'] = originName;
        return this;
    }
    public set originName(originName: string  | undefined) {
        this['origin_name'] = originName;
    }
    public get originName(): string | undefined {
        return this['origin_name'];
    }
    public withName(name: string): TbPosInfo {
        this['name'] = name;
        return this;
    }
    public withStart(start: number): TbPosInfo {
        this['start'] = start;
        return this;
    }
    public withEnd(end: number): TbPosInfo {
        this['end'] = end;
        return this;
    }
}