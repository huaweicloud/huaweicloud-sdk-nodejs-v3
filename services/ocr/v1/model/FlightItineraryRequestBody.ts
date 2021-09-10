

export class FlightItineraryRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): FlightItineraryRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): FlightItineraryRequestBody {
        this['url'] = url;
        return this;
    }
}