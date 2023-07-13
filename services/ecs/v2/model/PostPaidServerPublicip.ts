import { PostPaidServerEip } from './PostPaidServerEip';


export class PostPaidServerPublicip {
    public id?: string;
    public eip?: PostPaidServerEip;
    private 'delete_on_termination'?: boolean | undefined;
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
    public withDeleteOnTermination(deleteOnTermination: boolean): PostPaidServerPublicip {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination() {
        return this['delete_on_termination'];
    }
}