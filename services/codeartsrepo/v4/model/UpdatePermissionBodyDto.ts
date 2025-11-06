import { UpdatePermissionDto } from './UpdatePermissionDto';


export class UpdatePermissionBodyDto {
    public data?: Array<UpdatePermissionDto>;
    public constructor() { 
    }
    public withData(data: Array<UpdatePermissionDto>): UpdatePermissionBodyDto {
        this['data'] = data;
        return this;
    }
}