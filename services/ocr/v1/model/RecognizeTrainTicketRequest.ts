import { TrainTicketRequestBody } from './TrainTicketRequestBody';


export class RecognizeTrainTicketRequest {
    public body?: TrainTicketRequestBody;
    public constructor() { 
    }
    public withBody(body: TrainTicketRequestBody): RecognizeTrainTicketRequest {
        this['body'] = body;
        return this;
    }
}