

export class Branch {
    private 'is_protected'?: boolean;
    public name?: string;
    public constructor() { 
    }
    public withIsProtected(isProtected: boolean): Branch {
        this['is_protected'] = isProtected;
        return this;
    }
    public set isProtected(isProtected: boolean  | undefined) {
        this['is_protected'] = isProtected;
    }
    public get isProtected(): boolean | undefined {
        return this['is_protected'];
    }
    public withName(name: string): Branch {
        this['name'] = name;
        return this;
    }
}