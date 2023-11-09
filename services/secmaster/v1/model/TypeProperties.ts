

export class TypeProperties {
    public killchain?: string;
    public ttps?: string;
    public effects?: string;
    public constructor() { 
    }
    public withKillchain(killchain: string): TypeProperties {
        this['killchain'] = killchain;
        return this;
    }
    public withTtps(ttps: string): TypeProperties {
        this['ttps'] = ttps;
        return this;
    }
    public withEffects(effects: string): TypeProperties {
        this['effects'] = effects;
        return this;
    }
}