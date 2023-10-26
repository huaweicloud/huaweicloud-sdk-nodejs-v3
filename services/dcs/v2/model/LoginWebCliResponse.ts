
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LoginWebCliResponse extends SdkResponse {
    private 'client_id'?: string;
    public databases?: number;
    public constructor() { 
        super();
    }
    public withClientId(clientId: string): LoginWebCliResponse {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withDatabases(databases: number): LoginWebCliResponse {
        this['databases'] = databases;
        return this;
    }
}