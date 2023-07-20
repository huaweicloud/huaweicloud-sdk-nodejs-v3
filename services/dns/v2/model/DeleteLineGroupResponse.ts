
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteLineGroupResponse extends SdkResponse {
    public name?: string;
    public lines?: Array<string>;
    public status?: string;
    public description?: string;
    private 'line_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): DeleteLineGroupResponse {
        this['name'] = name;
        return this;
    }
    public withLines(lines: Array<string>): DeleteLineGroupResponse {
        this['lines'] = lines;
        return this;
    }
    public withStatus(status: string): DeleteLineGroupResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): DeleteLineGroupResponse {
        this['description'] = description;
        return this;
    }
    public withLineId(lineId: string): DeleteLineGroupResponse {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withCreatedAt(createdAt: string): DeleteLineGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): DeleteLineGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}