

export class ListSpecificationsRequest {
    public action?: string;
    private 'spec_code'?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): ListSpecificationsRequest {
        this['action'] = action;
        return this;
    }
    public withSpecCode(specCode: string): ListSpecificationsRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}