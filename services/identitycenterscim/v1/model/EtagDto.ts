

export class EtagDto {
    public supported?: boolean;
    public constructor() { 
    }
    public withSupported(supported: boolean): EtagDto {
        this['supported'] = supported;
        return this;
    }
}