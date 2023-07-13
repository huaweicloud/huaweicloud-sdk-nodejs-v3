import { TrackerConfigBody } from './TrackerConfigBody';


export class CreateTrackerConfigRequest {
    public body?: TrackerConfigBody;
    public constructor() { 
    }
    public withBody(body: TrackerConfigBody): CreateTrackerConfigRequest {
        this['body'] = body;
        return this;
    }
}