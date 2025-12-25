

export class WizardUpdateRequestPojoBindingButton {
    private 'button_id'?: string;
    private 'button_name'?: string;
    public constructor(buttonId?: string) { 
        this['button_id'] = buttonId;
    }
    public withButtonId(buttonId: string): WizardUpdateRequestPojoBindingButton {
        this['button_id'] = buttonId;
        return this;
    }
    public set buttonId(buttonId: string  | undefined) {
        this['button_id'] = buttonId;
    }
    public get buttonId(): string | undefined {
        return this['button_id'];
    }
    public withButtonName(buttonName: string): WizardUpdateRequestPojoBindingButton {
        this['button_name'] = buttonName;
        return this;
    }
    public set buttonName(buttonName: string  | undefined) {
        this['button_name'] = buttonName;
    }
    public get buttonName(): string | undefined {
        return this['button_name'];
    }
}