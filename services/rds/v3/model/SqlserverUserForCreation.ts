

export class SqlserverUserForCreation {
    public name?: string;
    public password?: string;
    private 'instance_readonly'?: boolean;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): SqlserverUserForCreation {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): SqlserverUserForCreation {
        this['password'] = password;
        return this;
    }
    public withInstanceReadonly(instanceReadonly: boolean): SqlserverUserForCreation {
        this['instance_readonly'] = instanceReadonly;
        return this;
    }
    public set instanceReadonly(instanceReadonly: boolean  | undefined) {
        this['instance_readonly'] = instanceReadonly;
    }
    public get instanceReadonly(): boolean | undefined {
        return this['instance_readonly'];
    }
}