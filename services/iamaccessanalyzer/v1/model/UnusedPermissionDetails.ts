import { UnusedAction } from './UnusedAction';


export class UnusedPermissionDetails {
    public service?: string;
    public actions?: Array<UnusedAction>;
    public constructor(service?: string, actions?: Array<UnusedAction>) { 
        this['service'] = service;
        this['actions'] = actions;
    }
    public withService(service: string): UnusedPermissionDetails {
        this['service'] = service;
        return this;
    }
    public withActions(actions: Array<UnusedAction>): UnusedPermissionDetails {
        this['actions'] = actions;
        return this;
    }
}