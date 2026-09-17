
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LoginResponse extends SdkResponse {
    private 'connection_id'?: string;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'login_user'?: string;
    private 'database_name'?: string;
    private 'engine_type'?: string;
    public constructor() { 
        super();
    }
    public withConnectionId(connectionId: string): LoginResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withInstanceName(instanceName: string): LoginResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): LoginResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLoginUser(loginUser: string): LoginResponse {
        this['login_user'] = loginUser;
        return this;
    }
    public set loginUser(loginUser: string  | undefined) {
        this['login_user'] = loginUser;
    }
    public get loginUser(): string | undefined {
        return this['login_user'];
    }
    public withDatabaseName(databaseName: string): LoginResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withEngineType(engineType: string): LoginResponse {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}