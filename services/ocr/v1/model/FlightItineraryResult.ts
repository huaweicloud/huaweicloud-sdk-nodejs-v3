import { ItineraryList } from './ItineraryList';


export class FlightItineraryResult {
    private 'serial_number'?: string | undefined;
    private 'passenger_name'?: string | undefined;
    private 'id_number'?: string | undefined;
    private 'endorsements_restrictions'?: string | undefined;
    private 'order_number'?: string | undefined;
    public fare?: string;
    private 'caac_development_fund'?: string | undefined;
    private 'fuel_surcharge'?: string | undefined;
    private 'other_taxes'?: string | undefined;
    public total?: string;
    private 'e_ticket_number'?: string | undefined;
    private 'check_code'?: string | undefined;
    private 'reference_information'?: string | undefined;
    public insurance?: string;
    private 'agent_code'?: string | undefined;
    private 'issue_organization'?: string | undefined;
    private 'issue_date'?: string | undefined;
    private 'itinerary_list'?: Array<ItineraryList> | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withSerialNumber(serialNumber: string): FlightItineraryResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber() {
        return this['serial_number'];
    }
    public withPassengerName(passengerName: string): FlightItineraryResult {
        this['passenger_name'] = passengerName;
        return this;
    }
    public set passengerName(passengerName: string | undefined) {
        this['passenger_name'] = passengerName;
    }
    public get passengerName() {
        return this['passenger_name'];
    }
    public withIdNumber(idNumber: string): FlightItineraryResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber() {
        return this['id_number'];
    }
    public withEndorsementsRestrictions(endorsementsRestrictions: string): FlightItineraryResult {
        this['endorsements_restrictions'] = endorsementsRestrictions;
        return this;
    }
    public set endorsementsRestrictions(endorsementsRestrictions: string | undefined) {
        this['endorsements_restrictions'] = endorsementsRestrictions;
    }
    public get endorsementsRestrictions() {
        return this['endorsements_restrictions'];
    }
    public withOrderNumber(orderNumber: string): FlightItineraryResult {
        this['order_number'] = orderNumber;
        return this;
    }
    public set orderNumber(orderNumber: string | undefined) {
        this['order_number'] = orderNumber;
    }
    public get orderNumber() {
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
    public set caacDevelopmentFund(caacDevelopmentFund: string | undefined) {
        this['caac_development_fund'] = caacDevelopmentFund;
    }
    public get caacDevelopmentFund() {
        return this['caac_development_fund'];
    }
    public withFuelSurcharge(fuelSurcharge: string): FlightItineraryResult {
        this['fuel_surcharge'] = fuelSurcharge;
        return this;
    }
    public set fuelSurcharge(fuelSurcharge: string | undefined) {
        this['fuel_surcharge'] = fuelSurcharge;
    }
    public get fuelSurcharge() {
        return this['fuel_surcharge'];
    }
    public withOtherTaxes(otherTaxes: string): FlightItineraryResult {
        this['other_taxes'] = otherTaxes;
        return this;
    }
    public set otherTaxes(otherTaxes: string | undefined) {
        this['other_taxes'] = otherTaxes;
    }
    public get otherTaxes() {
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
    public set eTicketNumber(eTicketNumber: string | undefined) {
        this['e_ticket_number'] = eTicketNumber;
    }
    public get eTicketNumber() {
        return this['e_ticket_number'];
    }
    public withCheckCode(checkCode: string): FlightItineraryResult {
        this['check_code'] = checkCode;
        return this;
    }
    public set checkCode(checkCode: string | undefined) {
        this['check_code'] = checkCode;
    }
    public get checkCode() {
        return this['check_code'];
    }
    public withReferenceInformation(referenceInformation: string): FlightItineraryResult {
        this['reference_information'] = referenceInformation;
        return this;
    }
    public set referenceInformation(referenceInformation: string | undefined) {
        this['reference_information'] = referenceInformation;
    }
    public get referenceInformation() {
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
    public set agentCode(agentCode: string | undefined) {
        this['agent_code'] = agentCode;
    }
    public get agentCode() {
        return this['agent_code'];
    }
    public withIssueOrganization(issueOrganization: string): FlightItineraryResult {
        this['issue_organization'] = issueOrganization;
        return this;
    }
    public set issueOrganization(issueOrganization: string | undefined) {
        this['issue_organization'] = issueOrganization;
    }
    public get issueOrganization() {
        return this['issue_organization'];
    }
    public withIssueDate(issueDate: string): FlightItineraryResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withItineraryList(itineraryList: Array<ItineraryList>): FlightItineraryResult {
        this['itinerary_list'] = itineraryList;
        return this;
    }
    public set itineraryList(itineraryList: Array<ItineraryList> | undefined) {
        this['itinerary_list'] = itineraryList;
    }
    public get itineraryList() {
        return this['itinerary_list'];
    }
    public withConfidence(confidence: object): FlightItineraryResult {
        this['confidence'] = confidence;
        return this;
    }
}