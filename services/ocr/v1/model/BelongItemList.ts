

export class BelongItemList {
    public name?: string;
    private 'item_number'?: string;
    public specification?: string;
    public unit?: string;
    public quantity?: string;
    private 'unit_price'?: string;
    public amount?: string;
    private 'tax_rate'?: string;
    public tax?: string;
    public constructor() { 
    }
    public withName(name: string): BelongItemList {
        this['name'] = name;
        return this;
    }
    public withItemNumber(itemNumber: string): BelongItemList {
        this['item_number'] = itemNumber;
        return this;
    }
    public set itemNumber(itemNumber: string  | undefined) {
        this['item_number'] = itemNumber;
    }
    public get itemNumber(): string | undefined {
        return this['item_number'];
    }
    public withSpecification(specification: string): BelongItemList {
        this['specification'] = specification;
        return this;
    }
    public withUnit(unit: string): BelongItemList {
        this['unit'] = unit;
        return this;
    }
    public withQuantity(quantity: string): BelongItemList {
        this['quantity'] = quantity;
        return this;
    }
    public withUnitPrice(unitPrice: string): BelongItemList {
        this['unit_price'] = unitPrice;
        return this;
    }
    public set unitPrice(unitPrice: string  | undefined) {
        this['unit_price'] = unitPrice;
    }
    public get unitPrice(): string | undefined {
        return this['unit_price'];
    }
    public withAmount(amount: string): BelongItemList {
        this['amount'] = amount;
        return this;
    }
    public withTaxRate(taxRate: string): BelongItemList {
        this['tax_rate'] = taxRate;
        return this;
    }
    public set taxRate(taxRate: string  | undefined) {
        this['tax_rate'] = taxRate;
    }
    public get taxRate(): string | undefined {
        return this['tax_rate'];
    }
    public withTax(tax: string): BelongItemList {
        this['tax'] = tax;
        return this;
    }
}