
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataConnectorResponse extends SdkResponse {
    private 'connector_id'?: string;
    public constructor() { 
        super();
    }
    public withConnectorId(connectorId: string): CreateDataConnectorResponse {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
}