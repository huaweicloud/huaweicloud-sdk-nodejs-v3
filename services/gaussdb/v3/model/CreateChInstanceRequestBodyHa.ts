

export class CreateChInstanceRequestBodyHa {
    public mode?: string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: string): CreateChInstanceRequestBodyHa {
        this['mode'] = mode;
        return this;
    }
}