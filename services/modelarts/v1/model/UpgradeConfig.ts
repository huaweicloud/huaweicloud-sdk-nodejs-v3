import { RollingUpdate } from './RollingUpdate';


export class UpgradeConfig {
    public type?: string;
    private 'rolling_update'?: RollingUpdate;
    public constructor() { 
    }
    public withType(type: string): UpgradeConfig {
        this['type'] = type;
        return this;
    }
    public withRollingUpdate(rollingUpdate: RollingUpdate): UpgradeConfig {
        this['rolling_update'] = rollingUpdate;
        return this;
    }
    public set rollingUpdate(rollingUpdate: RollingUpdate  | undefined) {
        this['rolling_update'] = rollingUpdate;
    }
    public get rollingUpdate(): RollingUpdate | undefined {
        return this['rolling_update'];
    }
}