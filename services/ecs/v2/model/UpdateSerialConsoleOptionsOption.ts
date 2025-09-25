

export class UpdateSerialConsoleOptionsOption {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): UpdateSerialConsoleOptionsOption {
        this['enabled'] = enabled;
        return this;
    }
}