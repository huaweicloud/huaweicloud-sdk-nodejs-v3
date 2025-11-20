import { UnusedAction } from './UnusedAction';


export class UnusedPermissionDetails {
    public service?: string;
    private 'last_accessed'?: Date;
    public actions?: Array<UnusedAction>;
    public constructor(service?: string, actions?: Array<UnusedAction>) { 
        this['service'] = service;
        this['actions'] = actions;
    }
    public withService(service: string): UnusedPermissionDetails {
        this['service'] = service;
        return this;
    }
    public withLastAccessed(lastAccessed: Date): UnusedPermissionDetails {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: Date  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): Date | undefined {
        return this['last_accessed'];
    }
    public withActions(actions: Array<UnusedAction>): UnusedPermissionDetails {
        this['actions'] = actions;
        return this;
    }
}