

export class PoliciesPeripheralsDriverInterfaceRedirection {
    private 'api_redir_driver_list'?: string;
    public constructor() { 
    }
    public withApiRedirDriverList(apiRedirDriverList: string): PoliciesPeripheralsDriverInterfaceRedirection {
        this['api_redir_driver_list'] = apiRedirDriverList;
        return this;
    }
    public set apiRedirDriverList(apiRedirDriverList: string  | undefined) {
        this['api_redir_driver_list'] = apiRedirDriverList;
    }
    public get apiRedirDriverList(): string | undefined {
        return this['api_redir_driver_list'];
    }
}