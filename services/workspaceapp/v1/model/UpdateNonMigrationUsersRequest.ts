import { UpdateNonMigrationUsersReq } from './UpdateNonMigrationUsersReq';


export class UpdateNonMigrationUsersRequest {
    private 'config_id'?: string;
    public body?: UpdateNonMigrationUsersReq;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): UpdateNonMigrationUsersRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: UpdateNonMigrationUsersReq): UpdateNonMigrationUsersRequest {
        this['body'] = body;
        return this;
    }
}