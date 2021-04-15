import { PostPaidServerEip } from './PostPaidServerEip';


export class PostPaidServerPublicip {
    public id?: string;
    public eip?: PostPaidServerEip;
    public constructor() { 
    }
    public withId(id: string): PostPaidServerPublicip {
        this['id'] = id;
        return this;
    }
    public withEip(eip: PostPaidServerEip): PostPaidServerPublicip {
        this['eip'] = eip;
        return this;
    }
}