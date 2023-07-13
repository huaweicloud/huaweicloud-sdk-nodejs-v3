
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectorResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'connector_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateConnectorResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withConnectorId(connectorId: string): CreateConnectorResponse {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId() {
        return this['connector_id'];
    }
}