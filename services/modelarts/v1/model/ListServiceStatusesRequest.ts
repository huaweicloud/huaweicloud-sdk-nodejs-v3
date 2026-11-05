

export class ListServiceStatusesRequest {
    private 'service_codes'?: string;
    public constructor(serviceCodes?: string) { 
        this['service_codes'] = serviceCodes;
    }
    public withServiceCodes(serviceCodes: string): ListServiceStatusesRequest {
        this['service_codes'] = serviceCodes;
        return this;
    }
    public set serviceCodes(serviceCodes: string  | undefined) {
        this['service_codes'] = serviceCodes;
    }
    public get serviceCodes(): string | undefined {
        return this['service_codes'];
    }
}