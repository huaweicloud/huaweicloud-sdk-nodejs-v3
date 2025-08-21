

export class ForkRepositoryBaseDto {
    public id?: number;
    public name?: string;
    public archived?: boolean;
    private 'product_id'?: string;
    private 'product_name'?: string;
    public constructor() { 
    }
    public withId(id: number): ForkRepositoryBaseDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ForkRepositoryBaseDto {
        this['name'] = name;
        return this;
    }
    public withArchived(archived: boolean): ForkRepositoryBaseDto {
        this['archived'] = archived;
        return this;
    }
    public withProductId(productId: string): ForkRepositoryBaseDto {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): ForkRepositoryBaseDto {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
}