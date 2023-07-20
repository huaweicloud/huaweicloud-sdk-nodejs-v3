

export class UpgradeDatabaseRequest {
    public delay?: boolean;
    public constructor() { 
    }
    public withDelay(delay: boolean): UpgradeDatabaseRequest {
        this['delay'] = delay;
        return this;
    }
}