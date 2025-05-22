import { ListProjectWorkHoursRequestBody } from './ListProjectWorkHoursRequestBody';


export class ListProjectWorkHoursRequest {
    public body?: ListProjectWorkHoursRequestBody;
    public constructor() { 
    }
    public withBody(body: ListProjectWorkHoursRequestBody): ListProjectWorkHoursRequest {
        this['body'] = body;
        return this;
    }
}