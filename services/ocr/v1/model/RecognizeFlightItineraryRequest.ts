import { FlightItineraryRequestBody } from './FlightItineraryRequestBody';


export class RecognizeFlightItineraryRequest {
    public body?: FlightItineraryRequestBody;
    public constructor() { 
    }
    public withBody(body: FlightItineraryRequestBody): RecognizeFlightItineraryRequest {
        this['body'] = body;
        return this;
    }
}