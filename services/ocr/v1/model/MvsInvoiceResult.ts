

export class MvsInvoiceResult {
    public code?: string;
    private 'number'?: string | undefined;
    private 'machine_printed_code'?: string | undefined;
    private 'machine_printed_number'?: string | undefined;
    private 'issue_date'?: string | undefined;
    private 'machine_number'?: string | undefined;
    private 'buyer_name'?: string | undefined;
    private 'buyer_organization_number'?: string | undefined;
    private 'buyer_id'?: string | undefined;
    private 'buyer_address'?: string | undefined;
    private 'buyer_phone'?: string | undefined;
    private 'seller_name'?: string | undefined;
    private 'seller_phone'?: string | undefined;
    private 'seller_id'?: string | undefined;
    private 'seller_account'?: string | undefined;
    private 'seller_address'?: string | undefined;
    private 'licence_plate_number'?: string | undefined;
    private 'registration_number'?: string | undefined;
    private 'dept_motor_vehicles'?: string | undefined;
    private 'seller_bank'?: string | undefined;
    private 'vehicle_type'?: string | undefined;
    private 'brand_model'?: string | undefined;
    private 'manufacturing_location'?: string | undefined;
    private 'quality_certificate'?: string | undefined;
    private 'import_certificate'?: string | undefined;
    private 'inspection_number'?: string | undefined;
    private 'engine_number'?: string | undefined;
    private 'vehicle_identification_number'?: string | undefined;
    public tonnage?: string;
    private 'seating_capacity'?: string | undefined;
    private 'tax_authority'?: string | undefined;
    private 'tax_authority_code'?: string | undefined;
    private 'tax_payment_receipt'?: string | undefined;
    private 'tax_rate'?: string | undefined;
    public tax?: string;
    private 'tax_exclusive_price'?: string | undefined;
    public total?: string;
    private 'total_chinese'?: string | undefined;
    private 'fiscal_code'?: string | undefined;
    private 'auction_org_name'?: string | undefined;
    private 'auction_org_address'?: string | undefined;
    private 'auction_org_id'?: string | undefined;
    private 'auction_org_bank_account'?: string | undefined;
    private 'auction_org_phone'?: string | undefined;
    private 'used_vehicle_market_name'?: string | undefined;
    private 'used_vehicle_market_id'?: string | undefined;
    private 'used_vehicle_market_address'?: string | undefined;
    private 'used_vehicle_market_bank_account'?: string | undefined;
    private 'used_vehicle_market_phone'?: string | undefined;
    public remark?: string;
    private 'drawer_name'?: string | undefined;
    public type?: string;
    private 'text_location'?: object | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withCode(code: string): MvsInvoiceResult {
        this['code'] = code;
        return this;
    }
    public withModelNumber(modelNumber: string): MvsInvoiceResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withMachinePrintedCode(machinePrintedCode: string): MvsInvoiceResult {
        this['machine_printed_code'] = machinePrintedCode;
        return this;
    }
    public set machinePrintedCode(machinePrintedCode: string | undefined) {
        this['machine_printed_code'] = machinePrintedCode;
    }
    public get machinePrintedCode() {
        return this['machine_printed_code'];
    }
    public withMachinePrintedNumber(machinePrintedNumber: string): MvsInvoiceResult {
        this['machine_printed_number'] = machinePrintedNumber;
        return this;
    }
    public set machinePrintedNumber(machinePrintedNumber: string | undefined) {
        this['machine_printed_number'] = machinePrintedNumber;
    }
    public get machinePrintedNumber() {
        return this['machine_printed_number'];
    }
    public withIssueDate(issueDate: string): MvsInvoiceResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withMachineNumber(machineNumber: string): MvsInvoiceResult {
        this['machine_number'] = machineNumber;
        return this;
    }
    public set machineNumber(machineNumber: string | undefined) {
        this['machine_number'] = machineNumber;
    }
    public get machineNumber() {
        return this['machine_number'];
    }
    public withBuyerName(buyerName: string): MvsInvoiceResult {
        this['buyer_name'] = buyerName;
        return this;
    }
    public set buyerName(buyerName: string | undefined) {
        this['buyer_name'] = buyerName;
    }
    public get buyerName() {
        return this['buyer_name'];
    }
    public withBuyerOrganizationNumber(buyerOrganizationNumber: string): MvsInvoiceResult {
        this['buyer_organization_number'] = buyerOrganizationNumber;
        return this;
    }
    public set buyerOrganizationNumber(buyerOrganizationNumber: string | undefined) {
        this['buyer_organization_number'] = buyerOrganizationNumber;
    }
    public get buyerOrganizationNumber() {
        return this['buyer_organization_number'];
    }
    public withBuyerId(buyerId: string): MvsInvoiceResult {
        this['buyer_id'] = buyerId;
        return this;
    }
    public set buyerId(buyerId: string | undefined) {
        this['buyer_id'] = buyerId;
    }
    public get buyerId() {
        return this['buyer_id'];
    }
    public withBuyerAddress(buyerAddress: string): MvsInvoiceResult {
        this['buyer_address'] = buyerAddress;
        return this;
    }
    public set buyerAddress(buyerAddress: string | undefined) {
        this['buyer_address'] = buyerAddress;
    }
    public get buyerAddress() {
        return this['buyer_address'];
    }
    public withBuyerPhone(buyerPhone: string): MvsInvoiceResult {
        this['buyer_phone'] = buyerPhone;
        return this;
    }
    public set buyerPhone(buyerPhone: string | undefined) {
        this['buyer_phone'] = buyerPhone;
    }
    public get buyerPhone() {
        return this['buyer_phone'];
    }
    public withSellerName(sellerName: string): MvsInvoiceResult {
        this['seller_name'] = sellerName;
        return this;
    }
    public set sellerName(sellerName: string | undefined) {
        this['seller_name'] = sellerName;
    }
    public get sellerName() {
        return this['seller_name'];
    }
    public withSellerPhone(sellerPhone: string): MvsInvoiceResult {
        this['seller_phone'] = sellerPhone;
        return this;
    }
    public set sellerPhone(sellerPhone: string | undefined) {
        this['seller_phone'] = sellerPhone;
    }
    public get sellerPhone() {
        return this['seller_phone'];
    }
    public withSellerId(sellerId: string): MvsInvoiceResult {
        this['seller_id'] = sellerId;
        return this;
    }
    public set sellerId(sellerId: string | undefined) {
        this['seller_id'] = sellerId;
    }
    public get sellerId() {
        return this['seller_id'];
    }
    public withSellerAccount(sellerAccount: string): MvsInvoiceResult {
        this['seller_account'] = sellerAccount;
        return this;
    }
    public set sellerAccount(sellerAccount: string | undefined) {
        this['seller_account'] = sellerAccount;
    }
    public get sellerAccount() {
        return this['seller_account'];
    }
    public withSellerAddress(sellerAddress: string): MvsInvoiceResult {
        this['seller_address'] = sellerAddress;
        return this;
    }
    public set sellerAddress(sellerAddress: string | undefined) {
        this['seller_address'] = sellerAddress;
    }
    public get sellerAddress() {
        return this['seller_address'];
    }
    public withLicencePlateNumber(licencePlateNumber: string): MvsInvoiceResult {
        this['licence_plate_number'] = licencePlateNumber;
        return this;
    }
    public set licencePlateNumber(licencePlateNumber: string | undefined) {
        this['licence_plate_number'] = licencePlateNumber;
    }
    public get licencePlateNumber() {
        return this['licence_plate_number'];
    }
    public withRegistrationNumber(registrationNumber: string): MvsInvoiceResult {
        this['registration_number'] = registrationNumber;
        return this;
    }
    public set registrationNumber(registrationNumber: string | undefined) {
        this['registration_number'] = registrationNumber;
    }
    public get registrationNumber() {
        return this['registration_number'];
    }
    public withDeptMotorVehicles(deptMotorVehicles: string): MvsInvoiceResult {
        this['dept_motor_vehicles'] = deptMotorVehicles;
        return this;
    }
    public set deptMotorVehicles(deptMotorVehicles: string | undefined) {
        this['dept_motor_vehicles'] = deptMotorVehicles;
    }
    public get deptMotorVehicles() {
        return this['dept_motor_vehicles'];
    }
    public withSellerBank(sellerBank: string): MvsInvoiceResult {
        this['seller_bank'] = sellerBank;
        return this;
    }
    public set sellerBank(sellerBank: string | undefined) {
        this['seller_bank'] = sellerBank;
    }
    public get sellerBank() {
        return this['seller_bank'];
    }
    public withVehicleType(vehicleType: string): MvsInvoiceResult {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType() {
        return this['vehicle_type'];
    }
    public withBrandModel(brandModel: string): MvsInvoiceResult {
        this['brand_model'] = brandModel;
        return this;
    }
    public set brandModel(brandModel: string | undefined) {
        this['brand_model'] = brandModel;
    }
    public get brandModel() {
        return this['brand_model'];
    }
    public withManufacturingLocation(manufacturingLocation: string): MvsInvoiceResult {
        this['manufacturing_location'] = manufacturingLocation;
        return this;
    }
    public set manufacturingLocation(manufacturingLocation: string | undefined) {
        this['manufacturing_location'] = manufacturingLocation;
    }
    public get manufacturingLocation() {
        return this['manufacturing_location'];
    }
    public withQualityCertificate(qualityCertificate: string): MvsInvoiceResult {
        this['quality_certificate'] = qualityCertificate;
        return this;
    }
    public set qualityCertificate(qualityCertificate: string | undefined) {
        this['quality_certificate'] = qualityCertificate;
    }
    public get qualityCertificate() {
        return this['quality_certificate'];
    }
    public withImportCertificate(importCertificate: string): MvsInvoiceResult {
        this['import_certificate'] = importCertificate;
        return this;
    }
    public set importCertificate(importCertificate: string | undefined) {
        this['import_certificate'] = importCertificate;
    }
    public get importCertificate() {
        return this['import_certificate'];
    }
    public withInspectionNumber(inspectionNumber: string): MvsInvoiceResult {
        this['inspection_number'] = inspectionNumber;
        return this;
    }
    public set inspectionNumber(inspectionNumber: string | undefined) {
        this['inspection_number'] = inspectionNumber;
    }
    public get inspectionNumber() {
        return this['inspection_number'];
    }
    public withEngineNumber(engineNumber: string): MvsInvoiceResult {
        this['engine_number'] = engineNumber;
        return this;
    }
    public set engineNumber(engineNumber: string | undefined) {
        this['engine_number'] = engineNumber;
    }
    public get engineNumber() {
        return this['engine_number'];
    }
    public withVehicleIdentificationNumber(vehicleIdentificationNumber: string): MvsInvoiceResult {
        this['vehicle_identification_number'] = vehicleIdentificationNumber;
        return this;
    }
    public set vehicleIdentificationNumber(vehicleIdentificationNumber: string | undefined) {
        this['vehicle_identification_number'] = vehicleIdentificationNumber;
    }
    public get vehicleIdentificationNumber() {
        return this['vehicle_identification_number'];
    }
    public withTonnage(tonnage: string): MvsInvoiceResult {
        this['tonnage'] = tonnage;
        return this;
    }
    public withSeatingCapacity(seatingCapacity: string): MvsInvoiceResult {
        this['seating_capacity'] = seatingCapacity;
        return this;
    }
    public set seatingCapacity(seatingCapacity: string | undefined) {
        this['seating_capacity'] = seatingCapacity;
    }
    public get seatingCapacity() {
        return this['seating_capacity'];
    }
    public withTaxAuthority(taxAuthority: string): MvsInvoiceResult {
        this['tax_authority'] = taxAuthority;
        return this;
    }
    public set taxAuthority(taxAuthority: string | undefined) {
        this['tax_authority'] = taxAuthority;
    }
    public get taxAuthority() {
        return this['tax_authority'];
    }
    public withTaxAuthorityCode(taxAuthorityCode: string): MvsInvoiceResult {
        this['tax_authority_code'] = taxAuthorityCode;
        return this;
    }
    public set taxAuthorityCode(taxAuthorityCode: string | undefined) {
        this['tax_authority_code'] = taxAuthorityCode;
    }
    public get taxAuthorityCode() {
        return this['tax_authority_code'];
    }
    public withTaxPaymentReceipt(taxPaymentReceipt: string): MvsInvoiceResult {
        this['tax_payment_receipt'] = taxPaymentReceipt;
        return this;
    }
    public set taxPaymentReceipt(taxPaymentReceipt: string | undefined) {
        this['tax_payment_receipt'] = taxPaymentReceipt;
    }
    public get taxPaymentReceipt() {
        return this['tax_payment_receipt'];
    }
    public withTaxRate(taxRate: string): MvsInvoiceResult {
        this['tax_rate'] = taxRate;
        return this;
    }
    public set taxRate(taxRate: string | undefined) {
        this['tax_rate'] = taxRate;
    }
    public get taxRate() {
        return this['tax_rate'];
    }
    public withTax(tax: string): MvsInvoiceResult {
        this['tax'] = tax;
        return this;
    }
    public withTaxExclusivePrice(taxExclusivePrice: string): MvsInvoiceResult {
        this['tax_exclusive_price'] = taxExclusivePrice;
        return this;
    }
    public set taxExclusivePrice(taxExclusivePrice: string | undefined) {
        this['tax_exclusive_price'] = taxExclusivePrice;
    }
    public get taxExclusivePrice() {
        return this['tax_exclusive_price'];
    }
    public withTotal(total: string): MvsInvoiceResult {
        this['total'] = total;
        return this;
    }
    public withTotalChinese(totalChinese: string): MvsInvoiceResult {
        this['total_chinese'] = totalChinese;
        return this;
    }
    public set totalChinese(totalChinese: string | undefined) {
        this['total_chinese'] = totalChinese;
    }
    public get totalChinese() {
        return this['total_chinese'];
    }
    public withFiscalCode(fiscalCode: string): MvsInvoiceResult {
        this['fiscal_code'] = fiscalCode;
        return this;
    }
    public set fiscalCode(fiscalCode: string | undefined) {
        this['fiscal_code'] = fiscalCode;
    }
    public get fiscalCode() {
        return this['fiscal_code'];
    }
    public withAuctionOrgName(auctionOrgName: string): MvsInvoiceResult {
        this['auction_org_name'] = auctionOrgName;
        return this;
    }
    public set auctionOrgName(auctionOrgName: string | undefined) {
        this['auction_org_name'] = auctionOrgName;
    }
    public get auctionOrgName() {
        return this['auction_org_name'];
    }
    public withAuctionOrgAddress(auctionOrgAddress: string): MvsInvoiceResult {
        this['auction_org_address'] = auctionOrgAddress;
        return this;
    }
    public set auctionOrgAddress(auctionOrgAddress: string | undefined) {
        this['auction_org_address'] = auctionOrgAddress;
    }
    public get auctionOrgAddress() {
        return this['auction_org_address'];
    }
    public withAuctionOrgId(auctionOrgId: string): MvsInvoiceResult {
        this['auction_org_id'] = auctionOrgId;
        return this;
    }
    public set auctionOrgId(auctionOrgId: string | undefined) {
        this['auction_org_id'] = auctionOrgId;
    }
    public get auctionOrgId() {
        return this['auction_org_id'];
    }
    public withAuctionOrgBankAccount(auctionOrgBankAccount: string): MvsInvoiceResult {
        this['auction_org_bank_account'] = auctionOrgBankAccount;
        return this;
    }
    public set auctionOrgBankAccount(auctionOrgBankAccount: string | undefined) {
        this['auction_org_bank_account'] = auctionOrgBankAccount;
    }
    public get auctionOrgBankAccount() {
        return this['auction_org_bank_account'];
    }
    public withAuctionOrgPhone(auctionOrgPhone: string): MvsInvoiceResult {
        this['auction_org_phone'] = auctionOrgPhone;
        return this;
    }
    public set auctionOrgPhone(auctionOrgPhone: string | undefined) {
        this['auction_org_phone'] = auctionOrgPhone;
    }
    public get auctionOrgPhone() {
        return this['auction_org_phone'];
    }
    public withUsedVehicleMarketName(usedVehicleMarketName: string): MvsInvoiceResult {
        this['used_vehicle_market_name'] = usedVehicleMarketName;
        return this;
    }
    public set usedVehicleMarketName(usedVehicleMarketName: string | undefined) {
        this['used_vehicle_market_name'] = usedVehicleMarketName;
    }
    public get usedVehicleMarketName() {
        return this['used_vehicle_market_name'];
    }
    public withUsedVehicleMarketId(usedVehicleMarketId: string): MvsInvoiceResult {
        this['used_vehicle_market_id'] = usedVehicleMarketId;
        return this;
    }
    public set usedVehicleMarketId(usedVehicleMarketId: string | undefined) {
        this['used_vehicle_market_id'] = usedVehicleMarketId;
    }
    public get usedVehicleMarketId() {
        return this['used_vehicle_market_id'];
    }
    public withUsedVehicleMarketAddress(usedVehicleMarketAddress: string): MvsInvoiceResult {
        this['used_vehicle_market_address'] = usedVehicleMarketAddress;
        return this;
    }
    public set usedVehicleMarketAddress(usedVehicleMarketAddress: string | undefined) {
        this['used_vehicle_market_address'] = usedVehicleMarketAddress;
    }
    public get usedVehicleMarketAddress() {
        return this['used_vehicle_market_address'];
    }
    public withUsedVehicleMarketBankAccount(usedVehicleMarketBankAccount: string): MvsInvoiceResult {
        this['used_vehicle_market_bank_account'] = usedVehicleMarketBankAccount;
        return this;
    }
    public set usedVehicleMarketBankAccount(usedVehicleMarketBankAccount: string | undefined) {
        this['used_vehicle_market_bank_account'] = usedVehicleMarketBankAccount;
    }
    public get usedVehicleMarketBankAccount() {
        return this['used_vehicle_market_bank_account'];
    }
    public withUsedVehicleMarketPhone(usedVehicleMarketPhone: string): MvsInvoiceResult {
        this['used_vehicle_market_phone'] = usedVehicleMarketPhone;
        return this;
    }
    public set usedVehicleMarketPhone(usedVehicleMarketPhone: string | undefined) {
        this['used_vehicle_market_phone'] = usedVehicleMarketPhone;
    }
    public get usedVehicleMarketPhone() {
        return this['used_vehicle_market_phone'];
    }
    public withRemark(remark: string): MvsInvoiceResult {
        this['remark'] = remark;
        return this;
    }
    public withDrawerName(drawerName: string): MvsInvoiceResult {
        this['drawer_name'] = drawerName;
        return this;
    }
    public set drawerName(drawerName: string | undefined) {
        this['drawer_name'] = drawerName;
    }
    public get drawerName() {
        return this['drawer_name'];
    }
    public withType(type: string): MvsInvoiceResult {
        this['type'] = type;
        return this;
    }
    public withTextLocation(textLocation: object): MvsInvoiceResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation() {
        return this['text_location'];
    }
    public withConfidence(confidence: object): MvsInvoiceResult {
        this['confidence'] = confidence;
        return this;
    }
}