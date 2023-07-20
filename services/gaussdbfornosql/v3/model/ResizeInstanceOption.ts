

export class ResizeInstanceOption {
    private 'target_spec_code'?: string;
    public constructor(targetSpecCode?: string) { 
        this['target_spec_code'] = targetSpecCode;
    }
    public withTargetSpecCode(targetSpecCode: string): ResizeInstanceOption {
        this['target_spec_code'] = targetSpecCode;
        return this;
    }
    public set targetSpecCode(targetSpecCode: string  | undefined) {
        this['target_spec_code'] = targetSpecCode;
    }
    public get targetSpecCode(): string | undefined {
        return this['target_spec_code'];
    }
}