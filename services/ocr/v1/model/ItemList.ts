

export class ItemList {
    public name?: string;
    public specification?: string;
    public unit?: string;
    public quantity?: string;
    private 'unit_price'?: string | undefined;
    private 'license_plate_number'?: string | undefined;
    public amount?: string;
    private 'tax_rate'?: string | undefined;
    public tax?: string;
    private 'end_date'?: string | undefined;
    private 'start_date'?: string | undefined;
    private 'vehicle_type'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): ItemList {
        this['name'] = name;
        return this;
    }
    public withSpecification(specification: string): ItemList {
        this['specification'] = specification;
        return this;
    }
    public withUnit(unit: string): ItemList {
        this['unit'] = unit;
        return this;
    }
    public withQuantity(quantity: string): ItemList {
        this['quantity'] = quantity;
        return this;
    }
    public withUnitPrice(unitPrice: string): ItemList {
        this['unit_price'] = unitPrice;
        return this;
    }
    public set unitPrice(unitPrice: string | undefined) {
        this['unit_price'] = unitPrice;
    }
    public get unitPrice() {
        return this['unit_price'];
    }
    public withLicensePlateNumber(licensePlateNumber: string): ItemList {
        this['license_plate_number'] = licensePlateNumber;
        return this;
    }
    public set licensePlateNumber(licensePlateNumber: string | undefined) {
        this['license_plate_number'] = licensePlateNumber;
    }
    public get licensePlateNumber() {
        return this['license_plate_number'];
    }
    public withAmount(amount: string): ItemList {
        this['amount'] = amount;
        return this;
    }
    public withTaxRate(taxRate: string): ItemList {
        this['tax_rate'] = taxRate;
        return this;
    }
    public set taxRate(taxRate: string | undefined) {
        this['tax_rate'] = taxRate;
    }
    public get taxRate() {
        return this['tax_rate'];
    }
    public withTax(tax: string): ItemList {
        this['tax'] = tax;
        return this;
    }
    public withEndDate(endDate: string): ItemList {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
    public withStartDate(startDate: string): ItemList {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withVehicleType(vehicleType: string): ItemList {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType() {
        return this['vehicle_type'];
    }
}