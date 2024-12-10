import { GrantUserInfo } from './GrantUserInfo';


export class GrantDTO {
    public id?: string;
    public name?: string;
    public type?: string;
    private 'grantee_user'?: Array<GrantUserInfo>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor(id?: string, granteeUser?: Array<GrantUserInfo>, createTime?: number) { 
        this['id'] = id;
        this['grantee_user'] = granteeUser;
        this['create_time'] = createTime;
    }
    public withId(id: string): GrantDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GrantDTO {
        this['name'] = name;
        return this;
    }
    public withType(type: string): GrantDTO {
        this['type'] = type;
        return this;
    }
    public withGranteeUser(granteeUser: Array<GrantUserInfo>): GrantDTO {
        this['grantee_user'] = granteeUser;
        return this;
    }
    public set granteeUser(granteeUser: Array<GrantUserInfo>  | undefined) {
        this['grantee_user'] = granteeUser;
    }
    public get granteeUser(): Array<GrantUserInfo> | undefined {
        return this['grantee_user'];
    }
    public withCreateTime(createTime: number): GrantDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): GrantDTO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}