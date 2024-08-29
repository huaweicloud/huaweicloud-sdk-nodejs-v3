

export class RetypeVolume {
    private 'new_type'?: string;
    public constructor(newType?: string) { 
        this['new_type'] = newType;
    }
    public withNewType(newType: string): RetypeVolume {
        this['new_type'] = newType;
        return this;
    }
    public set newType(newType: string  | undefined) {
        this['new_type'] = newType;
    }
    public get newType(): string | undefined {
        return this['new_type'];
    }
}