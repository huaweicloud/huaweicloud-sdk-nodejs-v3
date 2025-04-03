import { OperationItemDto } from './OperationItemDto';


export class PatchUserReqBody {
    public schemas?: Array<string>;
    private 'Operations'?: Array<OperationItemDto>;
    public constructor(schemas?: Array<string>, operations?: Array<OperationItemDto>) { 
        this['schemas'] = schemas;
        this['Operations'] = operations;
    }
    public withSchemas(schemas: Array<string>): PatchUserReqBody {
        this['schemas'] = schemas;
        return this;
    }
    public withOperations(operations: Array<OperationItemDto>): PatchUserReqBody {
        this['Operations'] = operations;
        return this;
    }
    public set operations(operations: Array<OperationItemDto>  | undefined) {
        this['Operations'] = operations;
    }
    public get operations(): Array<OperationItemDto> | undefined {
        return this['Operations'];
    }
}