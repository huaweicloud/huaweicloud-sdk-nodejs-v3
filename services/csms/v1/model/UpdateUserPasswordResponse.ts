
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserPasswordResponse extends SdkResponse {
    private 'user_id'?: string;
    public constructor() { 
        super();
    }
    public withUserId(userId: string): UpdateUserPasswordResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}