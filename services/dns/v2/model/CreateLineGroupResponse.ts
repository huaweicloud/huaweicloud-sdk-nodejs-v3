
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLineGroupResponse extends SdkResponse {
    public name?: string;
    public lines?: Array<string>;
    public status?: string;
    public description?: string;
    private 'line_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateLineGroupResponse {
        this['name'] = name;
        return this;
    }
    public withLines(lines: Array<string>): CreateLineGroupResponse {
        this['lines'] = lines;
        return this;
    }
    public withStatus(status: string): CreateLineGroupResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): CreateLineGroupResponse {
        this['description'] = description;
        return this;
    }
    public withLineId(lineId: string): CreateLineGroupResponse {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId() {
        return this['line_id'];
    }
    public withCreatedAt(createdAt: string): CreateLineGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateLineGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}