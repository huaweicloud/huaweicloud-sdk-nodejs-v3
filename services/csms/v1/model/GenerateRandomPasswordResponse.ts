
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GenerateRandomPasswordResponse extends SdkResponse {
    public password?: string;
    public constructor() { 
        super();
    }
    public withPassword(password: string): GenerateRandomPasswordResponse {
        this['password'] = password;
        return this;
    }
}