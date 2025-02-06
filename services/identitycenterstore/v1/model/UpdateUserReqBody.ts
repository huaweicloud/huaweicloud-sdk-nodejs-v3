import { AttributeOperationDto } from './AttributeOperationDto';


export class UpdateUserReqBody {
    public operations?: Array<AttributeOperationDto>;
    public constructor(operations?: Array<AttributeOperationDto>) { 
        this['operations'] = operations;
    }
    public withOperations(operations: Array<AttributeOperationDto>): UpdateUserReqBody {
        this['operations'] = operations;
        return this;
    }
}