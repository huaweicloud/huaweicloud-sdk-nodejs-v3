

export class UpdatedAt {
    private 'updated_at'?: Date;
    public constructor(updatedAt?: Date) { 
        this['updated_at'] = updatedAt;
    }
    public withUpdatedAt(updatedAt: Date): UpdatedAt {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}