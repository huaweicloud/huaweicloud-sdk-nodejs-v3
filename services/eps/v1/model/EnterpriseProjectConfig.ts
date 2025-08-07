

export class EnterpriseProjectConfig {
    private 'delete_ep_support'?: string;
    public constructor() { 
    }
    public withDeleteEpSupport(deleteEpSupport: string): EnterpriseProjectConfig {
        this['delete_ep_support'] = deleteEpSupport;
        return this;
    }
    public set deleteEpSupport(deleteEpSupport: string  | undefined) {
        this['delete_ep_support'] = deleteEpSupport;
    }
    public get deleteEpSupport(): string | undefined {
        return this['delete_ep_support'];
    }
}