
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckWhetherHostGroupCanBeCreatedResponse extends SdkResponse {
    private 'can_created'?: boolean;
    public constructor() { 
        super();
    }
    public withCanCreated(canCreated: boolean): CheckWhetherHostGroupCanBeCreatedResponse {
        this['can_created'] = canCreated;
        return this;
    }
    public set canCreated(canCreated: boolean  | undefined) {
        this['can_created'] = canCreated;
    }
    public get canCreated(): boolean | undefined {
        return this['can_created'];
    }
}