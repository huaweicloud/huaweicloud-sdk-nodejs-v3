

export class TrainTicketRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): TrainTicketRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): TrainTicketRequestBody {
        this['url'] = url;
        return this;
    }
}