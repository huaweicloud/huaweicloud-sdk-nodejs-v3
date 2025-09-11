
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditBackRiskTemplateResponse extends SdkResponse {
    private 'db_id'?: string;
    private 'db_ip'?: string;
    private 'db_name'?: string;
    private 'db_port'?: number;
    public id?: string;
    public status?: number;
    public constructor() { 
        super();
    }
    public withDbId(dbId: string): ShowAuditBackRiskTemplateResponse {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbIp(dbIp: string): ShowAuditBackRiskTemplateResponse {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbName(dbName: string): ShowAuditBackRiskTemplateResponse {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbPort(dbPort: number): ShowAuditBackRiskTemplateResponse {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withId(id: string): ShowAuditBackRiskTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): ShowAuditBackRiskTemplateResponse {
        this['status'] = status;
        return this;
    }
}