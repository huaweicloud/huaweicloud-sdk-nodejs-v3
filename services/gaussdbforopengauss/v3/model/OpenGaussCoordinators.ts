

export class OpenGaussCoordinators {
    private 'az_code'?: string;
    public constructor(azCode?: string) { 
        this['az_code'] = azCode;
    }
    public withAzCode(azCode: string): OpenGaussCoordinators {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
}