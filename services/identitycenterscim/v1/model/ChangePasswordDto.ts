

export class ChangePasswordDto {
    public supported?: boolean;
    public constructor() { 
    }
    public withSupported(supported: boolean): ChangePasswordDto {
        this['supported'] = supported;
        return this;
    }
}