import { TrainTicketRequestBody } from './TrainTicketRequestBody';


export class RecognizeTrainTicketRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: TrainTicketRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeTrainTicketRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: TrainTicketRequestBody): RecognizeTrainTicketRequest {
        this['body'] = body;
        return this;
    }
}