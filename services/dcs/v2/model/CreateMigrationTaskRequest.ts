import { CreateMigrationTaskBody } from './CreateMigrationTaskBody';


export class CreateMigrationTaskRequest {
    public body?: CreateMigrationTaskBody;
    public constructor() { 
    }
    public withBody(body: CreateMigrationTaskBody): CreateMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}