

export class PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions {
    private 'hid_redirection_customization_policy'?: string;
    public constructor() { 
    }
    public withHidRedirectionCustomizationPolicy(hidRedirectionCustomizationPolicy: string): PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions {
        this['hid_redirection_customization_policy'] = hidRedirectionCustomizationPolicy;
        return this;
    }
    public set hidRedirectionCustomizationPolicy(hidRedirectionCustomizationPolicy: string  | undefined) {
        this['hid_redirection_customization_policy'] = hidRedirectionCustomizationPolicy;
    }
    public get hidRedirectionCustomizationPolicy(): string | undefined {
        return this['hid_redirection_customization_policy'];
    }
}