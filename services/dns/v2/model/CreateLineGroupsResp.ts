

export class CreateLineGroupsResp {
    public name?: string;
    public lines?: Array<string>;
    public status?: string;
    public description?: string;
    private 'line_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withName(name: string): CreateLineGroupsResp {
        this['name'] = name;
        return this;
    }
    public withLines(lines: Array<string>): CreateLineGroupsResp {
        this['lines'] = lines;
        return this;
    }
    public withStatus(status: string): CreateLineGroupsResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): CreateLineGroupsResp {
        this['description'] = description;
        return this;
    }
    public withLineId(lineId: string): CreateLineGroupsResp {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withCreatedAt(createdAt: string): CreateLineGroupsResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateLineGroupsResp {
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