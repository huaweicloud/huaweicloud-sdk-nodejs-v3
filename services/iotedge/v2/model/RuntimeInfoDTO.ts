

export class RuntimeInfoDTO {
    private 'enable_tpm'?: boolean;
    public constructor() { 
    }
    public withEnableTpm(enableTpm: boolean): RuntimeInfoDTO {
        this['enable_tpm'] = enableTpm;
        return this;
    }
    public set enableTpm(enableTpm: boolean  | undefined) {
        this['enable_tpm'] = enableTpm;
    }
    public get enableTpm(): boolean | undefined {
        return this['enable_tpm'];
    }
}