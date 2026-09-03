import { ModifyTrainingQuotaRequest } from './ModifyTrainingQuotaRequest';


export class ModifyTrainingQuotasRequest {
    public body?: ModifyTrainingQuotaRequest;
    public constructor() { 
    }
    public withBody(body: ModifyTrainingQuotaRequest): ModifyTrainingQuotasRequest {
        this['body'] = body;
        return this;
    }
}