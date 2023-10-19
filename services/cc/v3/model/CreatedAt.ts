

export class CreatedAt {
    private 'created_at'?: Date;
    public constructor(createdAt?: Date) { 
        this['created_at'] = createdAt;
    }
    public withCreatedAt(createdAt: Date): CreatedAt {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}