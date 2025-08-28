import { DbUser } from './DbUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDbUserResponse extends SdkResponse {
    private 'db_user'?: DbUser;
    public constructor() { 
        super();
    }
    public withDbUser(dbUser: DbUser): ShowDbUserResponse {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: DbUser  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): DbUser | undefined {
        return this['db_user'];
    }
}