import { FlightItineraryRequestBody } from './FlightItineraryRequestBody';


export class RecognizeFlightItineraryRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: FlightItineraryRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeFlightItineraryRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FlightItineraryRequestBody): RecognizeFlightItineraryRequest {
        this['body'] = body;
        return this;
    }
}