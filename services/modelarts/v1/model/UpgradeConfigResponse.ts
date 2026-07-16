import { RollingUpdateResponse } from './RollingUpdateResponse';


export class UpgradeConfigResponse {
    public type?: string;
    private 'rolling_update'?: RollingUpdateResponse;
    public constructor() { 
    }
    public withType(type: string): UpgradeConfigResponse {
        this['type'] = type;
        return this;
    }
    public withRollingUpdate(rollingUpdate: RollingUpdateResponse): UpgradeConfigResponse {
        this['rolling_update'] = rollingUpdate;
        return this;
    }
    public set rollingUpdate(rollingUpdate: RollingUpdateResponse  | undefined) {
        this['rolling_update'] = rollingUpdate;
    }
    public get rollingUpdate(): RollingUpdateResponse | undefined {
        return this['rolling_update'];
    }
}