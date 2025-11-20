import { CreatePostpaidInstanceOption } from './CreatePostpaidInstanceOption';


export class CreatePostPaidInstanceRequestBody {
    public instance?: CreatePostpaidInstanceOption;
    public constructor(instance?: CreatePostpaidInstanceOption) { 
        this['instance'] = instance;
    }
    public withInstance(instance: CreatePostpaidInstanceOption): CreatePostPaidInstanceRequestBody {
        this['instance'] = instance;
        return this;
    }
}