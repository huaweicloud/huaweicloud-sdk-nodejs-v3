import { SetDisasterRecoverySettingsRequestBody } from './SetDisasterRecoverySettingsRequestBody';


export class SetDisasterRecoverySettingsRequest {
    public body?: SetDisasterRecoverySettingsRequestBody;
    public constructor() { 
    }
    public withBody(body: SetDisasterRecoverySettingsRequestBody): SetDisasterRecoverySettingsRequest {
        this['body'] = body;
        return this;
    }
}