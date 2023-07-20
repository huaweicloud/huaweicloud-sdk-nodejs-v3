import { UpdateSinkTaskQuotaReq } from './UpdateSinkTaskQuotaReq';


export class UpdateSinkTaskQuotaRequest {
    private 'connector_id'?: string;
    public body?: UpdateSinkTaskQuotaReq;
    public constructor(connectorId?: string) { 
        this['connector_id'] = connectorId;
    }
    public withConnectorId(connectorId: string): UpdateSinkTaskQuotaRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withBody(body: UpdateSinkTaskQuotaReq): UpdateSinkTaskQuotaRequest {
        this['body'] = body;
        return this;
    }
}