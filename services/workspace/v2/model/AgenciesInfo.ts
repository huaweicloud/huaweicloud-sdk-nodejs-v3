import { AgenciesPermissionInfo } from './AgenciesPermissionInfo';


export class AgenciesInfo {
    public name?: string;
    public id?: string;
    public scene?: string;
    public permissions?: Array<AgenciesPermissionInfo>;
    public constructor() { 
    }
    public withName(name: string): AgenciesInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgenciesInfo {
        this['id'] = id;
        return this;
    }
    public withScene(scene: string): AgenciesInfo {
        this['scene'] = scene;
        return this;
    }
    public withPermissions(permissions: Array<AgenciesPermissionInfo>): AgenciesInfo {
        this['permissions'] = permissions;
        return this;
    }
}