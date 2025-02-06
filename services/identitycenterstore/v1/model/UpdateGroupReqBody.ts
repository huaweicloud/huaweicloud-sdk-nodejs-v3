import { AttributeOperationDto } from './AttributeOperationDto';


export class UpdateGroupReqBody {
    public operations?: Array<AttributeOperationDto>;
    public constructor(operations?: Array<AttributeOperationDto>) { 
        this['operations'] = operations;
    }
    public withOperations(operations: Array<AttributeOperationDto>): UpdateGroupReqBody {
        this['operations'] = operations;
        return this;
    }
}