import { DeleteSecretForScheduleRequestBody } from './DeleteSecretForScheduleRequestBody';


export class DeleteSecretForScheduleRequest {
    private 'secret_name': string | undefined;
    public body?: DeleteSecretForScheduleRequestBody;
    public constructor(secretName?: any) { 
        this['secret_name'] = secretName;
    }
    public withSecretName(secretName: string): DeleteSecretForScheduleRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withBody(body: DeleteSecretForScheduleRequestBody): DeleteSecretForScheduleRequest {
        this['body'] = body;
        return this;
    }
}