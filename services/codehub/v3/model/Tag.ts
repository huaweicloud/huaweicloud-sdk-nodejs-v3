

export class Tag {
    private 'is_double_name'?: boolean;
    public name?: string;
    public constructor() { 
    }
    public withIsDoubleName(isDoubleName: boolean): Tag {
        this['is_double_name'] = isDoubleName;
        return this;
    }
    public set isDoubleName(isDoubleName: boolean  | undefined) {
        this['is_double_name'] = isDoubleName;
    }
    public get isDoubleName(): boolean | undefined {
        return this['is_double_name'];
    }
    public withName(name: string): Tag {
        this['name'] = name;
        return this;
    }
}