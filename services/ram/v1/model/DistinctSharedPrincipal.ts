

export class DistinctSharedPrincipal {
    public id?: string;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): DistinctSharedPrincipal {
        this['id'] = id;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): DistinctSharedPrincipal {
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