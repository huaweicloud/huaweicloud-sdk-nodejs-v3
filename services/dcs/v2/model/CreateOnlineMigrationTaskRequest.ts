import { CreateOnlineMigrationTaskBody } from './CreateOnlineMigrationTaskBody';


export class CreateOnlineMigrationTaskRequest {
    public body?: CreateOnlineMigrationTaskBody;
    public constructor() { 
    }
    public withBody(body: CreateOnlineMigrationTaskBody): CreateOnlineMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}