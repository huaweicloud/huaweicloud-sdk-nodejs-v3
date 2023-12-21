
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceStatusResponse extends SdkResponse {
    public name?: string;
    public status?: string;
    private 'server_id'?: object;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowInstanceStatusResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowInstanceStatusResponse {
        this['status'] = status;
        return this;
    }
    public withServerId(serverId: object): ShowInstanceStatusResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: object  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): object | undefined {
        return this['server_id'];
    }
}