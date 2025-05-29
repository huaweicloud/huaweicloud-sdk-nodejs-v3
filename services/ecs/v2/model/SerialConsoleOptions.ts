

export class SerialConsoleOptions {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): SerialConsoleOptions {
        this['enabled'] = enabled;
        return this;
    }
}