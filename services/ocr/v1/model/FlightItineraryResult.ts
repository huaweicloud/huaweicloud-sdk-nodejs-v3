import { ItineraryList } from './ItineraryList';


export class FlightItineraryResult {
    private 'serial_number'?: string;
    private 'passenger_name'?: string;
    private 'id_number'?: string;
    private 'endorsements_restrictions'?: string;
    private 'order_number'?: string;
    public fare?: string;
    private 'caac_development_fund'?: string;
    private 'fuel_surcharge'?: string;
    private 'other_taxes'?: string;
    public total?: string;
    private 'e_ticket_number'?: string;
    private 'check_code'?: string;
    private 'reference_information'?: string;
    public insurance?: string;
    private 'agent_code'?: string;
    private 'issue_organization'?: string;
    private 'issue_date'?: string;
    public tax?: string;
    private 'tax_rate'?: string;
    private 'buyer_name'?: string;
    private 'buyer_id'?: string;
    private 'number'?: string;
    private 'international_flag'?: string;
    private 'issue_status'?: string;
    private 'gp_number'?: string;
    private 'itinerary_list'?: Array<ItineraryList>;
    public confidence?: object;
    public constructor() { 
    }
    public withSerialNumber(serialNumber: string): FlightItineraryResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withPassengerName(passengerName: string): FlightItineraryResult {
        this['passenger_name'] = passengerName;
        return this;
    }
    public set passengerName(passengerName: string  | undefined) {
        this['passenger_name'] = passengerName;
    }
    public get passengerName(): string | undefined {
        return this['passenger_name'];
    }
    public withIdNumber(idNumber: string): FlightItineraryResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
        return this['id_number'];
    }
    public withEndorsementsRestrictions(endorsementsRestrictions: string): FlightItineraryResult {
        this['endorsements_restrictions'] = endorsementsRestrictions;
        return this;
    }
    public set endorsementsRestrictions(endorsementsRestrictions: string  | undefined) {
        this['endorsements_restrictions'] = endorsementsRestrictions;
    }
    public get endorsementsRestrictions(): string | undefined {
        return this['endorsements_restrictions'];
    }
    public withOrderNumber(orderNumber: string): FlightItineraryResult {
        this['order_number'] = orderNumber;
        return this;
    }
    public set orderNumber(orderNumber: string  | undefined) {
        this['order_number'] = orderNumber;
    }
    public get orderNumber(): string | undefined {
        return this['order_number'];
    }
    public withFare(fare: string): FlightItineraryResult {
        this['fare'] = fare;
        return this;
    }
    public withCaacDevelopmentFund(caacDevelopmentFund: string): FlightItineraryResult {
        this['caac_development_fund'] = caacDevelopmentFund;
        return this;
    }
    public set caacDevelopmentFund(caacDevelopmentFund: string  | undefined) {
        this['caac_development_fund'] = caacDevelopmentFund;
    }
    public get caacDevelopmentFund(): string | undefined {
        return this['caac_development_fund'];
    }
    public withFuelSurcharge(fuelSurcharge: string): FlightItineraryResult {
        this['fuel_surcharge'] = fuelSurcharge;
        return this;
    }
    public set fuelSurcharge(fuelSurcharge: string  | undefined) {
        this['fuel_surcharge'] = fuelSurcharge;
    }
    public get fuelSurcharge(): string | undefined {
        return this['fuel_surcharge'];
    }
    public withOtherTaxes(otherTaxes: string): FlightItineraryResult {
        this['other_taxes'] = otherTaxes;
        return this;
    }
    public set otherTaxes(otherTaxes: string  | undefined) {
        this['other_taxes'] = otherTaxes;
    }
    public get otherTaxes(): string | undefined {
        return this['other_taxes'];
    }
    public withTotal(total: string): FlightItineraryResult {
        this['total'] = total;
        return this;
    }
    public withETicketNumber(eTicketNumber: string): FlightItineraryResult {
        this['e_ticket_number'] = eTicketNumber;
        return this;
    }
    public set eTicketNumber(eTicketNumber: string  | undefined) {
        this['e_ticket_number'] = eTicketNumber;
    }
    public get eTicketNumber(): string | undefined {
        return this['e_ticket_number'];
    }
    public withCheckCode(checkCode: string): FlightItineraryResult {
        this['check_code'] = checkCode;
        return this;
    }
    public set checkCode(checkCode: string  | undefined) {
        this['check_code'] = checkCode;
    }
    public get checkCode(): string | undefined {
        return this['check_code'];
    }
    public withReferenceInformation(referenceInformation: string): FlightItineraryResult {
        this['reference_information'] = referenceInformation;
        return this;
    }
    public set referenceInformation(referenceInformation: string  | undefined) {
        this['reference_information'] = referenceInformation;
    }
    public get referenceInformation(): string | undefined {
        return this['reference_information'];
    }
    public withInsurance(insurance: string): FlightItineraryResult {
        this['insurance'] = insurance;
        return this;
    }
    public withAgentCode(agentCode: string): FlightItineraryResult {
        this['agent_code'] = agentCode;
        return this;
    }
    public set agentCode(agentCode: string  | undefined) {
        this['agent_code'] = agentCode;
    }
    public get agentCode(): string | undefined {
        return this['agent_code'];
    }
    public withIssueOrganization(issueOrganization: string): FlightItineraryResult {
        this['issue_organization'] = issueOrganization;
        return this;
    }
    public set issueOrganization(issueOrganization: string  | undefined) {
        this['issue_organization'] = issueOrganization;
    }
    public get issueOrganization(): string | undefined {
        return this['issue_organization'];
    }
    public withIssueDate(issueDate: string): FlightItineraryResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withTax(tax: string): FlightItineraryResult {
        this['tax'] = tax;
        return this;
    }
    public withTaxRate(taxRate: string): FlightItineraryResult {
        this['tax_rate'] = taxRate;
        return this;
    }
    public set taxRate(taxRate: string  | undefined) {
        this['tax_rate'] = taxRate;
    }
    public get taxRate(): string | undefined {
        return this['tax_rate'];
    }
    public withBuyerName(buyerName: string): FlightItineraryResult {
        this['buyer_name'] = buyerName;
        return this;
    }
    public set buyerName(buyerName: string  | undefined) {
        this['buyer_name'] = buyerName;
    }
    public get buyerName(): string | undefined {
        return this['buyer_name'];
    }
    public withBuyerId(buyerId: string): FlightItineraryResult {
        this['buyer_id'] = buyerId;
        return this;
    }
    public set buyerId(buyerId: string  | undefined) {
        this['buyer_id'] = buyerId;
    }
    public get buyerId(): string | undefined {
        return this['buyer_id'];
    }
    public withModelNumber(modelNumber: string): FlightItineraryResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withInternationalFlag(internationalFlag: string): FlightItineraryResult {
        this['international_flag'] = internationalFlag;
        return this;
    }
    public set internationalFlag(internationalFlag: string  | undefined) {
        this['international_flag'] = internationalFlag;
    }
    public get internationalFlag(): string | undefined {
        return this['international_flag'];
    }
    public withIssueStatus(issueStatus: string): FlightItineraryResult {
        this['issue_status'] = issueStatus;
        return this;
    }
    public set issueStatus(issueStatus: string  | undefined) {
        this['issue_status'] = issueStatus;
    }
    public get issueStatus(): string | undefined {
        return this['issue_status'];
    }
    public withGpNumber(gpNumber: string): FlightItineraryResult {
        this['gp_number'] = gpNumber;
        return this;
    }
    public set gpNumber(gpNumber: string  | undefined) {
        this['gp_number'] = gpNumber;
    }
    public get gpNumber(): string | undefined {
        return this['gp_number'];
    }
    public withItineraryList(itineraryList: Array<ItineraryList>): FlightItineraryResult {
        this['itinerary_list'] = itineraryList;
        return this;
    }
    public set itineraryList(itineraryList: Array<ItineraryList>  | undefined) {
        this['itinerary_list'] = itineraryList;
    }
    public get itineraryList(): Array<ItineraryList> | undefined {
        return this['itinerary_list'];
    }
    public withConfidence(confidence: object): FlightItineraryResult {
        this['confidence'] = confidence;
        return this;
    }
}