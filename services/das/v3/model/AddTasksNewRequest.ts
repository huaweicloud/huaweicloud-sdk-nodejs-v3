import { AddTasksNewRequestBody } from './AddTasksNewRequestBody';


export class AddTasksNewRequest {
    public body?: AddTasksNewRequestBody;
    public constructor() { 
    }
    public withBody(body: AddTasksNewRequestBody): AddTasksNewRequest {
        this['body'] = body;
        return this;
    }
}