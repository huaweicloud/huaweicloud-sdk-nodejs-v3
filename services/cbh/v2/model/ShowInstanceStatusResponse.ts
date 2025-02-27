
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceStatusResponse extends SdkResponse {
    public name?: string;
    public status?: string;
    private 'server_id'?: string;
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
    public withServerId(serverId: string): ShowInstanceStatusResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}