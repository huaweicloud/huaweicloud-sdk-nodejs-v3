

export class PatchDto {
    public supported?: boolean;
    public constructor() { 
    }
    public withSupported(supported: boolean): PatchDto {
        this['supported'] = supported;
        return this;
    }
}