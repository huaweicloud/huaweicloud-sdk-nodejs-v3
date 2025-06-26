import { AppTypeEnum } from './AppTypeEnum';
import { AuthorizationTypeEnum } from './AuthorizationTypeEnum';


export class BaseAppGroup {
    public id?: string;
    public name?: string;
    private 'app_server_group_id'?: string;
    private 'app_server_group_name'?: string;
    public description?: string;
    private 'authorization_type'?: AuthorizationTypeEnum;
    private 'tenant_id'?: string;
    private 'app_type'?: AppTypeEnum;
    private 'create_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): BaseAppGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BaseAppGroup {
        this['name'] = name;
        return this;
    }
    public withAppServerGroupId(appServerGroupId: string): BaseAppGroup {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withAppServerGroupName(appServerGroupName: string): BaseAppGroup {
        this['app_server_group_name'] = appServerGroupName;
        return this;
    }
    public set appServerGroupName(appServerGroupName: string  | undefined) {
        this['app_server_group_name'] = appServerGroupName;
    }
    public get appServerGroupName(): string | undefined {
        return this['app_server_group_name'];
    }
    public withDescription(description: string): BaseAppGroup {
        this['description'] = description;
        return this;
    }
    public withAuthorizationType(authorizationType: AuthorizationTypeEnum): BaseAppGroup {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AuthorizationTypeEnum  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AuthorizationTypeEnum | undefined {
        return this['authorization_type'];
    }
    public withTenantId(tenantId: string): BaseAppGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAppType(appType: AppTypeEnum): BaseAppGroup {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
    public withCreateAt(createAt: Date): BaseAppGroup {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: Date  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): Date | undefined {
        return this['create_at'];
    }
}