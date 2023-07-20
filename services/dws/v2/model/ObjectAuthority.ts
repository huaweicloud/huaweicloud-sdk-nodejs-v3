import { RoleAuthority } from './RoleAuthority';


export class ObjectAuthority {
    public name?: string;
    private 'role_authority'?: Array<RoleAuthority>;
    public constructor() { 
    }
    public withName(name: string): ObjectAuthority {
        this['name'] = name;
        return this;
    }
    public withRoleAuthority(roleAuthority: Array<RoleAuthority>): ObjectAuthority {
        this['role_authority'] = roleAuthority;
        return this;
    }
    public set roleAuthority(roleAuthority: Array<RoleAuthority>  | undefined) {
        this['role_authority'] = roleAuthority;
    }
    public get roleAuthority(): Array<RoleAuthority> | undefined {
        return this['role_authority'];
    }
}