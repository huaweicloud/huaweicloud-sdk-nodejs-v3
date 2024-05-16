

export class HtapInstanceListAvailableZones {
    public code?: string;
    public description?: string;
    private 'az_type'?: string;
    public constructor() { 
    }
    public withCode(code: string): HtapInstanceListAvailableZones {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): HtapInstanceListAvailableZones {
        this['description'] = description;
        return this;
    }
    public withAzType(azType: string): HtapInstanceListAvailableZones {
        this['az_type'] = azType;
        return this;
    }
    public set azType(azType: string  | undefined) {
        this['az_type'] = azType;
    }
    public get azType(): string | undefined {
        return this['az_type'];
    }
}