

export class Task {
    public index?: number;
    public name?: string;
    public status?: string;
    public detail?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withIndex(index: number): Task {
        this['index'] = index;
        return this;
    }
    public withName(name: string): Task {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): Task {
        this['status'] = status;
        return this;
    }
    public withDetail(detail: string): Task {
        this['detail'] = detail;
        return this;
    }
    public withCreatedAt(createdAt: string): Task {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Task {
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