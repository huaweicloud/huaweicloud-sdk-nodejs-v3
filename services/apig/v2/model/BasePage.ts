

export class BasePage {
    public size?: number;
    public total?: number;
    public constructor(size?: number, total?: number) { 
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): BasePage {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): BasePage {
        this['total'] = total;
        return this;
    }
}