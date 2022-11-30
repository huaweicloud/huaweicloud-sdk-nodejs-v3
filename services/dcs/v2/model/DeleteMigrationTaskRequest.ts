import { DeleteMigrateTaskRequest } from './DeleteMigrateTaskRequest';


export class DeleteMigrationTaskRequest {
    public body?: DeleteMigrateTaskRequest;
    public constructor() { 
    }
    public withBody(body: DeleteMigrateTaskRequest): DeleteMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}