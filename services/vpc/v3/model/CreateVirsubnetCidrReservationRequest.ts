import { CreateVirsubnetCidrReservationRequestBody } from './CreateVirsubnetCidrReservationRequestBody';


export class CreateVirsubnetCidrReservationRequest {
    public body?: CreateVirsubnetCidrReservationRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVirsubnetCidrReservationRequestBody): CreateVirsubnetCidrReservationRequest {
        this['body'] = body;
        return this;
    }
}