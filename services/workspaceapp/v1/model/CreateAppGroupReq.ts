import { AppTypeEnum } from './AppTypeEnum';
import { AuthorizationTypeEnum } from './AuthorizationTypeEnum';


export class CreateAppGroupReq {
    public name?: string;
    private 'app_server_group_id'?: string;
    public description?: string;
    private 'authorization_type'?: AuthorizationTypeEnum;
    private 'app_type'?: AppTypeEnum;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateAppGroupReq {
        this['name'] = name;
        return this;
    }
    public withAppServerGroupId(appServerGroupId: string): CreateAppGroupReq {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withDescription(description: string): CreateAppGroupReq {
        this['description'] = description;
        return this;
    }
    public withAuthorizationType(authorizationType: AuthorizationTypeEnum): CreateAppGroupReq {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AuthorizationTypeEnum  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AuthorizationTypeEnum | undefined {
        return this['authorization_type'];
    }
    public withAppType(appType: AppTypeEnum): CreateAppGroupReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
}