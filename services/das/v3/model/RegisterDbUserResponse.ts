
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterDbUserResponse extends SdkResponse {
    private 'db_user_id'?: string;
    public constructor() { 
        super();
    }
    public withDbUserId(dbUserId: string): RegisterDbUserResponse {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
}