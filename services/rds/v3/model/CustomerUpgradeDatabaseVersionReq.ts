

export class CustomerUpgradeDatabaseVersionReq {
    public delay?: boolean;
    public constructor() { 
    }
    public withDelay(delay: boolean): CustomerUpgradeDatabaseVersionReq {
        this['delay'] = delay;
        return this;
    }
}