

export class SortDto {
    public supported?: boolean;
    public constructor() { 
    }
    public withSupported(supported: boolean): SortDto {
        this['supported'] = supported;
        return this;
    }
}