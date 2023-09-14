

export class CustomerUpgradeDatabaseVersionReqNew {
    public delay?: boolean;
    public constructor() { 
    }
    public withDelay(delay: boolean): CustomerUpgradeDatabaseVersionReqNew {
        this['delay'] = delay;
        return this;
    }
}