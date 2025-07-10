import { SetUserEventsLtsConfigurationsRequestBody } from './SetUserEventsLtsConfigurationsRequestBody';


export class SetUserEventsLtsConfigurationsRequest {
    public body?: SetUserEventsLtsConfigurationsRequestBody;
    public constructor() { 
    }
    public withBody(body: SetUserEventsLtsConfigurationsRequestBody): SetUserEventsLtsConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}