import { SetStatsConfigBody } from './SetStatsConfigBody';


export class SetStatsConfigRequest {
    public body?: SetStatsConfigBody;
    public constructor() { 
    }
    public withBody(body: SetStatsConfigBody): SetStatsConfigRequest {
        this['body'] = body;
        return this;
    }
}