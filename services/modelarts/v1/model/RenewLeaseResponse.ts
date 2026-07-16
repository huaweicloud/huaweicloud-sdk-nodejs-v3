
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RenewLeaseResponse extends SdkResponse {
    private 'create_at'?: number;
    public duration?: number;
    public enable?: boolean;
    public type?: RenewLeaseResponseTypeEnum | string;
    private 'update_at'?: number;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: number): RenewLeaseResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDuration(duration: number): RenewLeaseResponse {
        this['duration'] = duration;
        return this;
    }
    public withEnable(enable: boolean): RenewLeaseResponse {
        this['enable'] = enable;
        return this;
    }
    public withType(type: RenewLeaseResponseTypeEnum | string): RenewLeaseResponse {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): RenewLeaseResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RenewLeaseResponseTypeEnum {
    TIMING = 'timing',
    IDLE = 'idle'
}
