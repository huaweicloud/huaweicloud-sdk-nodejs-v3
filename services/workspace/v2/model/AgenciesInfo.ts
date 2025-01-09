import { AgenciesPermissionInfo } from './AgenciesPermissionInfo';


export class AgenciesInfo {
    public name?: string;
    public permissions?: Array<AgenciesPermissionInfo>;
    public constructor() { 
    }
    public withName(name: string): AgenciesInfo {
        this['name'] = name;
        return this;
    }
    public withPermissions(permissions: Array<AgenciesPermissionInfo>): AgenciesInfo {
        this['permissions'] = permissions;
        return this;
    }
}